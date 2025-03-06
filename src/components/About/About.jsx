import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="me with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Project Manager</h3>
              <br/>
              <p>
              Dynamic and results-driven Project Manager & Scrum Master with 13+ years of expertise leading high-performing teams across global enterprises like HERE Maps, Tata Communications, and Google India. A PMP and CSM-certified professional, adept at driving Agile transformations, optimizing workflows, and accelerating project delivery with precision. Proficient in Scrum, stakeholder engagement, and quality assurance, ensuring seamless execution of mission-critical projects in banking, navigation, and technology sectors.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
              A visionary leader with strategic acumen in automation testing, leveraging JIRA, Python, and AI-driven insights to enhance product quality and team synergy. Passionate about empowering teams, fostering collaboration, and delivering high-impact solutions that drive business success, innovation, and continuous growth.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
