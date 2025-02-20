import React from "react";
import styles from "./diffcss/Main.module.css";

const Main = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>TEASER</div>
      <ul className={styles.navLinks}>
        <li className={styles.navcomponents}>HOME</li>
        <li className={styles.navcomponents}>LISTING</li>
        <li className={styles.navcomponents}>BLOCKS</li>
        <li className={styles.navcomponents}>ABOUT</li>
        <li className={styles.navcomponents}>PRICING</li>
        <li className={styles.navcomponents}>CONTACT US</li>
      </ul>
      <div className={styles.authButtons}>
        <button className={styles.signIn}>Sign In</button>
        <button className={styles.signUp}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Main;
