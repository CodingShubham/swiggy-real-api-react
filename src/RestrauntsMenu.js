import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestroCategory from "./RestroCategory";

export default function RestrauntsMenu(){

     const {resid}=useParams();
    // console.log(resid);

    const Menu_API=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.466299273499935&lng=77.50673218474678&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
    const[menu,setmenu]=useState([]);
    useEffect(()=>{

        fetchapi();

    },[]);

   


    const fetchapi= async()=>{

        const api= await fetch(Menu_API);
        const json= await api.json()

        setmenu(json.data.cards);


    }
    
// console.log(menu);



    const{name,cuisines,totalRatingsString,avgRating,id}=menu[2]?.card?.card?.info || [];

  //  const itemCards = menu?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

   const category= menu?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item=>item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || [] ;
//    console.log(category)

// if (!itemCards.length) return <h2>Loading menu...</h2>;

    return (

        <div className="menus">
                 <h1>{name}</h1>
            <div className="headitems">
            
            <h3>{cuisines}</h3>   
              <h3>{totalRatingsString}</h3>
             
            </div>

           


              <div className="options">
              
              {
                // itemCards.map((items,index)=><li key={items.card.info.id ||index}>{items.card.info.name}</li>)

             category.map((item, index) => (
             <RestroCategory key={index} data={item.card.card} />
))

              }
              </div>


        </div>

    );
}




