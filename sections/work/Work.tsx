import { useState } from "react";
import img1 from "@/public/assets/img1.jpeg";
import img2 from "@/public/assets/img2.jpeg";
import img3 from "@/public/assets/img3.jpeg";
import img4 from "@/public/assets/img4.jpeg";
import "./style.scss";

import { Modal } from "./modal";

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
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section className="relative">
      <div className="container ">
        <div className="pt-12">
          <h1 className="work uppercase tracking-tight">featured Works</h1>
        </div>
        <p className=" mb-5 text-sm">(All Works)</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-full">
          {Data.map((item, index) => (
            <ul
              onMouseEnter={() => {
                setModal({ active: true, index });
              }}
              onMouseLeave={() => {
                setModal({ active: false, index });
              }}
              key={index}
              className=" cursor-pointer px-8 py-2 flex flex-col md:flex-row md:justify-between md:items-start
               w-full border-t last:border-b border-black uppercase text-sm md:text-[12px]"
            >
              <li className="md:w-1/6">{item.date}</li>
              <li className="md:w-3/6">{item.title}</li>
              <div className=" max-md:flex max-md:justify-between max-md:mt-4 max-md:w-full flex justify-between w-1/2">
                <li className="">{item.location}</li>
                <li className="">{item.note}</li>
              </div>
            </ul>
          ))}
        </div>
        <Modal modal={modal} projects={Data} />
      </div>
    </section>
  );
};
