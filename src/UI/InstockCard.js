function Card({ name, image, discount }) {
  return (
    <div className="mycard">
      <div className={discount === "" ? "" : "discount-tag"}>
        {discount === "" ? "" : discount + "%"}
      </div>
      <img src={image} alt=""></img>
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Card;
