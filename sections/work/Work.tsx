import { useState } from "react";
import img1 from "@/public/assets/img1.jpeg";
import img2 from "@/public/assets/img2.jpeg";
import img3 from "@/public/assets/img3.jpeg";
import img4 from "@/public/assets/img4.jpeg";
import "./style.scss";
import { useTransitionRouter } from "next-view-transitions";

import { Modal } from "./modal";
import { sampleData } from "@/sampleData";
import Link from "next/link";

export const Data = [
  {
    date: "2023",
    title: "Myrtle Pool House",
    location: "Maguelone (FR)",
    note: "more info",
    src: img1,
  },
  {
    date: "2021",
    title: "Prince",
    location: "Berlin (DE)",
    note: "more info",
    src: img2,
  },
  {
    date: "2024",
    title: "Clifton",
    location: "Berlin (DE)",
    note: "more info",
    src: img3,
  },
  {
    date: "2025",
    title: "Sidney House",
    location: "Berlin (DE)",
    note: "more info",
    src: img4,
  },
  {
    date: "2022",
    title: "Aurora Cabin",
    location: "Oslo (NO)",
    note: "more info",
    src: img4,
  },
  {
    date: "2020",
    title: "Palm Estate",
    location: "Lisbon (PT)",
    note: "more info",
    src: img3,
  },
  {
    date: "2019",
    title: "Canopy Retreat",
    location: "Zurich (CH)",
    note: "more info",
    src: img2,
  },
  {
    date: "2023",
    title: "Nile Tower",
    location: "Cairo (EG)",
    note: "more info",
    src: img1,
  },
  {
    date: "2022",
    title: "Desert Pavilion",
    location: "Riyadh (SA)",
    note: "more info",
    src: img4,
  },
  {
    date: "2025",
    title: "Coastal Refuge",
    location: "Nice (FR)",
    note: "more info",
    src: img2,
  },
];

export const Work = () => {
  const router = useTransitionRouter();
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section className="relative overflow-x-clip md:h-screen">
      <div className="container ">
        <div className="pt-12">
          <h1 className="work uppercase tracking-tight">featured Works</h1>
        </div>
        <p className=" mb-5 text-sm">(All Works)</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full">
          {sampleData.map((item, index) => (
            <Link
              href={item.slug}
              onClick={(e) => {
                e.preventDefault();
                router.push(item.slug, {
                  onTransitionReady: pageAnimation,
                });
              }}
              onMouseEnter={() => {
                setModal({ active: true, index });
              }}
              onMouseLeave={() => {
                setModal({ active: false, index });
              }}
              key={index}
              className=" cursor-pointer px-8 py-2 flex flex-col
               md:flex-row md:justify-between md:items-start
               w-full border-t last:border-b border-black uppercase text-sm md:text-[12px]"
            >
              <div className="md:w-1/6">{item.date}</div>
              <div className="md:w-3/6">{item.title}</div>
              <div
                className=" max-md:flex max-md:justify-between max-md:mt-4 max-md:w-full
               flex justify-between w-1/2"
              >
                <div className="">{item.location}</div>
                <div className="">{item.note}</div>
              </div>
            </Link>
          ))}
        </div>
        <Modal modal={modal} projects={sampleData} />
      </div>
    </section>
  );
};

export const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.2,
        transform: "translateY(-35%)",
      },
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};
