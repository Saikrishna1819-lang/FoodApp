import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";

import { useState, useEffect } from "react";


const Body = () => {

    const [ListOfRes, setListOfRes] = useState([]);
    const[serachText,setSearchText]=useState("");
    const[filteredRes,setFilteredRes]=useState([]);
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7373988&lng=83.2364142&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"

        )
        const json = await data.json();
        const restaurantCards = json?.data?.cards?.filter(
            (card) =>
                card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )
        const restaurantInfos = restaurantCards.map(
            (card) => card.card.card.info
        )
        setListOfRes(restaurantInfos);
        setFilteredRes(restaurantInfos);
    }


    return ListOfRes.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter-container">
            <div className="search">
                <input type="text"  value={serachText} 
                onChange={(e)=>
                    {
                        setSearchText(e.target.value);
                        
    
                    }
                    }
                ></input>
                <button onClick={()=>
                    {
                        // fiter the restaurant cards and update
                        const filteredList=ListOfRes.filter((res)=>res.name.toUpperCase().includes(serachText.toUpperCase())
                        
                        )
                        setFilteredRes(filteredList)
                        
                    }
                }
                >Search</button>
                </div>
                <div className="filter">
                    <button className="filter-btn" onClick={
                        () => {
                            const filteredList = ListOfRes.filter(
                                (res) => res.avgRating > 4.2

                            )
                            setListOfRes(filteredList);
                        }
                    }>Top Rated Restaurant</button>

                </div>
               
                
            </div>
            <div className="res-container">
                {filteredRes.map((restaurant, index) =>
                (
                    <RestaurantCard key={index} resData={restaurant} />

                ))}
            </div>
        </div>

    )
}
export default Body;