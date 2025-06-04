import { useState } from "react";
import img1 from "@/public/assets/img1.jpeg";
import img2 from "@/public/assets/img2.jpeg";
import img3 from "@/public/assets/img3.jpeg";
import img4 from "@/public/assets/img4.jpeg";
import { Modal } from "./modal";

export const Data = [
  {
    date: "June 5",
    title: "Festival de Musique Ancienne à Maguelone — « 47°N »",
    location: "Maguelone (FR)",
    note: "details",
    src: img1,
  },
  {
    date: "June 12",
    title: "Contemporary Soundscape — Electronic Sessions",
    location: "Berlin (DE)",
    note: "more info",
    src: img2,
  },
  {
    date: "July 1",
    title: "Jazz en Ville — Open Air Concert",
    location: "Vannes (FR)",
    note: "free entry",
    src: img3,
  },
  {
    date: "July 15",
    title: "Midnight Classical — Piano & Strings",
    location: "Geneva (CH)",
    note: "reservation required",
    src: img4,
  },
  {
    date: "July 15",
    title: "Midnight Classical — Piano & Strings",
    location: "Geneva (CH)",
    note: "reservation required",
    src: img4,
  },
  {
    date: "June 5",
    title: "Festival de Musique Ancienne à Maguelone — « 47°N »",
    location: "Maguelone (FR)",
    note: "details",
    src: img1,
  },
  {
    date: "June 12",
    title: "Contemporary Soundscape — Electronic Sessions",
    location: "Berlin (DE)",
    note: "more info",
    src: img2,
  },
  {
    date: "July 1",
    title: "Jazz en Ville — Open Air Concert",
    location: "Vannes (FR)",
    note: "free entry",
    src: img3,
  },
  {
    date: "July 15",
    title: "Midnight Classical — Piano & Strings",
    location: "Geneva (CH)",
    note: "reservation required",
    src: img4,
  },
];

export const Work = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section className="h-screen" data-scroll-section>
      <div className="flex items-center justify-center h-full">
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
              className=" cursor-pointer px-8 py-2 flex justify-between items-start w-full border-t last:border-b border-black uppercase text-sm"
            >
              <li className="w-1/6">{item.date}</li>
              <li className="w-3/6">{item.title}</li>
              <li className="w-2/6">{item.location}</li>
              <li className="w-1/6 text-right">{item.note}</li>
            </ul>
          ))}
        </div>
        <Modal modal={modal} projects={Data} />
      </div>
    </section>
  );
};
