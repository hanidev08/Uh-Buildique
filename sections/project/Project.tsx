import React from "react";
import "./style.scss";


type Props = {
  title: string;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
  index: number;
};

export const Project = ({ title, setModal, index }: Props) => {
  return (
    <div
      className="project"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
};
