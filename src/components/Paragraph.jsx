"use client"
import React, { useEffect, useRef } from 'react'
import styles from '../app/page.module.css'
import {useScroll} from 'framer-motion'

function Paragraph({value}) {
  const element = useRef(null)
  const {scrollYProgress} = useScroll({
    target: element,
    offset: ["start end", "end start"]
  })

  useEffect(() => {
    scrollYProgress.on("change", e => console.log(e))    
  }, [])

  return (
    <p 
      className={styles.paragraph}
      ref={element}
    >
      {value}
    </p>
  )
}

export default Paragraph