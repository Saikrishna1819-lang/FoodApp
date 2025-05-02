import { CDN_URL} from "../utils/constants";


const RestaurantCard=(props)=>
    {
        const { resData } = props;
        const {cloudinaryImageId,name,costForTwo,avgRating,cuisines,areaName}=resData;
      
        return (
              <div className="bg-white shadow-lg rounded-lg flex flex-col w-[220]">
                 
                 <img className="h-[150px] rounded-t-lg" src={CDN_URL+
              cloudinaryImageId}/>
                 <div className="card-content">
                 <div className="card-title">
                    {name}
                 </div>
                 <div className="info">
                    <div className="price">{costForTwo}</div>
                    <div className="rating">{avgRating}</div>
    
                 </div>
                 
                    <div className="food-name">{cuisines.join(', ')}</div>
                    <div className="address">{areaName}</div>
                 
    
                 </div>
              </div>
        )
    }

export const withPromotedLabel=(RestaurantCard)=>
{
   return (props)=>
   {
      return(
         <div>
            <label className="absolute bg-black text-white px-2 py-1 rounded-lg">Promoted</label>
            <RestaurantCard {...props}/>

         </div>
      
      )

   }
}
export default RestaurantCard;  
