export default function ElementsCategory({ itemelement = [] }) {
  console.log(itemelement);

  return (
    <div>
      {itemelement.map((item, index) => {
        const image = `https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`;

        return (
          <div key={index}>
            

            <span className="names">{item.card.info.name}</span>
<div className="imghead"><img className="bannermenu" src={image} alt="Food item" /></div>
            <div className="price">
              <span>Rs {item.card.info.defaultPrice / 100}</span>
            </div>

            <div className="desc">
              <p>{item.card.info.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
