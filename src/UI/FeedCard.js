import { Link } from "react-router-dom";
import { useContext } from "react";
import { initialGlobelContext } from "../ContextAPI/GlobleContext";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import "animate.css";

//external Components add to car

function isItemIAlreadyInCart(cart, slug) {
  var isItemFound = false;
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i];
    if (obj.slugs === slug) {
      isItemFound = true;
    }
  }
  return isItemFound;
}

function Card({ name, image, slug }) {
  const { cart, cartSetStates } = useContext(initialGlobelContext);
  function DisplayNotification(message, messageStatus) {
    store.addNotification({
      title: "Add to Card",
      message: `${message} `,
      type: `${messageStatus}`, // 'default', 'success', 'info', 'warning'
      container: "top-left", // where to position the notifications
      animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
      animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
      dismiss: {
        duration: 3000,
      },
    });
  }
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt="Avatar" />
        </div>
        <div className="flip-card-back">
          <Link className="shoeLink" to={`/Feed/${slug}`}>
            <h2>{name}</h2>
          </Link>

          <button
            className="btns"
            onClick={() => {
              if (isItemIAlreadyInCart(cart, slug) === true) {
                DisplayNotification("Already in Cart", "info");
                return;
              } else {
                cartSetStates([
                  ...cart,
                  { id: Object.keys(cart).length + 1, slugs: slug },
                ]);
                DisplayNotification("Added to Cart", "success");
              }
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
