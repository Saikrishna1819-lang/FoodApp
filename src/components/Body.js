import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {

    const [ListOfRes, setListOfRes] = useState([]);
    const[serachText,setSearchText]=useState("");
    const[filteredRes,setFilteredRes]=useState([]);
    const onlineStatus=useOnlineStatus();
    const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);



    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.303022&lng=80.4340326&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
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
    if(onlineStatus===false)
    {
        return(
            <h1>you are offline</h1>
        )
    }

    return ListOfRes.length === 0 ? (<Shimmer />) : (
        <div className="bg-gray-50 mt-10 px-8 ">
            <div className="flex flex-col md:flex-row justify-between gap-8 mb-5 items-center px-4">
            <div className="flex flex-wrap  justify-start gap-4 w-full  md:w-auto">
            
                <input className="px-4 py-2 w-full  md:w-72 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 " placeholder="search" type="text"  value={serachText} 
                onChange={(e)=>
                    {
                        setSearchText(e.target.value);
                        const filteredList1=ListOfRes.filter((res)=>
                        {
                            return res.name.toUpperCase().includes(e.target.value.toUpperCase())

                        })
                    
                        setFilteredRes(filteredList1);
    
                    }
                    }
                ></input>
                

                <button  className="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-white font-bold
                 rounded-lg" onClick={()=>
                    {
                        // fiter the restaurant cards and update
                        const filteredList=ListOfRes.filter((res)=>res.name.toUpperCase().includes(serachText.toUpperCase())
                        
                        )
                        setFilteredRes(filteredList)
                        
                    }
                }
                >Search</button>
                </div>
                
                    <button className="bg-orange-500 hover:bg-orange-600 font-bold text-white px-4 py-2 rounded-xl" onClick={
                        () => {
                            const filteredList = ListOfRes.filter(
                                (res) => res.avgRating > 4.2

                            )
                            setListOfRes(filteredList);
                        }
                    }>Top Rated Restaurant</button>

                
               
                
            </div>
            <div className="flex flex-wrap gap-5 mt-8">
                {filteredRes.map((restaurant, index) =>
                (
                    <Link className="reslink" key={restaurant.id} to={"/restaurants/"+restaurant.id}>{restaurant.promoted? (
                    <RestaurantCardPromoted resData={restaurant}/>
                    ): <RestaurantCard  resData={restaurant} />}</Link>

                ))}
            </div>
        </div>

    )
}
export default Body;