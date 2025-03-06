import React from 'react';

import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <>
    <footer id='contact' className={styles.container}>
       <div className={styles.text}>
       <h2>Contact</h2>
       <p>Feel free to reach out!</p>
       </div>
      <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/phoneIcon.png")} alt="email Icon" />
            <a>+91 8160048325</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="email Icon" />
            <a href="mailto:swaroopcoc84@gmail.com">swaroopcoc84@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin Icon" />
            <a href="https://www.linkedin.com/in/swaroophumane/">linkedin.com/Swaroop Humane</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="github Icon" />
            <a href="https://github.com/swaroophumane">github.com/Swaroop Humane</a>
        </li>
       </ul>
    </footer>
    </>
  )
}
