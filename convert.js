var factories = document.getElementsByClassName("factory-card");
var results = {};
var thtext = null;
for(let k = 0; k < factories.length; k++){
    var fd = factories[k].getElementsByClassName("card-info ")[0];

        var li = fd.getElementsByTagName("li");

        for(let i = 0;  i < li.length; i++){
            var label = li[i].getElementsByClassName("label")[0].innerText;  
            var value = li[i].getElementsByClassName("value")[0].innerText;
            if(!results.hasOwnProperty(label)){
            results[label] = [];
          }
          results[label].push(value);
        }

        var pd = factories[k].getElementsByClassName("card-info ")[1];
        var trs = pd.getElementsByTagName("tr");
        
        var prodtext = "";
        for(let i = 0; i < trs.length; i++){
            if(i == 0){
                if(thtext == null){
                    var th = trs[i].getElementsByTagName("th");
                    thtext = th[0].innerText+"-"+th[1].innerText+"-"+th[2].innerText;
                    results[thtext] = [];
                }
                
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
}