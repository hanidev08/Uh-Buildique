"use client";
import { useEffect } from "react";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll(start: boolean) {
  useEffect(() => {
    if (!start) return;

    // نتأكد أننا على المتصفح
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    // تحميل مكتبة locomotive-scroll بشكل ديناميكي
    import("locomotive-scroll").then((module) => {
      const LocomotiveScroll = module.default;

      const scrollEl = document.querySelector("#main-container");
      if (!scrollEl || !(scrollEl instanceof HTMLElement)) return;

      const locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        class: "is-reveal",
      });

      // تنظيف عند إلغاء المكون
      return () => {
        locoScroll.destroy();
      };
    });
  }, [start]);
}
