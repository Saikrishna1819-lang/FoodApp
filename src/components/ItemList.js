import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList=({items})=>{

   const dispatch=useDispatch();
   const handleAddItem=(item)=>{
      //Dispatch an action
      dispatch(addItem(item));

   }


    
    return (
       <div>
         {items.map((item)=>
            {
               const {name,price,description,imageId,id}=item?.card?.info
               return (
                   <div className="mt-5 border-b border-gray-300 pb-5" key={id} >
                       
                   <div className="flex justify-between gap-4">
               <div className="flex-1">
                   <div className="font-bold text-xl text-gray-700">{name}</div>
                   <div className="text-md font-medium">₹{price/100}</div>
                   <div className="text-gray-600 font-medium">{description}</div>
                   

               </div>
               <div className="relative w-32 h-28 ">
                   
                       {
                          imageId&&(
                           <img className="w-full h-full object-cover rounded-lg" src={CDN_URL+imageId} alt="menu item"></img>
                          )
                       
                       }
               
              
               <button  onClick={()=>handleAddItem(item)} className="absolute bottom-1/2 left-1/2 transform translate-x-[-50%] translate-y-[100%]    bg-white rounded-md  px-6 py-2 text-green-500 drop-shadow-xl font-bold"
               >ADD</button>
               
               </div>
            </div>
            </div>
            

                       

               )

            })}
       </div>
            
    )
}
export default ItemList