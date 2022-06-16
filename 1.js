let records = [];
let flag = false;
let i = 1;
setInterval(function(){
    var loader = document.getElementById("ctl00_ctl49_g_aedefaed_50d8_4074_ab03_a7dd34779c74_ctl00_upProgressdirectory").getAttribute("style");
    if(loader == "display:none;" && flag == false){
        console.log("Scrapping Page "+ i);
        var list = document.getElementsByClassName("card-companies");
        for(let i = 0 ; i < list.length; i++){
            records.push(list[i].getElementsByTagName("a")[0].href);
        }
        console.log("Recorded: "+records.length);
        var currentPage = document.getElementsByClassName("default-pager-current")[0];
        var nextPage = currentPage.nextElementSibling;
        var nextPageText = nextPage.innerText;
        nextPage.click();
        flag = true;
        i++;
    }
    if(loader == "display: block;"){
        flag = false;
    }
}, 2000);