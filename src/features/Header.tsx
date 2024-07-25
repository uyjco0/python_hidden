import { FaWandSparkles } from "react-icons/fa6";

export function Header() {
  return (
    <header className="flex flex-row justify-center items-center border-b border-grey py-2  bg-duck-yellow">
      <FaWandSparkles className="text-duck-red w-7 md:w-10 h-7 md:h-10 mr-5 font-semibold animate-pulse" />
      <div className="flex flex-col items-center px-2 py-1 font-semibold grow-0">
        <p className="text-md md:text-lg text-black">
          Channeling magic with Assigments
        </p>
        <p className="text-sm md:text-base text-slate-500">Part one</p>
      </div>
    </header>
  );
}
