// Monthly Income
var revenue;
var userName;
var email;
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






document.getElementById("revSub").addEventListener("click", function(event){
    event.preventDefault(); // Prevents page reload
    userName = document.getElementById("userName").value;
    email = document.getElementById("userEmail").value;
    revenue = document.getElementById("rev").value;
    if( revenue == "" ){
        alert("আপনার মাসিক আয় লিখুন");
        return;
    }
    else if(userName == ""){
        alert("আপনার নাম লিখুন");
        return;
    }
    else{
        monthlyNeed = revenue*(50/100);
        monthlyWant = revenue*(30/100);
        monthlySaving = revenue*(20/100);
        revenueAfterSave = (monthlyNeed+monthlyWant)-monthlySaving;

        housing = monthlyNeed*(50/100);
        food = monthlyNeed*(20/100);
        transport = monthlyNeed*(15/100);
        education = monthlyNeed*(15/100);

        clothing = monthlyWant*(25/100);
        health = monthlyWant*(30/100);
        leisure = monthlyWant*(25/100);
        extraNeed = monthlyWant*(20/100);
        if(revenue < 30000){
            fstatus = "নিম্নবিত্ত";
            fcomment = "আপনার আয় বৃদ্ধি করতে হবে, আপনি যদি চাকরি করেন তাহলে অন্য ভালো চাকরি খুজার চেষ্টা করেন, অথবা নিজের ছোট ব্যাবসা শুরু করেন আপনার জমা করা অর্থ দিয়ে, তবে ব্যাবসা করার আগে কিছু ইউটুবে ভিডিও দেখে অথবা ব্যাবসা সম্পর্কে পড়াশুনা করে এমন কারোর সাথে পরামর্শ করে নিবেন";
        }
        else if(revenue < 50000){
            fstatus = "নিম্নমধ্যবিত্ত";
            fcomment = "আপনার আয় ঠিক আছে তবে সুযোগ বুঝে বৃদ্ধি করতে হবে, আপনি যদি চাকরি করেন তাহলে অন্য ভালো চাকরি খুজার চেষ্টা করেন, অথবা নিজের ছোট ব্যাবসা শুরু করেন আপনার জমা করা অর্থ দিয়ে, তবে ব্যাবসা করার আগে কিছু ইউটুবে ভিডিও দেখে অথবা ব্যাবসা সম্পর্কে পড়াশুনা করে এমন কারোর সাথে পরামর্শ করে নিবেন";
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
    }
}
);






















// // const revenue = 3000;
// // const name = "Md. Niaz Al Motin";

// // const monthlyNeed = revenue*(50/100);
// // const monthlyWant = revenue*(30/100);
// // const monthlySaving = revenue*(20/100);
// // const revenueAfterSave = (monthlyNeed+monthlyWant)-monthlySaving;

// // var housing = monthlyNeed*(50/100);
// // var food = monthlyNeed*(20/100);
// // var transport = monthlyNeed*(15/100);
// // var education = monthlyNeed*(15/100);

// // var clothing = monthlyNeed*(25/100);
// // var health = monthlyNeed*(50/100);
// // var leisure = monthlyNeed*(25/100);

// // console.log(name," your monthly earning is = ",revenue);
// // console.log("Your savings monthly is = ",monthlySaving);
// // console.log("Housing: ",housing);
// // console.log("Food: ",food);
// // console.log("Transport: ",transport);
// // console.log("Education: ",education);
// // console.log("Total Monthly Need is ",monthlyNeed);
// // console.log("Clothing: ",clothing);
// // console.log("Health: ",health);
// // console.log("Leisure: ",leisure);
// // console.log("Total Monthly Want is ",monthlyWant);

