import React from "react";

import recommand from "../../data/recommand.json";
import styles from "./Recommandation.module.css";
import Marquee from "react-fast-marquee";
import { getImageUrl } from "../../utils";

export const Recommandation = () => {
  return (
    <>
      <section className={styles.container} id="recommandation">
        <h2 className={styles.title}>Recommandation</h2>
        <div className={styles.marqueecontainer}>
            <Marquee pauseOnHover={true} speed={200} autoFill={true} >
            <ul className={styles.marqueecontent}>
              {recommand.map((item, id) => {
                return (
                  <li key={id} className={styles.marqueecard}>
                    <img
                      className={styles.marqueecardimg}
                      src={getImageUrl(item.image)}
                      alt={item.name}
                    />
                    <div>
                      <h3>{item.name}</h3>
                      <p>
                        {item.designation} <br /> <br />
                        {item.date}
                      </p>
                      <br />
                      <ul>
                        {item.recommandation.map((recommandation, id) => {
                          return (
                            <li key={id}>
                              <h4>{recommandation}</h4>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
            </Marquee>
          </div>
      </section>
    </>
  );
};
