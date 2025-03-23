import React from "react";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="flex w-full gap-20 px-20">
      <div className="flex flex-col items-start justify-around h-full text-start">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold">Stay Updated with Tech News</h2>

          {/* Section Description */}
          <p className="w-3/4">
            Explore our blog to find insightful articles on software
            engineering, web development, and design.
          </p>
        </div>

        {/* Input */}
        <div className="flex justify-between w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-1/2 p-2 border border-gray-300 rounded"
          />
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>

      <Image
        src={"/placeholder.png"}
        className="bg-gray-300 "
        alt="Blog thumbnail image"
        width={750}
        height={300}
      />
    </section>
  );
};

export default ContactSection;
