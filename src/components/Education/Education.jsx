import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <>
      <section className={styles.container} id="education">
        <h2 className={styles.title}>Education</h2>
        <div className={styles.content}>
          <div className={styles.cardcontainer}>
            <div className={styles.card}>
              <img
                className={styles.cardimage}
                src={getImageUrl("Education/msu.png")}
                alt="clg logo"
              />
              <div className={styles.cardcontent}>
                <h1 className={styles.cardtitle}>Bachelor of Arts</h1>
                <h2 className={styles.carddescription}>
                  The Maharaja Sayajirao University of Baroda
                </h2>
                <br />
                <p className={styles.para}>
                  Vadodara, India <br /> 2005
                </p>
              </div>
            </div>
          </div>

          <div className={styles.cardcontainer}>
            <div className={styles.card}>
              <img
                className={styles.cardimage}
                src={getImageUrl("Education/msu.png")}
                alt="clg logo"
              />
              <div className={styles.cardcontent}>
                <h1 className={styles.cardtitle}>Master of Science</h1>
                <h2 className={styles.carddescription}>
                  The Maharaja Sayajirao University of Baroda
                </h2>
                <br />
                <p className={styles.para}>
                  Vadodara, India <br /> 2007
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
