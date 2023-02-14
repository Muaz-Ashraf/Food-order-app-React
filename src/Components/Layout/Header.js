import React from "react";
import styles from "./Header.module.css";
import foodImage from "../../assets/food.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Meals by Muaz</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={foodImage} alt="food on table" />
      </div>
    </>
  );
};

export default Header;
