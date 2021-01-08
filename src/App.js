import "./App.css";
import TopNaviggationBar from "./UI/TopNavigationBar";
import NavigationBar from "./UI/NavigationBar";
import CardHolder from "./UI/CardHolder";
import { FeedCardHolder } from "./UI/FeedCardHolder";
import InStockHolder from "./UI/InStockHolder";
import UpcomingHolder from "./UI/UpcomingCardHolder";
import CartItemsHolder from "./UI/CartItemHodler";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import ReactNotifications from "react-notifications-component";

import { useContext } from "react";
import {
  GlobleContext,
  initialGlobelContext,
} from "./ContextAPI/GlobleContext";
function App() {
  return (
    <Router>
      <GlobleContext>
        <div className="app">
          <ReactNotifications />
          {/* create the heasder */}
          <TopNaviggationBar />
          {/* navigation bar */}
          <NavigationBar />
          <Routes>
            <Route path="/" element={<CardHolder />}>
              <Route path="Feed" element={<FeedCardHolder />}></Route>
              <Route path="Instock" element={<InStockHolder />}></Route>
              <Route path="Upcoming" element={<UpcomingHolder />}></Route>
              <Route path="/Feed/:slug" element={<LaunchShoe />}></Route>
              <Route path="*" element={<NotFound />} />
              <Route path="/cart" element={<CartItemsHolder />}></Route>
            </Route>
          </Routes>
        </div>
      </GlobleContext>
    </Router>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}
function LaunchShoe() {
  //read the shoed
  const { shoe } = useContext(initialGlobelContext);
  const feedShoes = shoe["feed"];
  //get the parameter
  const { slug } = useParams();
  //Search in feed shoes
  const shoes = feedShoes[slug];
  const { name, img, price } = shoes;
  return (
    <div className="shoeCon">
      <div className="shoe">
        <img src={img} alt=""></img>
        <div className="InfoCard">
          <h3>{price}</h3>
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
