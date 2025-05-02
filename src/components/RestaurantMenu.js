
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom"; 
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";
const RestaurantMenu=()=>
{
    const[showIndex,setShowIndex]=useState(null)

    
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    if(resInfo===null) 
    {
        return <Shimmer/> ;
    }
        
    
     const menuList = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
     const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>
    {
        return item?.card?.card?.["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'

    })
    console.log(categories);   
     
     const {name,avgRating,areaName,city,costForTwoMessage,cuisines,
        totalRatingsString,
        
     }=resInfo?.cards[2]?.card?.card?.info;


    return  (
   
        <div className="flex justify-center border ">  
            <div className=" w-8/12 mt-10 mb-10">
                <div className="font-bold text-3xl font-mono mb-5"> 
                    {name}
                </div>
                <div className=" mb-10   bg-white shadow-xl/30 rounded-2xl">
                    <div className="mx-10 py-2">
                        <div className=" flex gap-8 font-bold text-lg my-5">
                            <div>
                            {avgRating}⭐
                            </div>
                            <div>
                                {costForTwoMessage}

                            </div>
                        </div>
                        <div className=" mb-5 text-orange-600 font-bold underline">
                            {cuisines.join(', ')}
                        </div>
                        <div className=" mb-5 text-gray-700 font-bold">
                           Outlet: {areaName}
                        </div>
                    </div>
                </div>
                <div className="">
                   {
                     categories.map((category,index)=>(
                        <RestaurantCategory 
                        key={category?.card?.card.title} 
                        data={category?.card?.card } 
                        showItems={index===showIndex?true:false} 
                        setShowIndex={()=>{
                            setShowIndex(index===showIndex?null:index)
                            
                            
                        }
                        }/>
                     ))
                   }
                </div>
            </div>
        </div>
    )
}
export default RestaurantMenu;