import CartItem from "./CartItem";
import { useContext } from "react";
import { initialGlobelContext } from "../ContextAPI/GlobleContext";

function InstockCardHolder() {
  const { cart } = useContext(initialGlobelContext);
  
  return (
    <section className="card-holder">
      {cart.map(el => (
        <CartItem key={el.id} cartItemname={el.slugs} />
       
      ))}
    </section>
  );
}

export default InstockCardHolder;
