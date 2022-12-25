$(document).ready(function() {

    $("#preloder .loadingio-spinner-rolling-oz6g8jd2c8").fadeOut(4000 , ()=> {
       
            $("#preloder").slideUp(1000)  
      
    });
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      autoWidth:true, 
      autoplay:true,
      utoplayTimeout:1000,
    autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  })
  
$(window).scroll(function(){
  let scrollT = document.getElementsByClassName("main-menu") ;
  let wScroll =  $(window).scrollTop() ;
  console.log(wScroll) ;
  if(wScroll > 500) {
    $(".main-box").css({
            backgroundColor : "rgba(0,0,0,0.7)" ,
             position : "fixed" ,
             left : "0" ,
             top : "0",
              width:"100%" , 
              padding : "19px"
      })
  } else {
    $(".main-box").css({
      backgroundColor : "transparent" ,
      position : "relative" ,
      left : "0" ,
      top : "0",
       width:"100%" , 
       padding : "0"
})
  }

})
}) ;

let containerResepe = [] ;
async function getMenuRecipes() {
  
    let menu = await fetch(`https://forkify-api.herokuapp.com/api/search?q=chicken`) ;
    let resultMenu = await menu.json()    ;
    containerResepe = resultMenu.recipes
   // console.log(containerResepe) ;
    displayMenu()
}  
getMenuRecipes();
function displayMenu() {
    var data = ``;
  for(var  i = 0 ; i < 4 ; i++) {

   data+=` <div class="col-md-3">
   <img class="w-100 "  src="${containerResepe[i].image_url}" style="height:250px" />
   <a class=" my-3">${containerResepe[i].title}</a>
   </div>`;
  }
  document.getElementById("myResp").innerHTML = data ;
}
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click" , function() {
  $(".info-bar").css({right : '0px' , opacity : '1' , visibility : 'visible'})
})
let closeBtn = document.querySelector(".cross-icon span") ;
closeBtn.addEventListener("click" , function() {
  $(".info-bar").css({right : '-440px' , opacity : '0' , visibility : 'hidden'})
})
hamburger.addEventListener("click" , function() {
  $(".hidden-bar").css({left : '0px' , opacity : '1' , visibility : 'visible'})
});
function clicked() {
  $(".hidden-bar").css({left : '-440px' , opacity : '0' , visibility : 'hidden'})
}

let ResepePizzaData = [] ;
// Get Resepe Pizza 
async function getPizza() {
  
  let menu = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`) ;
  let resultMenu = await menu.json()    ;
  ResepePizzaData = resultMenu.recipes
  console.log(ResepePizzaData) ;
  displayResepiPizza();
}  
getPizza();
function displayResepiPizza() {
  var pizza = ``;
  for(let i = 0 ; i < 6;i++){
   
    pizza+=` <div class="col-md-4 image shadow-lg my-4 text-center">
    <img class="w-100 img-e" style="height:250px" src="${ResepePizzaData[i].image_url}"/>
    <h4 class="text-center py-3">${ResepePizzaData[i].title}</h4>
    <a class="text-white" href="${ResepePizzaData[i].source_url}">VIEW </a>
    </div>`;
  }
     document.getElementById("DataRes").innerHTML = pizza ;
}

var links = document.querySelectorAll(".oLinks a");
for(var i=0;i<links.length;i++) {
  links[i].addEventListener("click" , function(e) {
   
    chocolate(e.target.innerHTML);
})
}
let ResepechocolateData = [] ;


async function chocolate(klma) {
  
  let menu = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${klma}`) ;
  let resultMenu = await menu.json()    ;
      ResepechocolateData = resultMenu.recipes
  console.log(ResepechocolateData) ;
  displayResepiChoco();
}  
// Get Resepe chocolate 
var myResepe = new XMLHttpRequest() ;
myResepe.open("GET", `https://forkify-api.herokuapp.com/api/search?q=chocolate`) ;
myResepe.send() ;

myResepe.addEventListener("readystatechange" ,function() {

  if(this.readyState == 4 && this.status == 200) {

    ResepechocolateData = JSON.parse(myResepe.response).recipes
    //console.log(ResepechocolateData);
   displayResepiChoco();
  }
} )
function displayResepiChoco() {
  var chocolate = ``;
  for(let i = 0 ; i <ResepechocolateData.length ;i++){
   
    chocolate+=` <div class="col-md-4 image shadow-lg my-4 text-center">
    <img class="w-100 img-e" style="height:250px" src="${ResepechocolateData[i].image_url}"/>
    <h4 class="text-center py-3">${ResepechocolateData[i].title}</h4>
    <a class="text-white" href="${ResepechocolateData[i].source_url}">VIEW </a>
    </div>`;
  }
     document.getElementById("resepieCh").innerHTML = chocolate ;
}

 // Get All Data With Input

let inputSearch = document.querySelector("#searchInput");
let bbtn = document.getElementById("GetResepice") ;
console.log(inputSearch)
bbtn.addEventListener("click" , function() {
   let  vlSer =   inputSearch.value ;
   console.log(vlSer) ;
   getresep(vlSer)
   displayAllRespe(vlSer);
});
let resultData = [] ;
async function getresep(klma) {

  let respedata = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${klma}`);
  let respContainer = await respedata.json() ;
      resultData = respContainer.recipes ;
      console.log(resultData);
      displayAllRespe();
}
getresep("pasta");

function displayAllRespe() {
 
  let data = `` ;
  for(let i = 0 ; i < resultData.length ; i++) {
    data+=`  <div class="col-md-4 image">
      <img class="w-100" src="${resultData[i].image_url}" style="height:234px" />
      <h4 class=" text-center py-4">${resultData[i].title}</h4>
    </div>` ;
  }
  document.getElementById("allData").innerHTML = data ;

}

