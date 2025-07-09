
import Apparea from "./Apparea";
import {LOGO_URL} from "./utils/constant";
import { Link } from "react-router-dom";
import useHelper from "./useHelper";

const Header=()=>{


    return(

        <div className="heading flex bg-orange-400 space-x-10 justify-between items-center  " >

            <div className="logo-cont ml-5">
                <img className="logo w-23 rounded-full" src={LOGO_URL}/>
                
            </div>

           {useHelper()}

            <div className="navbar">

        <ul className="flex space-x-10 text-bold-300 mr-10">

            <li><Link className="navigate" to="/">Home</Link></li>
             <li><Link className="navigate" to="/contact">Contact</Link></li>
              <li> <Link className="navigate" to="/about">About Us</Link></li>
               <li> <Link className="navigate" to="/cart">Cart</Link></li>
               <li> <Link className="navigate" to="/offers">Offers</Link></li>

        </ul>

            </div>


        </div>
    );



}


export default Header