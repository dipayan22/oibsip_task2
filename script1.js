var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tablink.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab")
}