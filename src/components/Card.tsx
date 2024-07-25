import React from "react";

interface AppProps {
  children?: React.ReactNode;
  border: string;
  borderColor: string;
  backgroundColor: string;
}

export function Card({
  children,
  border,
  borderColor,
  backgroundColor,
}: AppProps) {
  return (
    <div className="w-full h-auto text-justify text-slate-950 mt-5">
      <div
        className={`border-solid ${border} ${borderColor} ${backgroundColor} rounded-xl  p-4 xl:p-7 inline-block m-2 mr-3`}
      >
        {children}
      </div>
    </div>
  );
}
