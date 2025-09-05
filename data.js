// Monthly Income

var revenue = 0;
document.getElementById("revSub").addEventListener("click", function(event){
    event.preventDefault(); // Prevents page reload
    if( document.getElementById("rev").value == "" ){
        alert("আপনার মাসিক আয় লিখুন");
        return;
    }
    else{
        revenue = document.getElementById("rev").value;
        var needsBudget = revenue*(50/100);
        var wantsBudget = (revenue*(30/100))/4;
        var savingsBudget = revenue*(20/100);

        document.getElementById("needsSpan").innerHTML = needsBudget;
        document.getElementById("wantsSpan").innerHTML = wantsBudget;
        document.getElementById("savingsSpan").innerHTML = savingsBudget;

        // Show the output div
        var outputDiv = document.querySelector("div.output-hidden, div.output-visible");
        if (outputDiv) {
            outputDiv.classList.remove("output-hidden");
            outputDiv.classList.add("output-visible");
        }
    }
}
);

