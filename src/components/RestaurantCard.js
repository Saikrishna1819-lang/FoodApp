import { CDN_URL} from "../utils/constants";


const RestaurantCard=(props)=>
    {
        const { resData } = props;
        const {cloudinaryImageId,name,costForTwo,avgRating,cuisines,areaName}=resData?.info;
        return (
              <div className="res-card">
                 
                 <img className="res-logo" src={CDN_URL+
              cloudinaryImageId}/>
                 <div className="card-content">
                 <div className="card-title">
                    {name}
                 </div>
                 <div className="info">
                    <div className="price">{costForTwo}</div>
                    <div className="rating">{avgRating}</div>
    
                 </div>
                 
                    <div className="food-name">{cuisines}</div>
                    <div className="address">{areaName}</div>
                 
    
                 </div>
              </div>
        )
    }
export default RestaurantCard;