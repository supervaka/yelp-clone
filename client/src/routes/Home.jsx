import React from "react";
import Header from "../elements/Header";
import AddRestaurant from "../elements/AddRestaurant";
import RestaurantList from "../elements/RestaurantList";

const Home = () => {
  return (
    <div>
      <Header />
      <AddRestaurant />
      <RestaurantList />
    </div>
  );
};

export default Home;
