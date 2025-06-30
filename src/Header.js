
import Apparea from "./Apparea";
import {LOGO_URL} from "./utils/constant";
import { Link } from "react-router-dom";


const Header=()=>{


    return(

        <div className="heading">

            <div className="logo-cont">
                <img className="logo" src={LOGO_URL}/>
                
            </div>

            <div className="navbar">

        <ul>

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