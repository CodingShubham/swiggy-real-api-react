import { useState } from "react";
import ElementsCategory from "./ElementsCaterogy";

export default function RestroCategory({ data }) {

  const[showItems, setshowItems]=useState(false);

  const handlebtn=()=>{

    setshowItems(!showItems);

  }

  return (
    <div className="category">
      

      <div className="itemcategory">

      <h2 onClick={handlebtn} className="reccom-header">
        
        {data.title} ({data.itemCards?.length || 0})

        
 
         < span className="icon">⬇️</span>
         
      </h2>
     
     {showItems && <ElementsCategory itemelement={data.itemCards} />}
            
        </div>
   
    </div>
  );
}
