import Card from "./InstockCard";
import { useContext } from "react";
import { initialGlobelContext } from "../ContextAPI/GlobleContext";

function InstockCardHolder() {
  const { shoe } = useContext(initialGlobelContext);
  const inStock = shoe["inStock"];

  return (
    <section className="card-holder">
      {Object.entries(inStock).map(([slug, { name, img, discount }]) => (
        <Card key={slug} name={name} image={img} discount={discount} />
      ))}
    </section>
  );
}

export default InstockCardHolder;
