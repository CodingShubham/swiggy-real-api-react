import Card from "./Card";
import { useState, useEffect } from "react";
import Shimmerui from "./Shimmerui";
import { Link } from "react-router-dom";
const BodyContent=()=>{


    const SwiggyAPI ="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.466299273499935&lng=77.50673218474678&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#";


const[data, setdata]=useState([]);
const[filterdata,setfilterdata]=useState([]);
const[fetchdata,setfetchdata]=useState("");





useEffect(()=>{

  extractData();

},[]);


const extractData= async()=>{

 
const response= await fetch(SwiggyAPI);
const json= await response.json();
setfilterdata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
setdata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants )



}








   let filterDatas=()=>{

    if(fetchdata.length>0){

    let refilter=data.filter((item)=>item.info.name.toLowerCase().includes(fetchdata.toLowerCase()));
    setfilterdata(refilter);

    }

    setfetchdata("");
  

   }


   const filterout=()=>{

    const changed=data.filter((item)=>(item.info.avgRatingString>4))
    setfilterdata(changed);
   

   }


  if(filterdata.length===0){

    return <Shimmerui/>;
    
  }


  return (
    <div className="bodys">
      <div className="seracharea">
        <input onChange={(event)=>(setfetchdata(event.target.value))} value={fetchdata}   className="search" placeholder="Enter" />
        <button onClick={filterDatas}   className="btn">Search</button>
         <button onClick={filterout}  className="btn">Filter</button>
         
      </div>

      <div className="cards">          

        {filterdata.map((item, index) =>( 
            

            <Link key={item.info.id || index} to={"/restraunts/"+ item.info.id}><Card  resdata={item}/></Link>
            
         
        ))}

     
      </div>

    
    </div>


  );
    
}



export default BodyContent












