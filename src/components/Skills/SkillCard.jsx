import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./SkillCard.module.css";

export const SkillCard = ({ skill: { title, description, image}}) => {
  return (
    <>
      <div className={styles.container}>
      <img src={getImageUrl(image)} alt="skillname" className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <br/>
        <p className={styles.description}>{description}</p>
      </div>
    </>
  );
};
 