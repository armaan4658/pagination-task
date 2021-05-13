  //creating xml request
  var req = new XMLHttpRequest();
  //initiate a connection
  req.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true);
  //sending the request
  req.send();
  //loading the function
  var navBar = (container)=>{
    var row = document.createElement("div");
    row.setAttribute("class","row");
    var col2 = document.createElement("div");
    col2.setAttribute("class","col-sm-12 col-md-12 col-lg-12 col-xl-12")
    var nav = document.createElement("nav");
    nav.setAttribute("aria-label","Page navigation example");
    var ul = document.createElement("ul");
    ul.setAttribute("class","pagination justify-content-center");
    var lists = [];
    for(let i = 0; i < 12 ; i++){
        var li = document.createElement("li");
        li.setAttribute("class","page-item")
        var btn = document.createElement("button");
        btn.setAttribute("class","page-link");
        li.append(btn);
        ul.append(li);
        nav.append(ul);
        col2.append(nav);
    }
    row.append(col2);
    container.append(row);
  }
  var navContent = ()=>{
    var btn = document.querySelectorAll("button");
    btn[0].innerHTML = "<h4>Prev</h4>"
    btn[11].innerHTML = "<h4>Next</h4>"
    for(let i = 1; i < 11; i++){
        btn[i].innerHTML = `<h4>${i}</h4>`;
    }
  }

  
  var tableHead = (table,col2)=>{
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    th1.setAttribute("scope","col");
    th2.setAttribute("scope","col");
    th3.setAttribute("scope","col");
    th1.innerHTML =  `<h2>ID</h2>`;
    th2.innerHTML = `<h2>Name</h2>`;
    th3.innerHTML = `<h2>E-Mail</h2>`;
    tr.append(th1,th2,th3);
    thead.append(tr);
    table.append(thead);
    col2.append(table);
  }
  var tableContent = (table,start,end,data)=>{
    var tbody = document.createElement("tbody");
    for(let i = start; i < end; i++){
      var tr = document.createElement("tr");
      var th1 = document.createElement("th");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      th1.setAttribute("scope","row");
      th1.innerHTML = `<h6>${data[i].id}</h6>`;
      td2.innerHTML = `<h6>${data[i].name}</h6>`;
      td3.innerHTML = `<h6>${data[i].email}</h6>`;
      tr.append(th1,td2,td3);
      tbody.append(tr);
    }
    table.append(tbody);
  }


  req.onload=function(){
      //converting the data to JSON
      var data = JSON.parse(this.response);
      var container = document.createElement("div");
      container.setAttribute("class","container");
      var row = document.createElement("div");
      row.setAttribute("class","row");
      var col1 = document.createElement("div");
      col1.setAttribute("class","col-sm-1 col-md-1 col-lg-1 col-xl-1")
      var col2 = document.createElement("div");
      col2.setAttribute("class","col-sm-10 col-md-10 col-lg-10 col-xl-10")
      var col3 = document.createElement("div");
      col3.setAttribute("class","col-sm-1 col-md-1 col-lg-1 col-xl-1")
      row.append(col1,col2,col3);
      container.append(row);
      document.body.append(container);
      var table = document.createElement("table");
      table.setAttribute("class","table table-striped");
      tableHead(table,col2);
      tableContent(table,0,10,data);
      var div = document.createElement("div");
      div.setAttribute("id","indicator");
      div.innerHTML = `<h4>Page <span></span> of 10<h4>`;
      div.style="text-align:center;"
      document.body.append(div);
      navBar(container);
      navContent();
      //Getting data form api
      var page1 = getData(data,0,10);
      var page2 = getData(data,10,20)
      var page3 = getData(data,20,30)
      var page4 = getData(data,30,40)
      var page5 = getData(data,40,50)
      var page6 = getData(data,50,60)
      var page7 = getData(data,60,70)
      var page8 = getData(data,70,80)
      var page9 = getData(data,80,90)
      var page10 = getData(data,90,100)
      var pages = new Array(page1,page2,page3,page4,page5,page6,page7,page8,page9,page10);
      var btn = document.querySelectorAll("button");
      
      
      localStorage.setItem("click", "1");
      checkprev(btn);
      checknext(btn);
      var span = document.querySelector("span");
      span.innerText = 1;
      //when previous button is clicked
      btn[0].addEventListener("click",()=>{
        var th = getTh();
        var td = getTd();
        var currentPage = parseInt(localStorage.getItem("click"));
        if(currentPage == 1){
          checkprev(btn);
        }else{
          tableUpdate(pages[currentPage-2],th,td);
          currentPage--;
          localStorage.setItem("click",currentPage);
          checkprev(btn);
          checknext(btn);
          var span = document.querySelector("span");
          span.innerText = currentPage;
        }
        
      })
      //when next button is clicked
      btn[11].addEventListener("click",()=>{
        var th = getTh();
        var td = getTd();
        var currentPage = parseInt(localStorage.getItem("click"));
        if(currentPage == 10){
          checknext(btn);
        }else{
          tableUpdate(pages[currentPage],th,td);
          
          currentPage++;
          localStorage.setItem("click",currentPage);
          checknext(btn);
          checkprev(btn);
          var span = document.querySelector("span");
          span.innerText = currentPage;
        }
      })
      //when button is clicked respective page will be loaded
      btn[1].addEventListener("click",()=>{
        loadPage(pages[0],1,btn);
      })
      btn[2].addEventListener("click",()=>{
        loadPage(pages[1],2,btn);
      })
      btn[3].addEventListener("click",()=>{
        loadPage(pages[2],3,btn);
      })     
      btn[4].addEventListener("click",()=>{
        loadPage(pages[3],4,btn);
      })     
      btn[5].addEventListener("click",()=>{
        loadPage(pages[4],5,btn);
      })
      btn[6].addEventListener("click",()=>{
        loadPage(pages[5],6,btn);
      })      
      btn[7].addEventListener("click",()=>{
        loadPage(pages[6],7,btn);
      })
      btn[8].addEventListener("click",()=>{
        loadPage(pages[7],8,btn);
      })
      btn[9].addEventListener("click",()=>{
        loadPage(pages[8],9,btn);
      })
      btn[10].addEventListener("click",()=>{
        loadPage(pages[9],10,btn);
      })
      
      
  }

function loadPage(pages,pageNo,btn){
        var th = getTh();
        var td = getTd();
        tableUpdate(pages,th,td);
        localStorage.setItem("click",pageNo);
        checknext(btn);
        checkprev(btn);
        var span = document.querySelector("span");
        span.innerText = pageNo;

}

function tableUpdate(data,th,td){
        
        var k=0;
        var j=0;
        
        for(let i in data){
        
        th[k].innerText = `${data[i].id}`;
        k++;
        td[j].innerText = `${data[i].name}`;
        j++;
        td[j].innerText = `${data[i].email}`;
        j++;
        
    }

}

function getData(data,start,end){
    var data2 = [];
    for(let i = start; i < end; i++){
        data2.push(data[i]);
    }
    return data2;
}

function checkprev(btn){
    if(localStorage.getItem("click")==1){
        btn[0].style="opacity:0.5;"
    }else{
      btn[0].style="opacity:1;"
    }
}
function checknext(btn){
    if(localStorage.getItem("click")==10){
        btn[11].style="opacity:0.5;"
    }else{
      btn[11].style="opacity:1;"
    }
}

function getTh(){
    var th = document.querySelectorAll("tbody > tr > th >h6");
    return th;
}
function getTd(){
    var td = document.querySelectorAll("tbody > tr > td >h6");
    return td;
}
