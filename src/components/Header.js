import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";



const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const online = useOnlineStatus();

  // subscribing the store using a Selector 
  const cartItems=useSelector((store)=> store.cart.items);
  console.log(cartItems);

  return (
    <header className="flex flex-wrap justify-between items-center mt-5 mx-6 md:mx-10 px-4 py-3 md:px-8 bg-white shadow-lg rounded-xl">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          className="w-16 sm:w-20 min-w-[64px] object-contain"
          src={LOGO_URL}
          alt="Logo"
        />
        <span className="text-sm text-gray-600">
          Status: <span className={online ? "text-green-600" : "text-red-500"}>{online ? "🟢" : "🔴"}</span>
        </span>
      </div>

      {/* Navigation + Button */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-base font-medium text-gray-800">
          <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 transition">About Us</Link></li>
          <li><Link to="/Contacts" className="hover:text-blue-600 transition">Contact Us</Link></li>
          <li><Link to="/Cart" className="hover:text-blue-600 transition">Cart -({cartItems.length} items)</Link></li>
        </ul>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          onClick={() => {
            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
          }}
        >
          {btnNameReact}
        </button>
      </div>
    </header>
  );
};

export default Header;
