import React, { useEffect, useRef } from "react";
import "./style.scss";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";

type Props = {
  modal: { active: boolean; index: number };
  projects: {
    date: string;
    title: string;
    location: string;
    note: string;
    src: string | StaticImageData;
  }[];
};

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export const Modal = ({ modal, projects }: Props) => {
  const { active, index } = modal;
  console.log(index);
  const modalContainer = useRef(null);

  useEffect(() => {
    //Move Container
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      xMoveContainer(clientX);
      yMoveContainer(clientY);
    });
  }, []);

  return (
    <>
      <motion.div
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        ref={modalContainer}
        className=" hidden md:flex h-[150px] w-[150px]  
        items-center justify-center absolute overflow-hidden pointer-events-none"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="modalSlider w-full h-full absolute"
        >
          {projects.map((project, index) => {
            const { src } = project;
            return (
              <div
                className="relative h-full flex items-center justify-center"
                key={index}
              >
                <Image
                  src={src}
                  width={200}
                  height={0}
                  alt="image"
                  className=" h-[150px] object-cover"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};
