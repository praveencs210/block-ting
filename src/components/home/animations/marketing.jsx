import React from "react";
import { motion } from "framer-motion";
export default function MarketingSVG() {
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
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2.5,
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
          <path d="M132.19,264.41l10.61,15.7c12.24,18.05,24.61,36,36.68,54.19,11.54,17.38,4.23,39.08-15.16,45.81-13,4.52-27.26-.66-35.82-13.22q-25.26-37.08-50.41-74.24c-.83-1.22-1.7-2.42-2.64-3.75-7.64,4.74-15.64,7.56-24.47,7.82a49.55,49.55,0,0,1-51-50.6C.43,229.78,7.68,217,21,207.66c9.82-6.84,19.87-13.35,29.65-20.23a17.49,17.49,0,0,0,5.52-6.21q28.7-57.7,57.1-115.55c4.59-9.31,12.35-14.14,22.4-15.32,12.68-1.49,24.12,2.7,35,8.58,19.85,10.72,35.93,25.92,50.1,43.21,20.76,25.32,37,53.17,45.46,85,3.58,13.46,5.46,27.15,2.59,41.06-1.46,7.08-4.29,13.54-9.45,18.76a28.13,28.13,0,0,1-18.59,8.47c-35.17,2.69-70.34,5.56-105.5,8.38C134.49,263.92,133.67,264.14,132.19,264.41ZM121.43,93.93c1,5.82,1.68,13.22,3.66,20.24,12.41,44.05,37,80.23,72.15,109.25,9.75,8,20.6,14.38,33.21,17.22,6.66,1.51,12-.63,16.73-5.06,3.85-3.64,5.79-8.36,6.78-13.47,1.83-9.48.91-18.89-1.11-28.2-4.17-19.24-12.68-36.64-22.92-53.27C216.18,118.28,200,98,179,82c-9.46-7.23-19.52-13.41-31.29-16.2-13.42-3.18-22.9,3-25.2,16.61C121.92,85.67,121.86,89.06,121.43,93.93Zm-13.15,15.24a15.88,15.88,0,0,0-.9,1.44q-18.76,38.24-37.57,76.45c-1.06,2.13-.36,3.43.73,5q19.15,28.14,38.19,56.34a4.92,4.92,0,0,0,5.18,2.48c25.59-2.09,51.2-4.07,76.8-6.11,3-.23,5.94-.59,9-.9C152.89,209.71,122.45,165,108.28,109.17ZM96.76,256.94c-13-19.1-25.68-37.81-38.41-56.55-1,.57-1.67.9-2.28,1.32C46.71,208.1,37.2,214.29,28,221c-13.93,10.13-17.34,28.94-8.25,43.7,10,16.24,28.13,22.58,43.66,14C75,272.34,85.54,264.34,96.76,256.94Zm-9,23.75c1.63,2.44,3.12,4.72,4.65,7q24.24,35.71,48.47,71.45c3,4.51,7,7.47,12.48,7.84,6.41.43,11.46-2.19,14.66-7.78,3.37-5.89,2.67-11.69-1.08-17.23q-24.87-36.65-49.72-73.31c-2.15-3.17-5.57-4.05-8.85-1.9C101.55,271.23,94.82,275.92,87.8,280.69Z" />
          <motion.path
            variants={pathVariants}
            id="Line_3"
            data-name="Line 3"
            d="M283.56,103.74c-4.7,0-7.11-1.69-8.35-4.93s0-6.53,3.27-8.71c7.24-4.84,14.55-9.57,21.83-14.35q13.88-9.12,27.76-18.24c4.62-3,8.94-2.56,11.52,1.16S341,66.9,336.26,70q-24.17,15.89-48.38,31.7A27.12,27.12,0,0,1,283.56,103.74Z"
          />
          <motion.path
            variants={pathVariants}
            id="Line_2"
            data-name="Line 2"
            d="M295.61,137.94l31,5.54c9.32,1.67,18.63,3.37,27.95,5,4.58.8,7.5,4.11,7,8.12a7.65,7.65,0,0,1-9.27,6.52q-29.25-5.15-58.46-10.51c-4.67-.85-7.38-4.38-6.81-8.33S290.81,137.78,295.61,137.94Z"
          />
          <motion.path
            variants={pathVariants}
            id="Line_1"
            data-name="Line 1"
            d="M258.16,7.83q-2.28,22.28-4.57,44.55c-.37,3.59-.7,7.18-1.15,10.76-.57,4.55-3.85,7.24-8.18,6.81-4-.39-6.78-3.72-6.34-8.17q2.7-27.68,5.63-55.32A7.09,7.09,0,0,1,251.7.05,7.26,7.26,0,0,1,258.16,7.83Z"
          />
          <motion.path
            variants={pathVariants}
            id="Curve"
            d="M171.84,122.2c20.71,0,35.92,10.78,41.47,27a39.85,39.85,0,0,1-13.18,44.29,14,14,0,0,1-5.93,2.78c-3.28.59-5.85-1.14-7.17-4.18a7,7,0,0,1,1.57-8.24c.87-.87,1.93-1.56,2.89-2.36A25.24,25.24,0,0,0,163.21,140c-.66.36-1.29.76-1.94,1.13-4.34,2.4-8.51,1.51-10.73-2.27s-.84-7.88,3.29-10.49C160.31,124.3,167.38,122.24,171.84,122.2Z"
          />
        </g>
      </g>
    </motion.svg>
  );
}
