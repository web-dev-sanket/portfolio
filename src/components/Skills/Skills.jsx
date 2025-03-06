import React from 'react';

import styles from "./Skills.module.css";
import skills from '../../data/skills.json';
import { SkillCard } from './SkillCard';

export const Skills = () => {
  return (
    <>
    <section className={styles.container} id='skills'>
      <h2 className={styles.title}>Skills</h2>
     <div className={styles.skills}>
      {skills.map((skill, id) => {
        return <SkillCard key={id} skill={skill}  image={skill.image}
        />
        
      })}
     </div>
    </section>
    </>
  )
}
