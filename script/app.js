var sunglasses = [
{
    img: "Black retro",
    sunglass_name: "Black-retro ",
    price:  3500
},
{
    img:"Diamond Shaped",
    sunglass_name:"Diamond Shaped",
    price: 2500
    
},
{
    img:"Blue Reflectors",
    sunglass_name:"Blue Reflectors",
    price:2500
},
{
    img:"Blue Round Frames",
    sunglass_name:"Blue Round Frames",
    price: 3000
},
{
    img:"Brown punk",
    sunglass_name:"Brown punk",
    price: 5000
},
{
    img:"Brown Tiger",
    sunglass_name:"Brown Tiger",
    price:4500
},
{
    img:"butterfly velvet",
    sunglass_name:"butterfly velvet",
    price: 3500
},
{
    img:"cat eye",
    sunglass_name:"cat eye",
    price: 1500
},
{
    img:"cold black",
    sunglass_name:"cold black",
    price: 2000
},
{
    img:"Crystal Clear",
    sunglass_name:"Crystal Clear",
    price: 5500
},
{
    img:"Crystal",
    sunglass_name:"Crystal",
    price: 3500
},
{
    img: "Blue Reflectors Twist",
    sunglass_name:"Blue Reflectors Twist",
    price: 4000  
}
]

let galleries = document.getElementById("gallery");
 var html ="";
 sunglasses.forEach(e => {
     html += `
            <div class="col">
            <div class="card" style="width: 18rem;">
     <img src="./img/${e.img}.jpg" class="card-img-top img-fluid" alt="...">
     <div class="card-body text-center">
       <h5 class="card-title">${e.sunglass_name}</h5>
       <p class="card-text"># ${e.price}</p>
       <a href="#" class="btn btn-primary">Buy</a>
     </div>
   </div>
   </div>
   
   
   `
   console.log(e);
   galleries.innerHTML = html;
 })
 
