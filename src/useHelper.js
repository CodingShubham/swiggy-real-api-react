
import { useState } from "react";
export default function useHelper(){
    
    const[val,setval]=useState("ON");


    let change=()=>{


  
        if(val==="ON"){

            setval("OFF");



        }
        else{
            setval("ON");
        }
   
    }

    return(

        <div>

            <h3 style={{cursor:"pointer"}} onClick={change} >{val}</h3>


        </div>
    );



}