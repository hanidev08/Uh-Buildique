import AnimatedText from "@/components/AnimatedText";
import "./style.scss";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TextOne =
  "We design homes and spaces guided by your vision, bringing together thoughtful design, creativity, and collaboration to shape spaces that work for how you live. We are a creative agency based in New York. We create and harness desire, from stories to buildings.";

const TextTow =
  "Over the years we have become experts in shaping space with intention, blending beauty with performance, and emotion with structure. We apply this architectural approach across residential, commercial, and cultural environments.";
export const About = () => {
  const description = useRef(null);
  const isInView = useInView(description, {
    once: false,
    margin: "-100px 0px", // أو استخدم threshold
  });
  return (
    <section ref={description} className=" py-12">
      <div className="description container flex justify-center items-center">
        <div className=" flex flex-col gap-8">
          <h1
            className=" max-w-[500px] mx-auto sm:max-w-[1024px] 
          md:max-w-[100vw]"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <AnimatedText phrase={TextOne} isInView={isInView} />
          </h1>
          <h1
            className=" max-w-[500px] mx-auto sm:max-w-[1024px] 
          md:max-w-[100vw]"
          >
            <AnimatedText phrase={TextTow} isInView={isInView} />
          </h1>
        </div>
      </div>
    </section>
  );
};
