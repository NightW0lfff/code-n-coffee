import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  description: string;
  image: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <section className="flex flex-col items-center text-center">
      <h1 className="text-6xl font-semibold py-4 w-2/4 leading-snug text-[var(--heading)] ">
        {title}
      </h1>
      <p className="w-2/4 mx-auto mb-6">{description}</p>
      <div className="flex justify-center gap-4 py-4 mb-30">
        <button className="px-4 py-2 font-bold rounded cursor-pointer bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]">
          Sign Up
        </button>
        <button className="px-4 py-2 font-semibold !bg-white !border !border-[var(--accent)] !text-[var(--accent)] rounded cursor-pointer hover:!bg-[var(--accent-light)] hover:!text-[var(--accent)] hover:!border-transparent">
          Learn More
        </button>
      </div>
      <Image
        src={image}
        alt="Hero Image"
        width={1400}
        height={800}
        className="mx-auto bg-slate-400"
      />
    </section>
  );
};

export default HeroSection;
