import styles from "./HomePage.module.css";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section>
      <Navbar />

      <div className={`${styles.box} ${styles.box1}`}>
        <div className={styles.texts}>
          <p>UPCOMING LAUNCH</p>
          <h1>STARLINK MISSION</h1>
          <button>WATCH</button>
        </div>
      </div>

      <div className={`${styles.box} ${styles.box2}`}>
        <div className={styles.texts}>
          <p data-aos="fade-up">Recent Launch </p>
          <h1 data-aos="fade-up">Intelsat G-37 Mission</h1>
          <button data-aos="fade-up">REWATCH</button>
        </div>
      </div>

      <div className={`${styles.box} ${styles.box3}`}>
        <div className={styles.texts}>
          <p data-aos="fade-up">Recent Launch</p>
          <h1 data-aos="fade-up">Hughes JUPITER 3 Mission</h1>
          <button data-aos="fade-up">WATCH</button>
        </div>
      </div>

      <div className={`${styles.box} ${styles.box4}`}>
        <div className={styles.texts}>
          <p data-aos="fade-up"></p>
          <h1 data-aos="fade-up">Starship Flight Test</h1>
          <button data-aos="fade-up">REWATCH</button>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default HomePage;
