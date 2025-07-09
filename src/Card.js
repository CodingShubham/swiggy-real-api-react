const Card = ({ resdata }) => {

  const{info}=resdata;
  const image_url=`https://media-assets.swiggy.com/swiggy/image/upload/
${info.cloudinaryImageId}`;
  console.log(image_url);


  return (
    <div className="card-container" >

      <div className="img">
     
     <img className="img2" src={image_url}/>
     
       
      </div>

      <h5>{info.name}</h5>
      
      <h6>{info.costForTwo}</h6>
      <h6 >{info.locality}</h6>
      <h6>{info.
 avgRatingString}</h6>
    </div>
  );
};



export const recommended=(Card)=>{

  return (props)=>{


    return(
      <div className="labeldiv">

      <label className="label">Reccomended</label>
      <Card {...props}/>

      </div>
     
    );
    
  }

}

export default Card;
