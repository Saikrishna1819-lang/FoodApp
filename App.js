import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *   -Logo
 *   -Nav Items
 * Body
 *   -Search
 *   -Restuarantcontainer
 *      -RestaurantCard
 *         -Img
 *         -Names of Res, Star Rating, cuisine delivery time ,
 * 
 * 
 * 
 */

const Header= () =>
{
    return (
        <div className="header">
            <div className="logo-container">
                <img  className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"></img>
            </div> 
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li> 
                    
                </ul> 
            </div>
        </div>
    )
}

const RestaurantCard=()=>
{
    return (
          <div className="res-card">
             
             <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/exjm2lo4caqq7tok5xmw"></img>
             <div className="card-content">
             <div className="card-title">
                Meghana Foods
             </div>
             <div className="info">
                <div className="price">₹249</div>
                <div className="rating">⭐ 4.5</div>

             </div>
             
                <div className="food-name">Biryani, Chinese</div>
                <div className="address">Guntur</div>
             

             </div>
          </div>
    )
}
const Body= ()=>
{
    return (
        <div className="body">
            <div className="search">
                  Search
            </div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>

    )
}
const AppLayout= ()=>
{
    return (
        <div className="app">
            
            <Header/> 
            <Body/>
            
        
            
        </div>
    )
}

  
const root=ReactDOM.createRoot(document.getElementById("sai"));

root.render(<AppLayout/>);