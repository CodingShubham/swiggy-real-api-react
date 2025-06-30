
import Header from "./Header"
import BodyContent from "./BodyContent"
import About from "../About"
import { Outlet } from "react-router-dom"

const Apparea=()=>{

    return(
        <div>
  
            <Header/>
           <Outlet/>
          


        </div>


    )


}

export default Apparea