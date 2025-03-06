import React from "react";

import styles from "./certification.module.css";
import { getImageUrl } from "../../utils";

export const Certification = () => {
  return (
    <>
      <section className={styles.container} id="certifications">
        <h2 className={styles.title}>Certifications</h2>
        <div className={styles.content}>
          <div className={styles.cardcontainer}>
            <div className={styles.card}>
              <img
                className={styles.cardimage}
                src={getImageUrl("Certification/PMP.png")}
                alt="certi img"
              />
              <div className={styles.cardcontent}>
                <h1 className={styles.cardtitle}>
                  PMP(Project Management Professional)
                </h1>
                <h2 className={styles.carddescription}>
                  Project Management Institute
                </h2>
                <br />
                <p className={styles.para}>
                  Year Awarded <br /> May, 2023
                </p>
              </div>
            </div>
          </div>

          <div className={styles.cardcontainer}>
            <div className={styles.card}>
              <img
                className={styles.cardimage}
                src={getImageUrl("Certification/CSM.png")}
                alt="certi img"
              />
              <div className={styles.cardcontent}>
                <h1 className={styles.cardtitle}>
                  CSM(Certified Scrum Master)
                </h1>
                <h2 className={styles.carddescription}>Scrum Alliance</h2>
                <br />
                <p className={styles.para}>
                  Year Awarded <br /> January, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
