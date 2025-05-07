import Image from "next/image";

export const Order = () => {
  return (
    <div className="relative w-[136px] h-[136px] cursor-pointer group">
      <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow group-hover:paused">
        <circle cx="100" cy="100" r="100" className="fill-black" />
        <defs>
          <path
            id="circlePath"
            d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
          />
        </defs>
        <text fill="white" className="text-lg">
          <textPath href="#circlePath" startOffset="0%">
            SİFARİŞ ET ⚡
          </textPath>
          <textPath href="#circlePath" startOffset="25%">
            SİFARİŞ ET ⚡
          </textPath>
          <textPath href="#circlePath" startOffset="50%">
            SİFARİŞ ET ⚡
          </textPath>
          <textPath href="#circlePath" startOffset="75%">
            SİFARİŞ ET ⚡
          </textPath>
        </text>
      </svg>

      <Image src='https://birainy.com/_next/static/media/direction.e5fbef99.svg' alt="arrow icon" width={58} height={46} className="absolute top-1/2 left-1/2 -translate-1/2 -rotate-[30deg] group-hover:rotate-0 transition-transform" />
    </div>
  );
};
