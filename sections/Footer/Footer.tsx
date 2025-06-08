import Link from "next/link";
import "./style.scss";

export const Footer = () => {
  const handleClickTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    if (!hash) return;

    const target = document.querySelector(hash);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className=" border-t border-gray-400 mb-[30px]">
      <div className=" container">
        <div className=" flex flex-col gap-4 md:flex-row sm:justify-between py-12 md:py-16">
          <h1 className="header">Work with us</h1>
          <h1 className="header">work@vucko.co</h1>
        </div>
        <div className=" border-t border-gray-400 flex gap-20 max-sm:text-xl py-16 tracking-wide">
          <ul className="flex flex-col md:gap-1">
            <li className=" mb-4">Sitemap</li>
            <li className=" text-gray-400">Projects</li>
            <li className=" text-gray-400">Approach</li>
            <li className=" text-gray-400">About</li>
            <li className=" text-gray-400">Contact</li>
          </ul>
          <ul className="flex flex-col md:gap-1">
            <li className=" mb-4">Socials</li>
            <li className=" text-gray-400">Instagram</li>
            <li className=" text-gray-400">LinkedIn</li>
            <li className=" text-gray-400">Behance</li>
          </ul>
        </div>
        <div className=" mt-36 flex flex-col items-center gap-4 md:hidden ">
          <Link
            href="#top"
            className="tracking-tight text-xl"
            onClick={handleClickTop}
          >
            Back top ↑
          </Link>
          <h1 className="heading font-bold uppercase">Uh-Buildique</h1>
          <div className="tracking-tight text-xl">Copyright © Vucko 2023</div>
        </div>
        <div className=" mt-46 hidden md:flex items-end justify-between ">
          <h1 className="heading font-bold uppercase">Uh-Buildique</h1>
          <Link
            href="#top"
            className="tracking-tight text-xl"
            onClick={handleClickTop}
          >
            Back top ↑
          </Link>
          <div className="tracking-tight text-xl">Copyright © Vucko 2023</div>
        </div>
      </div>
    </footer>
  );
};
