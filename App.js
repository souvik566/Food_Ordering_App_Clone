import React from "react";
import ReactDOM from "react-dom/client";
console.log(ReactDOM);
const Header=()=>{
  return (
    <div id="header">
      <div id="logo">
        <img  id="img" src="https://www.pngkey.com/png/full/382-3827394_order-online-logo-ideas-online-food-ordering.png"/>
      </div>
      <div id="searchbar">
        <input  id="inputbox" type="text" placeholder="Search Resturents"/>
        <button id="search">Search</button>
      </div>
      <div id="links">
        <a href="#" id="home">Home</a>
        <a href="#" id="about">About</a>
        <a href="#">
          <img id="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNphLvPzUU-hNqLT-TGqlDiW13F6_NQ52JxLGRquJTA&s"/>
        </a>
        <a href="">
          <img id="cart" src="https://www.shutterstock.com/image-vector/shopping-cart-vector-icon-flat-600nw-1690453492.jpg"/>
        </a>
      </div>
    </div>
  )
}

const Main=()=>{
  return (
    <div id="main">
      <h1 id="mainheading">Restaurants with online food delivery in Bardhaman</h1>
      <div id="container">
        <div className="cards">
          <div className="card">
          <img src="https://www.vikhrolicucina.com/uploads/stories/1674223639_samosasingaraindianfriedbakedpastrywithsavoryfillingspicedpotatoesonionpeas.jpg" className="foodimg"/>
          <p className="para">
         <b>
         Foot Path
⭐4.3 • 20-25 mins
         </b><br/>
         <span className="para_2">Fast Food, Chinese
Bardhaman Locality</span>
          </p>
          </div>
          <div className="card">
          <img src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg" className="foodimg"/>
          <p className="para">
         <b>
         Wow! Momo
          ⭐4.4 • 25-30 mins
         </b><br/>
         <span className="para_2">Tibetan, Healthy Food, Asian, Chinese,Parbirhata</span>
          </p>
          </div>
          <div className="card">
          <img src="https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900" className="foodimg"/>
          <p className="para">
         <b>
         Griddle's - Burgers,Rolls & Bowls
⭐4.4 • 45-50 mins
         </b><br/>
         <span className="para_2">Burgers, Rolls & Wraps, Continental</span>
          </p>
          </div>
          <div className="card">
          <img src="https://assets-global.website-files.com/646b2bc1dd4dd3aa34f128a6/6478a1753b3b810ee943c6a0_s6ww-hero.webp" className="foodimg"/>
          <p className="para">
         <b>
         Pastas By Pizza Hut
⭐3.8 • 40-45 mins
         </b><br/>
         <span className="para_2">Pastas
Esplanade Kolkata</span>
          </p>
          </div>
        </div>
      </div>
      <div className="cards" id="cards_2">
          <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYSTE-EWqRrkcv75kBNmI6BBQ3aCsR9KvJLV4gVG8zWBoXMe9Co6626FQExw&s" className="foodimg"/>
          <p className="para">
         <b>
         Tasty Treat
⭐4.2 • 50-55 mins
Chinese, North Indian, Beverages
Central Kolkata
         </b><br/>
         <span className="para_2">Chinese, North Indian, Beverages
</span>
          </p>
          </div>
          <div className="card">
          <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" className="foodimg"/>
          <p className="para">
         <b>
         Wow! Momo
          ⭐4.4 • 25-30 mins
         </b><br/>
         <span className="para_2">Tibetan, Healthy Food, Asian, Chinese,Parbirhata</span>
          </p>
          </div>
          <div className="card" id="border">
          <img src="https://i.ytimg.com/vi/QnCgJSWttnQ/maxresdefault.jpg" className="foodimg"/>
          <p className="para">
         <b>
         Wow! Momo
          ⭐4.4 • 25-30 mins
         </b><br/>
         <span className="para_2">Tibetan, Healthy Food, Asian, Chinese,Parbirhata</span>
          </p>
          </div>
          <div className="card">
          <img src="https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x500.jpg" className="foodimg"/>
          <p className="para">
         <b>
         Wow! Momo
          ⭐4.4 • 25-30 mins
         </b><br/>
         <span className="para_2">Tibetan, Healthy Food, Asian, Chinese,Parbirhata</span>
          </p>
          </div>
        </div>
        <div className="card" id="cards_3">
          <img src="https://static.toiimg.com/thumb/53251884.cms?imgsize=530171&width=800&height=800" className="foodimg"/>
          <p className="para">
         <b>
         Wow! Momo
          ⭐4.4 • 25-30 mins
         </b><br/>
         <span className="para_2">Tibetan, Healthy Food, Asian, Chinese,Parbirhata</span>
          </p>
          </div>
    </div>
  )
}
const Footer=()=>{
return (
  <div id="footer">
    <div className="ftimg">
          <img src="https://www.pngkey.com/png/full/382-3827394_order-online-logo-ideas-online-food-ordering.png" id="footimg"/>
    </div>
    <p id="company">Company</p>
    <p id="company">Contact Us</p>
    <p id="deliver">We Deliver to</p>
  </div>
)
}

const App=()=>{
  return (
   <>
    <Header/>
    <Main/>
    <Footer></Footer>
   </>
  )
}
ReactDOM.createRoot(document.getElementById("bdy")).render(
  <App/>
  

)
