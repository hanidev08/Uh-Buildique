"use client";
import useLocoScroll from "@/hooks/useLocoScroll";

import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Work } from "@/sections/work";

export default function Home() {
  useLocoScroll(true);

  return (
    <div id="main-container" data-scroll-container>
      <Header />
      <Hero />
      {/* <Work/> */}
    </div>
  );
}

// "use client";
// import { useState } from "react";
// import styles from "./page.module.css";
// import { Project } from "@/sections/project";
// import { Modal } from "@/sections/modal";
// import img1 from "@/public/assets/img1.jpeg";
// import img2 from "@/public/assets/img2.jpeg";
// import img3 from "@/public/assets/img3.jpeg";
// import img4 from "@/public/assets/img4.jpeg";

// const projects = [
//   {
//     title: "C2 Montreal",
//     src: img1,
//     color: "#000000",
//   },
//   {
//     title: "Office Studio",
//     src: img2,
//     color: "#8C8C8C",
//   },
//   {
//     title: "Locomotive",
//     src: img3,
//     color: "#EFE8D3",
//   },
//   {
//     title: "Silencio",
//     src: img4,
//     color: "#706D63",
//   },
// ];

// export default function Home() {
//   const [modal, setModal] = useState({ active: false, index: 0 });
//   return (
//     <main className={styles.main}>
//       <div className={styles.body}>
//         {projects.map((project, index) => {
//           return (
//             <Project
//               key={index}
//               index={index}
//               title={project.title}
//               setModal={setModal}
//             />
//           );
//         })}
//       </div>
//       <Modal modal={modal} projects={projects} />
//     </main>
//   );
// }
