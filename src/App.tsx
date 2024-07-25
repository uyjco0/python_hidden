import React from "react";

import { PicModal } from "./features/PicModal";
import { Header } from "@/features/Header";
import { Content } from "@/features/Content";
import { Footer } from "@/features/Footer";

export function App() {
  // Control the modal with the snake hidden in plain sight
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  return (
    <>
      {/* The modal to get the user name*/}
      {isVisible ? <PicModal setIsVisible={setIsVisible} /> : null}
      {/* The content*/}
      {!isVisible ? (
        <div className="flex flex-col h-[100dvh] overflow-y-hidden">
          <Header />
          <Content />
          <Footer setIsVisible={setIsVisible} />
        </div>
      ) : null}
    </>
  );
}
