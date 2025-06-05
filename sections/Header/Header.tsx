import React from "react";
import "./style.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="">
      <div className="container">
        <div className=" flex justify-between h-14 md:h-18 items-center">
          <div className="logo font-bold">Uh Buildique</div>
          <div className=" md:hidden">MENU</div>
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
    </header>
  );
};
