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
    <section className="text-center flex flex-col items-center">
      <h1 className="text-6xl font-semibold py-4 w-2/4 leading-snug">
        {title}
      </h1>
      <p className="w-2/4 mx-auto mb-6">{description}</p>
      <div className=" flex gap-4 justify-center py-4 mb-30">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Sign Up
        </button>
        <button className="bg-white hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer">
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
