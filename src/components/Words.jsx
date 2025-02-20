"use client";
import React, { useEffect, useRef } from "react";
import styles from "../app/page.module.css";
import { useScroll, motion, useTransform } from "framer-motion";

function Words({ value }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <p className={styles.paragraph} ref={element}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        console.log(start, end);

        return (
          <Word key={index} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

export default Words;

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
