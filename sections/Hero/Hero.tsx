"use client";
import AnimatedText from "@/components/AnimatedText";
import "./style.scss";
import img1 from "@/public/assets/img1.jpeg";
import img2 from "@/public/assets/img2.jpeg";
import img3 from "@/public/assets/img3.jpeg";
import img4 from "@/public/assets/img4.jpeg";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const images = [img1.src, img2.src, img3.src, img4.src];
export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const description = useRef(null);
  const imgRef = useRef(null);
  const isInView = useInView(description);

  const isInViewImg = useInView(imgRef);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section ref={description} id="top">
      <div
        className="container relative md:h-[calc(100vh-72px)] 
      md:flex md:flex-row-reverse md:items-center md:w-full"
      >
        <div
          ref={imgRef}
          className=" mt-20 relative w-[90vw] sm:w-[100vw] md:w-[50vw] max-w-[1024px] mx-auto aspect-[6/5] md:aspect-[7/5] md:mb-3"
        >
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`img-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`image absolute inset-0 size-full object-cover ${
                isInViewImg ? "is-reveal" : ""
              }`}
            />
          ))}
        </div>
        <div className="md:w-1/2 mt-5 flex flex-col gap-4">
          <div className="flex max-sm:justify-between md:gap-20 md:mb-3 flex-row">
            <p className="about w-1/2 ">
              <AnimatedText phrase={"(OUR WORK)"} isInView={isInView} />
            </p>
            <div className="about w-1/2">
              <ul>
                <li>
                  <AnimatedText phrase={"Bel Air Estate"} isInView={isInView} />
                </li>
                <li>
                  <AnimatedText phrase={"Chelsea Loft"} isInView={isInView} />
                </li>
                <li>
                  <AnimatedText
                    phrase={"The Marlowe Residence"}
                    isInView={isInView}
                  />
                </li>
                <li>
                  <AnimatedText
                    phrase={"Pacific Heights Villa"}
                    isInView={isInView}
                  />
                </li>
                <li>
                  <AnimatedText phrase={"The Astoria"} isInView={isInView} />
                </li>
                <li>
                  <AnimatedText phrase={"Soho Townhouse"} isInView={isInView} />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex max-sm:justify-between md:gap-20 md:mb-3 flex-row">
            <p className="about w-1/2 ">
              <AnimatedText phrase={"(ARCHIVE)"} isInView={isInView} />
            </p>
            <div className="about w-1/2 sm:mb-4">
              <ul>
                <li>
                  <AnimatedText
                    phrase={"Ocean Drive Retreat"}
                    isInView={isInView}
                  />
                </li>
                <li>
                  <AnimatedText
                    phrase={"Beverly Hills Haven"}
                    isInView={isInView}
                  />
                </li>
                <li>
                  <AnimatedText
                    phrase={"The Park Residence"}
                    isInView={isInView}
                  />
                </li>
                <li>
                  <AnimatedText
                    phrase={"Pacific Heights Villa"}
                    isInView={isInView}
                  />
                </li>
                <li>
                  <AnimatedText
                    phrase={"Tribeca Penthouse"}
                    isInView={isInView}
                  />
                </li>
                <li>
                  <AnimatedText
                    phrase={"Greenwich Village"}
                    isInView={isInView}
                  />
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="flex justify-between md:gap-42 md:mb-3 flex-row">
            <p className="about max-sm:w-1/2 bg-red-200">(OUR WORK)</p>
            <div className="">
              <ul>
                <li>Ocean Drive Retreat</li>
                <li>Beverly Hills Haven</li>
                <li>Sidney house</li>
                <li>Tribeca Penthouse</li>
                <li>Greenwich Village Flat </li>
                <li>Central Park West Residence</li>
              </ul>
            </div>
          </div> */}
          {/* <p className="about max-w-[350px] sm:max-w-[700px] md:max-w-[400px] tracking-tight">
              <AnimatedText phrase={phraseTow} isInView={isInView} />
            </p>
            <p className=" mt-5 about max-w-[350px] sm:max-w-[700px] md:max-w-[400px] tracking-tight">
              <AnimatedText phrase={phraseThree} isInView={isInView} />
            </p> */}
        </div>
      </div>
    </section>
  );
};

// "use client";
// import "./style.scss";
// import img1 from "@/public/assets/img1.jpeg";
// import img2 from "@/public/assets/img2.jpeg";
// import img3 from "@/public/assets/img3.jpeg";
// import img4 from "@/public/assets/img4.jpeg";
// import { motion, useInView } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import AnimatedText from "@/components/AnimatedText";

// const images = [img1.src, img2.src, img3.src, img4.src];

// const phrase =
//   "We create homes that are carefully tailored to reflect your lifestyle, values, and aspirations — blending your unique vision with our years of design experience to shape spaces that are not only practical and elegant, but also emotionally resonant, timeless, and distinctly yours.";

// const phraseTow =
//   "We design spaces for people. No matter the scale of the projects, our down-to-earth approach stays the same. We listen first, design second. We take the time to understand how you live, work, and move through your space.";
// const phraseThree =
//   "Then, we bring your vision to life. Drawing from real experience, we create contemporary, aspirational spaces that feel effortless and truly yours.";

// export const Hero = () => {
//   const [current, setCurrent] = useState(0);
//   const description = useRef(null);
//   const imgRef = useRef(null);
//   const imgRefMobile = useRef(null);

//   const isInView = useInView(description);
//   const isInViewImg = useInView(imgRef);
//   const isInViewImgMobile = useInView(imgRefMobile);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <section ref={description} >
//       <div className="container relative md:h-[calc(100vh-72px)]">
//         {/* For Mobile */}
//         <div className=" md:hidden">
//           <div className=" mt-5">
//             <h1 className="descMobile uppercase tracking-tight">
//               Designing Homes With People At Heart
//             </h1>
//           </div>
//           <div className="mt-5 flex items-center justify-center">
//             <div
//               ref={imgRefMobile}
//               className=" relative w-[100vw] max-w-[1024px] aspect-[5/5]"
//             >
//               {images.map((src, index) => (
//                 <motion.img
//                   key={index}
//                   src={src}
//                   alt={`img-${index}`}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: index === current ? 1 : 0 }}
//                   transition={{ duration: 0.8, ease: "easeInOut" }}
//                   className={`image absolute inset-0 size-full object-cover ${
//                     isInViewImgMobile ? "is-reveal" : ""
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="mt-5 flex max-sm:flex-col gap-4 sm:gap-20 sm:flex-row">
//             <p className="about uppercase">(Our Studio)</p>
//             <div className=" flex flex-col">
//               <p className="about max-w-[350px] tracking-tight">
//                 <AnimatedText phrase={phraseTow} isInView={isInView} />
//               </p>
//               <p className=" mt-5 about max-w-[350px] tracking-tight">
//                 <AnimatedText phrase={phraseThree} isInView={isInView} />
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* For Desctop */}
//         <div className="hidden md:flex items-end h-[100%] ">
//           <div className="w-full flex flex-col gap-16">
//             <h1 className="desc uppercase tracking-tight md:max-w-[750px]">
//               Designing Homes With
//             </h1>
//             <div className=" flex items-end justify-between ">
//               <div className="aboutTow max-w-[350px] mb-[17.5px] z-20">
//                 <AnimatedText phrase={phrase} isInView={isInView} />
//               </div>
//               <div className="flex items-center tracking-tight justify-end">
//                 <div className="desc md:flex md:items-center uppercase gap-4 max-w-[760px]">
//                   <span>
//                     <div
//                       ref={imgRef}
//                       className=" hidden md:flex relative w-[16vw] max-w-[300px] aspect-[6/5]  "
//                     >
//                       {images.map((src, index) => (
//                         <motion.img
//                           key={index}
//                           src={src}
//                           alt={`img-${index}`}
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: index === current ? 1 : 0 }}
//                           transition={{ duration: 0.8, ease: "easeInOut" }}
//                           className={`image absolute inset-0 size-full object-cover ${
//                             isInViewImg ? "is-reveal" : ""
//                           }`}
//                         />
//                       ))}
//                     </div>
//                   </span>
//                   People At Heart
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// "use client";
// import img1 from "@/public/assets/img1.jpeg";
// import img2 from "@/public/assets/img2.jpeg";
// import img3 from "@/public/assets/img3.jpeg";
// import img4 from "@/public/assets/img4.jpeg";
// import { motion, useInView } from "framer-motion";

// import "./style.scss";
// import { useEffect, useRef, useState } from "react";
// import AnimatedText from "@/components/AnimatedText";

// const images = [img1.src, img2.src, img3.src, img4.src];

// const phrase =
//   "We create homes that are carefully tailored to reflect your lifestyle, values, and aspirations — blending your unique vision with our years of design experience to shape spaces that are not only practical and elegant, but also emotionally resonant, timeless, and distinctly yours.";
// export const Hero = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const description = useRef(null);
//   const isInView = useInView(description);
//   return (
//     <section ref={description} data-scroll-section>
//       <div className=" py-12 container h-[calc(100vh-56px)] relative">
//         <div className=" flex max-md:flex-col items-end justify-between h-full">
//           <div className="desc max-w-[300px] md:max-w-[400px] leading-4">
//             <AnimatedText phrase={phrase} isInView={isInView} />
//           </div>
//           <div className=" flex items-end justify-center gap-32">
//             <div className=" relative w-[300px] h-[200px]">
//               {images.map((src, index) => (
//                 <motion.img
//                   key={index}
//                   src={src}
//                   alt={`img-${index}`}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: index === current ? 1 : 0 }}
//                   transition={{ duration: 0.8, ease: "easeInOut" }}
// //                   className="image absolute inset-0 size-full object-cover"
//                 />
//               ))}
//             </div>
//             <div className="">Explorer</div>
//           </div>
//         </div>
//         <div
//           className=" container
//          absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
//         >
//           <div className="flex items-center justify-between ">
//             <p className=" uppercase text-[20px]">Designing</p>
//             <p className=" uppercase text-[20px]">and</p>
//             <p className=" uppercase text-[20px]">Evoking</p>
//             <p className=" uppercase text-[20px]">Meaning</p>
//             {/* <p className=" uppercase text-[14px] underline underline-offset-2">
//               view Project
//             </p> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
