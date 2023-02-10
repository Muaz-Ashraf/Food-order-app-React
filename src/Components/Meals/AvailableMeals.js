import React from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pizza",
    description: "Finest cheese and meat",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Biryani",
    description: "A south asian specialty!",
    price: 18.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Ceaser Salad",
    description: "Healthy option for the diet conscious",
    price: 16.99,
  },

  {
    id: "m5",
    name: "Gajrela",
    description: "Tastiest dessert made of carrots",
    price: 11.99,
  },
];

const AvailableMeals = () => {
  const foodList = DUMMY_MEALS.map((food) => (
    <MealItem
      id={food.id}
      key={food.id}
      name={food.name}
      description={food.description}
      price={food.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{foodList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
