import React from "react";
import { motion } from "framer-motion";

export default function MarketingOneSVG() {
  const svgVariants = {
    visible: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.5,
      },
    },
  };
  const pathVariants = {
    hidden: {
      rotate: 360,
    },
    visible: {
      rotate: 0,
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const blinkVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.svg
      variants={svgVariants}
      viewBox="0 0 383.34 380.64"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      //   animate="visible"
      whileInView="visible"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M136.27,138.12c.66,3.51,1.36,7.15,2.15,11.32L77.07,161l-.07.54c6.66,1.2,13.32,2.43,20,3.59q40.14,7,80.29,13.9a11.1,11.1,0,0,0,3.68.06q49-8.43,98-16.94c.84-.15,1.65-.45,3.54-1l-62.34-11.73,2.17-11.73c12.07,2.25,23.81,4.42,35.54,6.63,19.59,3.68,39.18,7.32,58.74,11.15a12.11,12.11,0,0,1,5.76,3c11.22,11,22.28,22.18,33.41,33.28,2,2,3.77,4.11,2.89,7.2s-3.29,4.1-6.15,4.7c-7.78,1.64-15.54,3.4-23.5,5.16v30.26H317.06V211.45c-8.05,1.72-15.67,3.34-23.29,5-25.32,5.49-50.64,10.95-75.94,16.54-3.52.78-6-.18-8.22-2.84-7.81-9.23-15.72-18.38-24-28.08V345.37l40.07-9.94L228.6,347l-16.36,4.09c-10,2.5-20,5.07-30.09,7.44a12.85,12.85,0,0,1-5.82,0q-70.16-17.42-140.27-35c-5.42-1.35-6.51-2.77-6.51-8.29q0-50.9,0-101.79v-4.58c-8.14-1.8-16-3.59-23.93-5.24-2.8-.58-5.44-1.78-5.6-4.63a9.59,9.59,0,0,1,2.36-6.55C13.57,180.84,25,169.51,36.45,158.2a9.39,9.39,0,0,1,4.41-2.56q47.16-9,94.37-17.73A3.86,3.86,0,0,1,136.27,138.12ZM173,345.38V202.05c-8.31,9.68-16.22,18.81-24,28-2.35,2.79-4.91,3.64-8.56,2.82-24.06-5.36-48.16-10.56-72.26-15.8-8.73-1.89-17.48-3.74-26.44-5.65V312.57ZM18,193.55a7.94,7.94,0,0,0,1.25.75q59.84,13,119.68,25.87a5,5,0,0,0,3.94-1.55c7.74-8.8,15.32-17.73,22.92-26.64a27.88,27.88,0,0,0,1.66-2.48c-40.72-7.1-80.94-14.13-121.18-21.07a4.89,4.89,0,0,0-3.73.73C34.31,177.13,26.27,185.26,18,193.55Zm172.9-4c1.07,1.36,1.71,2.24,2.42,3.06,7.37,8.62,14.8,17.19,22.09,25.87a4.43,4.43,0,0,0,5.08,1.69Q271.33,209,322.24,198c6-1.3,12-2.66,18.6-4.14-8.66-8.67-16.7-16.82-24.92-24.78-.81-.79-2.78-.78-4.11-.56-10.93,1.82-21.83,3.78-32.75,5.68Z" />
          <path d="M179.39,167.49c-2.37,0-4.74.08-7.1,0a24,24,0,0,1-22.95-23.16c-.1-3.49-.19-7,0-10.47.33-5.79-1.86-10.21-6.1-14.16-12.13-11.3-18.06-25.42-17.87-42,.33-28.29,22.94-52.3,50.56-53.82a54.09,54.09,0,0,1,56.57,47.23c2.53,19-3.33,35.22-17.08,48.4-4.4,4.23-6.65,8.75-6.29,14.82a71.15,71.15,0,0,1-.14,11.95,23.87,23.87,0,0,1-23.62,21.25c-2,0-4,0-6,0Zm5.85-47.88c4.67,0,8.78,0,12.89,0a3.85,3.85,0,0,0,2.55-1c3.2-3.46,6.34-7,9.36-10.6,11.66-14,14.58-29.61,7.41-46.39-6.74-15.79-19.11-24.7-36.38-25.67-16.91-.95-33,9.48-39.93,25.12a43.85,43.85,0,0,0,7.92,47.67c3,3.16,5.72,6.53,8.63,9.76a3,3,0,0,0,1.75,1.09c4.56.09,9.12,0,13.32,0,1.8-6.33,0-10.53-5.37-13.49-3.13-1.72-5.66-4.53-8.75-6.37C151.1,95.2,148.5,88.6,149.27,80.1c.56-6.14,3.2-10.71,8.89-13.17s10.74-1.3,15.31,2.58c5.83,4.95,5.79,4.94,11.52,0,4.56-3.91,9.73-5,15.31-2.63s8.62,7,8.87,13.16c.47,11.8-3.58,18.11-14.69,22.91l-6.77-9.1c2.58-2,5-3.67,7.27-5.6,1-.82,2.13-2.15,2.09-3.21a39.94,39.94,0,0,0-1.34-6.91c-1.9,1.08-4.09,1.85-5.66,3.28-6.71,6.14-15.14,6.15-21.75-.22-1-.94-1.86-2.43-3-2.68s-3.29.35-3.76,1.23c-1.49,2.83,0,7.1,2.7,9.13,5.88,4.42,11.92,8.63,17.54,13.36a11.49,11.49,0,0,1,3.3,6.56C185.65,112.2,185.24,115.73,185.24,119.61Zm-23.89,17.74h35.59v-5.47H161.35Zm1.85,12.33c2.41,3.86,5.49,5.57,9.22,5.76a129.08,129.08,0,0,0,13.77,0,10.73,10.73,0,0,0,9.06-5.75Z" />
          <motion.g
            variants={blinkVariants}
            id="LIGHT_RAYS"
            data-name="LIGHT RAYS"
          >
            <path d="M120.71,26.33l7.55-7.55,12.05,12.77-7.84,7.13C128.87,34.91,124.89,30.72,120.71,26.33Z" />
            <path d="M238.05,26.94,225.74,39.31,218.1,31l12.25-12Z" />
            <path d="M173.45,0H185V17.58H173.45Z" />
            <path d="M119.19,72V83.49h-17.5V72Z" />
            <path d="M239.45,71.78h17.36V83.43H239.45Z" />
          </motion.g>
          <motion.g
            variants={pathVariants}
            id="GEAR_ROTATION"
            data-name="GEAR ROTATION"
          >
            <path d="M349.86,339.55c-1.29,2.14-1.93,3.82-3.07,5-4.66,4.86-9.43,9.61-14.25,14.31-3.38,3.3-6.31,3.22-9.76,0-.37-.34-.71-.7-1.07-1.05-3.33-3.31-7.21-3.55-10.84-.47a4.2,4.2,0,0,0-.89,2.63c-.17,1.86,0,3.75-.18,5.6-.4,3.47-2.49,5.47-6,5.53q-10.84.18-21.69,0c-3.47-.06-5.46-2.11-5.92-5.57a18.56,18.56,0,0,1-.1-2.24c-.1-5.55-1.85-7.71-7.16-8.55a3.36,3.36,0,0,0-2.25.78,38,38,0,0,0-2.94,2.88c-4,3.94-6.8,3.94-10.83-.05q-6.64-6.58-13.22-13.23c-3.68-3.73-3.67-6.57-.09-10.29l1.06-1.06c2.94-3,3.08-8.06.09-10.85-.68-.63-2-.61-3.11-.72-2.22-.23-4.57,0-6.66-.59-2.81-.84-3.88-3.25-3.87-6.16,0-6.73,0-13.47,0-20.2,0-4.47,2.16-6.58,6.62-6.84.63,0,1.25,0,1.87,0,4.54,0,7.66-2.86,8-7.43a3.63,3.63,0,0,0-1-2.2c-1-1.14-2.11-2.12-3.14-3.2-3.3-3.47-3.39-6.39-.11-9.75q7.06-7.23,14.29-14.28c3.22-3.14,6.14-3.06,9.49,0,.46.42.89.87,1.33,1.31a7.7,7.7,0,0,0,10.86.27,3.91,3.91,0,0,0,.75-2.36c.12-1.74,0-3.5.09-5.23.31-3.85,2.42-6,6.2-6.09q10.67-.18,21.32,0c3.64.05,5.71,2.14,6.14,5.75a22.69,22.69,0,0,1,.09,2.61c0,4.74,2.53,7.56,7.32,8.05a3.45,3.45,0,0,0,2.21-.93c1.24-1,2.3-2.29,3.48-3.4,3.3-3.08,6.24-3.14,9.48,0q7.24,7,14.29,14.28c3.17,3.25,3.14,6.17.12,9.49-.42.46-.88.89-1.32,1.33-3.18,3.21-3.39,7.5-.38,10.86a3.62,3.62,0,0,0,2.3.83c1.87.14,3.75,0,5.61.13,3.62.33,5.75,2.44,5.81,6.07q.18,10.65,0,21.32c-.05,3.79-2.23,5.9-6,6.26-.74.07-1.5,0-2.24,0-4.95,0-7.55,2.22-8.05,7.25-.11,1,1.07,2.29,1.84,3.31C346.11,335,348,337.2,349.86,339.55Zm-3.08-39c-6.21-.12-10.92-2.49-12.95-8.7a20.06,20.06,0,0,0-1.49-3.82c-3.55-6.26-3.56-12.09,1.81-17.06l-6.59-7c-3.94,3.8-8.4,5.77-13.88,3.5-2.87-1.19-6.07-1.92-8.54-3.68a29.26,29.26,0,0,1-6.59-7.16c-.88-1.27-.63-3.33-.89-5h-9.43c-.11,6.14-2.35,10.63-8.27,12.65a25,25,0,0,0-4.15,1.66c-6.26,3.5-12.1,3.59-17.3-2.1L252,270.35c1.28,2.29,2.83,4.32,3.61,6.61,1.87,5.53-3.88,19.37-9.12,21.92-2.18,1.05-4.72,1.34-7.23,2V310c5.55.06,10.1,1.88,12.41,7.26a46.94,46.94,0,0,0,1.89,4.88c3.57,6.34,3.87,12.29-1.92,17.58l6.4,6.44c2.61-1.35,4.89-3,7.43-3.72,5.08-1.51,18.58,4.31,21,9,1.14,2.26,1.51,4.91,2.27,7.53h9c.1-6.23,2.48-10.93,8.69-12.95a20.12,20.12,0,0,0,3.83-1.48c6.25-3.61,12.08-3.56,17.05,1.81l6.88-6.42c-5.44-7.46-5.58-8.95-1.87-17.45.75-1.71,1-3.82,2.1-5.16a38.77,38.77,0,0,1,7.2-6.58c1.26-.89,3.33-.64,5.14-.93Z" />
            <path d="M292.93,338.17a32.93,32.93,0,1,1,33-32.64A33,33,0,0,1,292.93,338.17ZM314,305.39a21,21,0,1,0-21.11,20.81A21,21,0,0,0,314,305.39Z" />
          </motion.g>
        </g>
      </g>
    </motion.svg>
  );
}
