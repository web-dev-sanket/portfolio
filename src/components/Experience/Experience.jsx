import React from "react";

import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <>
      <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
          <ul className={styles.history}>
            {history.map((historyItem, id) => {
              return (
                <li key={id} className={styles.historyItem}>
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organization} Logo`}
                  />

                  <div className={styles.historyItemDetails}>
                    <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                    </ul> 
                  </div>
                </li>
              );
            })}
          </ul>
        </div> 
      </section>

      <div className={`${styles.extratext} ${styles.extratextdetails} ${styles.extra}`}>
        <ul className={styles.extratextfont}>
           <div className={styles.extraItem}>
           <img  style={{width:'14%', height: '80px'}} src={getImageUrl("history/Google.png")} alt="" />
            <img style={{width:'14%', height: '80px'}} src={getImageUrl("history/Tata.png")} alt="" />
            <img style={{width:'14%', height: '80px'}} src={getImageUrl("history/Here.png")} alt="" />
            <img style={{width:'14%', height: '80px'}} src={getImageUrl("history/Genesys.png")} alt="" />
           </div>

          <p>
            I have successfully led and managed high-impact projects at Google
            India, Tata Communications and Payment Solutions Ltd., HERE Maps,
            and Genesys International Corporation Ltd from June 2009 to June
            2015. In key leadership and project management roles, I drove
            strategic initiatives, optimized workflows, and delivered results
            that enhanced operational efficiency and business growth.
          </p>
        </ul>
      </div>
    </>
  );
};
