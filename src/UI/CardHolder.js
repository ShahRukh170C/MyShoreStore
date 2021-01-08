import { Outlet } from "react-router-dom";
function CardHolder() {
  return (
    <div className="cardContainor">
      <h1>Nike Shoes</h1>
      <Outlet />
    </div>
  );
}

export default CardHolder;
