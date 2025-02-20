"use client"
import React, { useEffect, useRef } from 'react'
import styles from '../app/page.module.css'
import {useScroll, motion} from 'framer-motion'

function Paragraph({value}) {
  const element = useRef(null)
  const {scrollYProgress} = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"]
  })

  useEffect(() => {
    scrollYProgress.on("change", e => console.log(e))    
  }, [])

  return (
    <motion.p 
      className={styles.paragraph}
      ref={element}
      style={{opacity: scrollYProgress}}
    >
      {value}
    </motion.p>
  )
}

export default Paragraph