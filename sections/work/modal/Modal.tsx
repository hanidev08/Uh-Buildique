// import React, { useEffect, useRef } from "react";
// import "./style.scss";
// import { motion } from "framer-motion";
// import Image, { StaticImageData } from "next/image";
// import gsap from "gsap";

// type Props = {
//   modal: { active: boolean; index: number };
//   projects: {
//     date: string;
//     title: string;
//     location: string;
//     note: string;
//     src: string | StaticImageData;
//     color: string;
//   }[];
// };

// const scaleAnimation = {
//   initial: { scale: 0, x: "-50%", y: "-50%" },
//   enter: {
//     scale: 1,
//     x: "-50%",
//     y: "-50%",
//     transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
//   },
//   closed: {
//     scale: 0,
//     x: "-50%",
//     y: "-50%",
//     transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
//   },
// };

// export const Modal = ({ modal, projects }: Props) => {
//   const { active, index } = modal;
//   console.log(index);
//   const modalContainer = useRef(null);
//   const cursor = useRef(null);
//   const cursorLabel = useRef(null);

//   useEffect(() => {
//     //Move Container
//     const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
//       duration: 0.8,
//       ease: "power3",
//     });
//     const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
//       duration: 0.8,
//       ease: "power3",
//     });

//     //Move cursor
//     const xMoveCursor = gsap.quickTo(cursor.current, "left", {
//       duration: 0.5,
//       ease: "power3",
//     });
//     const yMoveCursor = gsap.quickTo(cursor.current, "top", {
//       duration: 0.5,
//       ease: "power3",
//     });
//     //Move cursor label
//     const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
//       duration: 0.45,
//       ease: "power3",
//     });
//     const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
//       duration: 0.45,
//       ease: "power3",
//     });

//     window.addEventListener("mousemove", (e) => {
//       const { clientX, clientY } = e;
//       xMoveContainer(clientX);
//       yMoveContainer(clientY);
//       xMoveCursor(clientX);
//       yMoveCursor(clientY);
//       xMoveCursorLabel(clientX);
//       yMoveCursorLabel(clientY);
//     });
//   }, []);

//   return (
//     <>
//       <motion.div
//         variants={scaleAnimation}
//         initial="initial"
//         animate={active ? "enter" : "closed"}
//         ref={modalContainer}
//         className="modalContainer"
//       >
//         <div style={{ top: index * -100 + "%" }} className="modalSlider">
//           {projects.map((project, index) => {
//             const { src, color } = project;
//             return (
//               <div
//                 className="modal"
//                 key={index}
//                 style={{ backgroundColor: color }}
//               >
//                 <Image src={src} width={200} height={0} alt="image" />
//               </div>
//             );
//           })}
//         </div>
//       </motion.div>
//       {/* <motion.div
//         ref={cursor}
//         className="cursor"
//         variants={scaleAnimation}
//         initial="initial"
//         animate={active ? "enter" : "closed"}
//       ></motion.div>
//       <motion.div
//         ref={cursorLabel}
//         className="cursorLabel"
//         variants={scaleAnimation}
//         initial="initial"
//         animate={active ? "enter" : "closed"}
//       >
//         View
//       </motion.div> */}
//     </>
//   );
// };
