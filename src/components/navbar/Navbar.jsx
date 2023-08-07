import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <section
      className={`${styles.navbar_container}  
      ${visible ? styles.menu_visible : styles.menu_hidden}
      `}
    >
      <figure className={styles.navbar_img}>
        <img src="./logo.png" alt="logo" />
      </figure>

      <ul className={styles.menu}>
        <li className="">Falcon 9</li>
        <li className="">Falcon Heavy</li>
        <li className="">Dragon</li>
        <li className="">Starship</li>
        <li className="">Human Spaceflight</li>
        <li className="">Rideshare</li>
        <li className="">Starshield</li>
        <li className="">Starlink</li>
      </ul>

      {/* menu phone */}
      <div className={`${styles.menu_phone_box} ${isOpen ? styles.open : ""}`}>
        <div
          className={styles.menu_phone_bg}
          onClick={() => setIsOpen(!open)}
        ></div>

        <ul className={styles.sidebar}>
          <li className="">Falcon 9</li>
          <li className="">Falcon Heavy</li>
          <li className="">Dragon</li>
          <li className="">Starship</li>
          <li className="">Human Spaceflight</li>
          <li className="">Rideshare</li>
          <li className="">Starshield</li>
          <li className="">Starlink</li>
          <li className="">Mission</li>
          <li className="">Launches</li>
          <li className="">Careers</li>
          <li className="">Updates</li>
          <li>Shop</li>
        </ul>
      </div>

      <ul className={styles.navbar_right_box}>
        <li className="">Shops</li>
        <li
          className={`${styles.menu_icon} ${isOpen ? styles.open : ""}`}
          onClick={toggleSidebar}
        >
          <span></span>
          <span></span>
          <span></span>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
