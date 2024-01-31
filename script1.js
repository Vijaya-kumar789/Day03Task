var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res);
//2.Question
    for (var i=0;i<res.length;i++){
        console.log(res[i].flags.png)
        }
 //3.Question
         for (var i=0;i<res.length;i++){
        console.log("name:"+res[i].name.common+","+"region:"+res[i].region+","+"subregion:"+res[i].subregion+","+"population:"+res[i].population)
         }
 }