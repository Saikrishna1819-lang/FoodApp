import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory=({data,showItems,setShowIndex})=>
{
    const handleClick=()=>
    {
        
        setShowIndex()
        
    }
   
    return (
        <div className="bg-white shadow-lg rounded-2xl mt-10  px-10 py-5">
            <div>
                <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
            <div className="font-bold text-lg">{data.title}  ({data.itemCards.length})</div>
            <button>🔽</button>

             </div>
          
             

            </div>
            { showItems&&<ItemList items={data.itemCards} />}
        </div>
    )
       
    

        
    
    
}
export default RestaurantCategory;