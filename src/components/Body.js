import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body= ()=>
    {
        
        const [ListOfRes,setListOfRes]=useState(resList)

        return (
            <div className="body">
                <div className="filter">
                      <button className="filter-btn" onClick={
                        ()=>
                        {
                            const filteredList=ListOfRes.filter(
                                (res)=> res.info.avgRating>4.2
                                
                            )
                            setListOfRes(filteredList);
                        }
                      }>Top Rated Restaurant</button>
                </div>
                <div className="res-container">
                    {ListOfRes.map((restaurant,index)=>
                    (
                        <RestaurantCard  key={index} resData={restaurant} />
    
                    ))}
                </div>
            </div>
    
        )
    }
export default Body;