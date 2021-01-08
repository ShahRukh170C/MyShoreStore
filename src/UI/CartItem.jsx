import { useContext } from "react";
import { initialGlobelContext } from "../ContextAPI/GlobleContext";
function CartItem({ cartItemname }) {
    const { shoe,cart,cartSetStates } = useContext(initialGlobelContext);
    const feedShoes = shoe["feed"];
    const{name,img} = feedShoes[cartItemname];
                    console.log(cart)
    
    return (
        <div className="mycard">
            <div className="close-container" onClick={()=>
                 // eslint-disable-next-line array-callback-return
                 {cart.map((el,key) => {
                    el.slugs===cartItemname? delete cart[key]: console.log(key)
                    console.log(cart)
                    cartSetStates(cart.filter(Boolean));  
                 })}
            }>
                <div className="leftright"></div>
                <div className="rightleft"></div>
                {/* <label className="close">Remove</label> */}
            </div>
            <img src={img} alt=""></img>
            <div>
                <p>{name}</p>
            </div>
        </div>
    );
}

export default CartItem;