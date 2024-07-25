import React, { SetStateAction } from "react";

import { motion } from "framer-motion";

import FullPic from "@/assets/fig_hidden_1.png";
import PartialPic from "@/assets/fig_hidden_2.png";

interface Props {
  setIsVisible: React.Dispatch<SetStateAction<boolean>>;
}
interface State {
  src: string;
  text: string;
}
export function PicModal({ setIsVisible }: Props) {
  const [imgSrc, setImgSrc] = React.useState<State>({
    src: FullPic,
    text: "clue",
  });
  function closeModal() {
    setIsVisible(false);
  }
  function changePic() {
    if (imgSrc.src === FullPic) {
      setImgSrc({ src: PartialPic, text: "Back" });
    } else {
      setImgSrc({ src: FullPic, text: "Clue" });
    }
  }
  return (
    <div className="z-40 transition-all flex flex-col justify-center items-center h-screen w-screen">
      <motion.div
        className="flex flex-col relative justify-center items-center h-[70%] md:h-[90%] w-[90%] md:w-[70%] bg-duck-green-light rounded-xl shadow-md"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75 }}
      >
        <div className="absolute inset-y-0 right-0 pr-3 pt-5">
          <button
            className="rounded-full bg-slate-100 w-7 h-7 hover:bg-white"
            onClick={closeModal}
          >
            X
          </button>
        </div>

        <div className="flex flex-col justify-center h-[70%] w-[85%] md:w-[60%] md:h-[80%] mx-5">
          <img
            src={imgSrc.src}
            alt="snake"
            className="z-50 object-scale-down max-h-full m-auto"
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <button
            className="rounded-md bg-duck-red text-white hover:bg-duck-red-light hover:text-black w-14 h-8 mt-10 md:mt-5"
            onClick={changePic}
          >
            {imgSrc.text}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
