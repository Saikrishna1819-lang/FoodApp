import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>
{
    
    const cartItems=useSelector((store)=> store.cart.items)
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart() )
    }
    return(
        <div className="w-6/12 flex flex-col items-center  mt-5  m-auto">
            <div  className="font-bold text-2xl mb-5">Cart</div>
            <button onClick={handleClearCart} className="bg-black text-white shadow-lg rounded-xl mb-5 px-4 py-2 font-medium text-lg">Clear</button>
            <ItemList items={cartItems} />
        </div>
    )

    
}
export default Cart;