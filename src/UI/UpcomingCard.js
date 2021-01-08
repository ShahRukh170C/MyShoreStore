function Card({ name, image, date, month }) {
  return (
    <div className="mycard">
      <div className="dataTime-tag">
        <span>{date}</span>
        <span>{month}</span>
      </div>
      <img src={image} alt=""></img>
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Card;
