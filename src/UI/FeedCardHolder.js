import Card from "./FeedCard";
import { useContext } from "react";
import { initialGlobelContext } from "../ContextAPI/GlobleContext";
export const shoes = [];
export const FeedCardHolder = () => {
  const { shoe } = useContext(initialGlobelContext);
  const feedShoes = shoe["feed"];

  return (
    <section className="card-holder">
      {Object.entries(feedShoes).map(([slug, { name, img }]) => (
        <Card key={slug} slug={slug} name={name} image={img} />
      ))}
    </section>
  );
};
