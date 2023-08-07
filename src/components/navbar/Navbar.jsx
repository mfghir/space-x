import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

// import logoSvg from "./../../assets/logo.svg";
// import logoPng from "../../assets/logo-dark";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 150) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`${styles.navbar_container}  ${
        isFixed ? styles.menu_fixed : ""
      }`}
    >
      <figure className={styles.navbar_img}>
        {/* <img src={logoSvg} alt="logo" /> */}
        <img src="../../assets/logo-dark.jpg" alt="logo" />
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
