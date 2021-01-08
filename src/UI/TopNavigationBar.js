import { useContext } from "react";
import { initialGlobelContext } from "../ContextAPI/GlobleContext";
import { Link } from "react-router-dom";

function TopNaviggationBar() {
  const { cart } = useContext(initialGlobelContext);
  return (
    <div className="top-nav-containor">
      <p>www.shoeShop.com</p>
      <div className="cart">
        <i className="fa fa-shopping-cart"></i>
        <Link to="/cart">
          <div className="cart-notification">{Object.keys(cart).length}</div>
        </Link>
      </div>
    </div>
  );
}

export default TopNaviggationBar;
