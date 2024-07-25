import React, { SetStateAction } from "react";

import { FaStaffSnake } from "react-icons/fa6";

interface Props {
  setIsVisible: React.Dispatch<SetStateAction<boolean>>;
}

export function Footer({ setIsVisible }: Props) {
  function openModal() {
    setIsVisible(true);
  }
  return (
    <footer className="w-full relative flex flex-row justify-center items-center border-t border-grey p-4 bg-duck-green text-white">
      <FaStaffSnake className="w-7 md:w-10 h-7 md:h-10 mr-5 font-semibold" />
      <div className="group relative">
        <a
          href="#"
          className="text-md md:text-lg font-semibold"
          onClick={openModal}
        >
          The Python hidden in plain sight
        </a>
        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
      </div>
    </footer>
  );
}
