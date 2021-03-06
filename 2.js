var load = document.getElementById("loadMorePlants");

let x = setInterval(function(){
    load.click();
}, 2000);

var fd = document.getElementsByClassName("card-info ")[0];

var li = fd.getElementsByTagName("li");

let results = {};

for(let i = 0;  i < li.length; i++){
    var label = li[i].getElementsByClassName("label")[0].innerText;  
    var value = li[i].getElementsByClassName("value")[0].innerText;
    if(!results.hasOwnProperty(label)){
		results[label] = [];
	}
	results[label].push(value);
}

var pd = document.getElementsByClassName("card-info ")[1];
var trs = pd.getElementsByTagName("tr");
var thtext = null;
var prodtext = "";
for(let i = 0; i < trs.length; i++){
    if(i == 0){
        var th = trs[i].getElementsByTagName("th");
		thtext = th[0].innerText+"-"+th[1].innerText+"-"+th[2].innerText;
		results[thtext] = [];
    }else{
		var td = trs[i].getElementsByTagName("td");  
		var tdtext = td[0].innerText+"-"+td[1].innerText+"-"+td[2].innerText;
		
		if(i == 1){
			prodtext += tdtext;
		}else{
			prodtext += ", "+tdtext;
		}

	}
}

results[thtext].push(prodtext);