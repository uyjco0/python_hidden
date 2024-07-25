interface AppProps {
  src: string;
  text: string;
}

export function Pic({ src, text }: AppProps) {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex flex-col justify-center w-[80%] object-scale-down max-h-full m-auto md:mt-5">
        <img src={src} alt="graph" />
      </div>
      <div className="flex flex-rows justify-center w-full text-black font-semibold mt-1 md:mt-2">
        {text}
      </div>
    </div>
  );
}
