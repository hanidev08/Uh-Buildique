"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from "@/public/assets/img5.jpeg";
import img2 from "@/public/assets/img6.jpeg";
import img3 from "@/public/assets/img7.jpeg";
import img4 from "@/public/assets/img8.jpeg";
import "./style.scss";

export const OurTeam = () => {
  const container = useRef(null);
  const [activeImage, setActiveImage] = useState(1);

  const imageData = [
    {
      id: "img1",
      src: img1,
      alt: "img1",
      zIndex: 10,
      name: "Marina Frost",
      title: "Office Manager",
    },
    {
      id: "img2",
      src: img2,
      alt: "img2",
      zIndex: 20,
      name: "Renee Smith",
      title: "Architect",
    },
    {
      id: "img3",
      src: img3,
      alt: "img3",
      zIndex: 30,
      name: "Hannah Bishop",
      title: "Architect",
    },
    {
      id: "img4",
      src: img4,
      alt: "img4",
      zIndex: 40,
      name: "Danny Cole",
      title: "Architect",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: () => `${window.innerHeight * imageData.length}px`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.floor(progress * imageData.length);
            setActiveImage(
              index + 1 <= imageData.length ? index + 1 : imageData.length
            );
          },
        },
      });

      imageData.forEach((item, i) => {
        tl.fromTo(
          `#${item.id}`,
          {
            clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
            scale: 0,
            opacity: 0,
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            duration: 10,
          },
          i === 0 ? 0 : `>+=1`
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      data-scroll-section
      ref={container}
      className="h-screen overflow-hidden relative"
    >
      {/* Header */}
      <div className="mt-18 bg-white flex flex-col items-center md:flex-row w-[97%] mx-auto md:justify-between">
        <h1 className="text uppercase font-bold tracking-tight">Portraits</h1>
        <span className="text-xl md:text-[18px] hidden md:flex items-center gap-1">
          <div>{activeImage}</div>
          <div className="w-3 h-px bg-black"></div>
          <div>{imageData.length}</div>
        </span>
        <h1 className="text uppercase font-bold tracking-tight">individuels</h1>
        <div className="text-xl md:hidden mt-2 mix-blend-difference text-white z-50">
          {activeImage}-{imageData.length}
        </div>
      </div>

      {/* Names */}
      <div className="flex bg-white mt-2 flex-col md:flex-row w-[97%] mx-auto justify-between h-[50%] md:h-[70%] items-center">
        <h1 className="textOne uppercase font-bold mix-blend-difference text-white z-50">
          {imageData[activeImage - 1]?.name}
        </h1>
        <h1 className="textOne uppercase font-bold mix-blend-difference text-white z-50">
          {imageData[activeImage - 1]?.title}
        </h1>
      </div>

      {/* Images */}
      <div>
        {imageData.map((img) => (
          <div
            key={img.id}
            id={img.id}
            style={{ zIndex: img.zIndex }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[300px] md:w-[20vw] md:max-w-[500px] aspect-[4/5]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="size-full object-cover"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};
