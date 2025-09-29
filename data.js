// Monthly Income
var revenue;
var userName;
var email;
var age;

// Calculated Data
var monthlyNeed;
var monthlyWant;
var monthlySaving;
var revenueAfterSave;

var housing;
var food;
var transport;
var education;

var clothing;
var health;
var leisure;

var fstatus;
var extraNeed;
var fcomment;

// Replace this with your NEW Web App URL after redeployment
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzJPMyfhVcZlFVYp66HPO6NDlK3uifxqqD0ozMkKxsPvtwctdhpjbDAXHj4OsLTav1k/exec';

// Function to send data to Google Sheets
async function sendToGoogleSheet(userData) {
    try {
        // Add timestamp to avoid caching issues
        const urlWithTimestamp = GOOGLE_SHEET_URL + '?t=' + new Date().getTime();
        
        const response = await fetch(urlWithTimestamp, {
            method: 'POST',
            mode: 'no-cors', // Use 'no-cors' to avoid CORS issues
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        
        // With 'no-cors' we can't read the response, but data should still be saved
        console.log('Data sent to Google Sheet (response not readable in no-cors mode)');
        
    } catch (error) {
        console.error('Error saving to Google Sheet:', error);
        // Don't show alert to user - fail silently
    }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("revSub").addEventListener("click", function(event){
        event.preventDefault(); // Prevents page reload
        userName = document.getElementById("userName").value;
        email = document.getElementById("userEmail").value;
        revenue = document.getElementById("rev").value;
        age = document.getElementById("userAge").value;
        
        if( revenue == "" ){
            alert("আপনার মাসিক আয় লিখুন");
            return;
        }
        else if(userName == ""){
            alert("আপনার নাম লিখুন");
            return;
        }
        else if(age == "" || age <= 10 || age > 100){
            alert("আপনার সঠিক বয়স লিখুন, ১০ থেকে ১০০ এর মধ্যে");
            return;
        }
        else{
            // Prepare data for Google Sheet
            const userData = {
                userName: userName,
                email: email,
                age: age,
                revenue: revenue
            };
            
            // Send data to Google Sheet (will work silently in background)
            sendToGoogleSheet(userData);
            
            // Your existing calculation code
            monthlyNeed = Math.round(revenue*(50/100));
            monthlyWant = Math.round(revenue*(30/100));
            monthlySaving = Math.round(revenue*(20/100));
            revenueAfterSave = Math.round((monthlyNeed+monthlyWant)-monthlySaving);

            housing = Math.round(monthlyNeed*(50/100));
            food = Math.round(monthlyNeed*(20/100));
            transport = Math.round(monthlyNeed*(15/100));
            education = Math.round(monthlyNeed*(15/100));

            clothing = Math.round(monthlyWant*(25/100));
            health = Math.round(monthlyWant*(30/100));
            leisure = Math.round(monthlyWant*(25/100));
            extraNeed = Math.round(monthlyWant*(20/100));

            
            if(revenue < 30000){
                fstatus = "নিম্নবিত্ত";
                fcomment = "আপনার আয় বৃদ্ধি করতে হবে, আপনি যদি চাকরি করেন তাহলে অন্য ভালো চাকরি খুজার চেষ্টা করেন, অথবা নিজের ছোট ব্যাবসা শুরু করেন আপনার জমা করা অর্থ দিয়ে, তবে ব্যাবসা করার আগে কিছু ইউটুবে ভিডিও দেখে অথবা ব্যাবসা সম্পর্কে অভিজ্ঞ এমন কারোর সাথে পরামর্শ করে নিবেন";
            }
            else if(revenue < 50000){
                fstatus = "নিম্নমধ্যবিত্ত";
                fcomment = "আপনার আয় ঠিক আছে তবে সুযোগ বুঝে বৃদ্ধি করতে হবে, আপনি যদি চাকরি করেন তাহলে অন্য ভালো চাকরি খুজার চেষ্টা করেন, অথবা নিজের ছোট ব্যাবসা শুরু করেন আপনার জমা করা অর্থ দিয়ে, তবে ব্যাবসা করার আগে কিছু ইউটুবে ভিডিও দেখে অথবা ব্যাবসা সম্পর্কে অভিজ্ঞ এমন কারোর সাথে পরামর্শ করে নিবেন";
            }
            else if(revenue < 100000){
                fstatus = "উচ্চমধ্যবিত্ত";
                fcomment = "আপনার আয়ের পরিমান ঠিক আছে, একটি তিন থেকে ৫ সদস্যের (তিন/চার হলে ভালো) ছোট পরিবার চালানোর জন্য ঠিক আছে, তবে সুযোগ বুঝে ভালো ভাবে পরামর্শ নিয়ে এবং ভালোভাবে ভেবে চিনতে আপনার সংরক্ষিত অর্থের অর্ধেক পরিমান অর্থ বিনিয়োগ করুন";
            }
            else{
                fstatus = "উচ্চবিত্ত";
                fcomment = "আপনার আয়ের পরিমান অনেক বেশি, যেকোনো ছোট ব্যাবসা, স্টক মার্কেটে আপনার সংরক্ষিত অর্থ বিনিয়োগ করুন, তবে অবশই ভেবে চিনতে বিনিয়োগ করবেন যেন দুঃসময়ের জন্য আপনার কাজে সংরক্ষিত অর্থ থাকে";
            }
            document.getElementById("status").innerHTML = fstatus;
            document.getElementById("comment").innerHTML = fcomment;
            document.getElementById("outputNeed").innerHTML = monthlyNeed;
            document.getElementById("outputWant").innerHTML = monthlyWant;
            document.getElementById("outputSave").innerHTML = monthlySaving;

            document.getElementById("outputHousing").innerHTML = housing;
            document.getElementById("outputFood").innerHTML = food;
            document.getElementById("outputTransport").innerHTML = transport;
            document.getElementById("outputEducation").innerHTML = education;

            document.getElementById("outputClothing").innerHTML = clothing;
            document.getElementById("outputHealth").innerHTML = health;
            document.getElementById("outputLeisure").innerHTML = leisure;
            document.getElementById("outputExtraNeed").innerHTML = extraNeed;
            
            // Fix for the classList error - check if element exists
            const outputElement = document.querySelector(".output-hidden");
            if (outputElement) {
                outputElement.classList.remove("output-hidden");
                outputElement.classList.add("output-visible");
            }
        }
    });
});