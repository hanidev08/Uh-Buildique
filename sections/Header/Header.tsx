"use client";
import React from "react";
import {
  motion,
  useAnimate,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./style.scss";
import Link from "next/link";
const navItems = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "WORKS",
    href: "/work",
  },
  {
    label: "STUDIO",
    href: "/studio",
  },
  {
    label: "PROCESS",
    href: "/process",
  },
  {
    label: "GALLERY",
    href: "/gallery",
  },
];

const slideUp = {
  initial: {
    y: "100%",
  },
  open: {
    y: "0%",
    transition: { duration: 0.5, delay: 0.7 },
  },
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

export const Header = () => {
  const { scrollY } = useScroll();
  const [isActive, setIsActive] = useState(false);
  const [navScope, navAnimate] = useAnimate();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (isActive) {
      navAnimate(
        navScope.current,
        {
          height: "100%",
        },
        {
          duration: 0.7,
          ease: "easeInOut",
        }
      );
    } else {
      navAnimate(navScope.current, {
        height: 0,
      });
    }
  }, [navAnimate, navScope, isActive]);

  const description = useRef(null);
  const isInView = useInView(description, { once: false });
  const shouldAnimate = isActive && isInView;

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden"; // يمنع التمرير
    } else {
      document.body.style.overflow = ""; // يعيد الوضع الطبيعي
    }

    // تأكد من تنظيف التأثير إذا خرجت من المكون
    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className=" sticky top-0 z-50"
    >
      <div
        ref={navScope}
        className=" fixed top-0 left-0 right-0 w-full h-0 bg-black z-10 overflow-hidden"
      >
        <div className="container relative h-full flex items-center">
          <div className=" h-1/3 flex flex-col gap-38">
            <nav ref={description} className=" flex justify-center flex-col">
              {navItems.map(({ label }) => (
                <div
                  key={label}
                  className="menu text-white relative flex flex-col overflow-hidden"
                >
                  <motion.span
                    variants={slideUp}
                    initial="initial"
                    animate={shouldAnimate ? "open" : "closed"}
                  >
                    {label}
                  </motion.span>
                </div>
              ))}
            </nav>
            <div className=" uppercase text-sm text-white flex flex-col gap-8">
              <div className=" uppercase text-sm text-white flex relative overflow-hidden">
                <motion.span
                  variants={slideUp}
                  initial="initial"
                  animate={shouldAnimate ? "open" : "closed"}
                >
                  Instgram
                </motion.span>
              </div>
              <div>
                <div className=" flex relative overflow-hidden">
                  <motion.span
                    variants={slideUp}
                    initial="initial"
                    animate={shouldAnimate ? "open" : "closed"}
                  >
                    Privacy Policy
                  </motion.span>
                </div>
                <div className=" flex relative overflow-hidden">
                  <motion.span
                    variants={slideUp}
                    initial="initial"
                    animate={shouldAnimate ? "open" : "closed"}
                  >
                    Terms of Service
                  </motion.span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" flex justify-between h-14 md:h-18 items-center">
          <div className="logo font-bold z-10">
            {isActive ? (
              <div className=" text-white"> Uh Buildique</div>
            ) : (
              <div> Uh Buildique</div>
            )}
          </div>
          <div
            className="md:hidden z-10"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            {isActive ? (
              <div className=" text-white">CLOSE</div>
            ) : (
              <div>MENU</div>
            )}
          </div>
          <div className=" hidden md:flex items-center gap-1">
            <Link className=" text-[14px] uppercase" href="">
              Works,
            </Link>
            <Link className=" text-[14px] uppercase" href="">
              Studio,
            </Link>
            <Link className=" text-[14px] uppercase" href="">
              Process,
            </Link>
            <Link className=" text-[14px] uppercase" href="">
              gallery
            </Link>
          </div>
          <div className=" hidden md:flex items-center gap-4 text-[14px]">
            <h2 className=" uppercase underline">Français</h2>
            <h2 className=" uppercase">English</h2>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
