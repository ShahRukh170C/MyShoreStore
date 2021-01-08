import Card from "./UpcomingCard";

import { useContext } from "react";
import { initialGlobelContext } from "../ContextAPI/GlobleContext";

function UpcomingCardHolder() {
  const { shoe } = useContext(initialGlobelContext);
  const upComingShoe = shoe["upComing"];

  return (
    <section className="card-holder">
      {Object.entries(upComingShoe).map(
        ([slug, { name, img, date, month }]) => (
          <Card key={slug} name={name} image={img} month={month} date={date} />
        )
      )}
    </section>
  );
}
export default UpcomingCardHolder;
