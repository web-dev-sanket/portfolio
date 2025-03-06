import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <>
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Swaroop</h1>
        <p className={styles.description}>A Versatile Project Manager specialized in Scrum methodology and end-to-end project management, driving Agile transformations and optimizing team performance. Reach out if you'd like to learn more!</p>
        <a href="mailto:swaroopcoc84@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/working.png")} alt="Hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
    </section>

    </>
  )
}

