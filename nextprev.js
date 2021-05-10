var a = document.querySelectorAll("a");
var currentlocation = window.location.href;
var pages = currentlocation.split("/");
//if(pages.find("index")){
//    //a[5].setAttribute("href","page2.html");
//    console.log("index");
//}
//else if(pages.find("page2")){
//    //a[0].setAttribute("href","index.html");
//    //a[5].setAttribute("href","page3.html");
//    console.log("page2");
//}
console.log(pages);
var index = pages.find((ele)=>{
    return ele=="index.html";
})
var page2 = pages.find((ele)=>{
    return ele=="page2.html";
})
var page3 = pages.find((ele)=>{
    return ele=="page3.html";
})
var page4 = pages.find((ele)=>{
    return ele=="page4.html";
})
if(index=="index.html"){
    a[0].style="opacity:0.5;";
    a[5].setAttribute("href","page2.html");
}
if(page2=="page2.html"){
    a[0].setAttribute("href","index.html");
    a[5].setAttribute("href","page3.html");
}
if(page3=="page3.html"){
    a[0].setAttribute("href","page2.html");
    a[5].setAttribute("href","page4.html");
}
if(page4=="page4.html"){
    a[0].setAttribute("href","page3.html");
    a[5].style="opacity:0.5;";
}
