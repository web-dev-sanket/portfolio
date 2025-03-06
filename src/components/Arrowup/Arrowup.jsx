import React, { useEffect, useState } from 'react';

import styles from './Arrowup.module.css'
import { getImageUrl } from '../../utils';

export const Arrowup = () => {

const [arrowup, setarrowup] = useState(false);
useEffect(() => {
    window.addEventListener("scroll", () =>{
        if(window.scrollY > 100) {
            setarrowup(true)
        } else {
            setarrowup(false)
        }
    })
}, [])

const scrollUp = () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

  return (
    <>
    {arrowup && (<div className={styles.container}>
        <img src={getImageUrl("scroll/arrow.png")} alt="" onClick={scrollUp} className={styles.arrowImg}/>
    </div>)}
    </>
  )
}
