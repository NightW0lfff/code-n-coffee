import React from "react";
import Image from "next/image";

const newsData = [
  {
    id: 1,
    title: "Deep Dive into Software Engineering Insights",
    description:
      "Gain valuable knowledge on backend, cloud, and DevOps topics.",
    image: "/placeholder.png", // Replace with actual image path
  },
  {
    id: 2,
    title: "Deep Dive into Software Engineering Insights",
    description:
      "Gain valuable knowledge on backend, cloud, and DevOps topics.",
    image: "/placeholder.png",
  },
  {
    id: 3,
    title: "Deep Dive into Software Engineering Insights",
    description:
      "Gain valuable knowledge on backend, cloud, and DevOps topics.",
    image: "/placeholder.png",
  },
];

const NewsSection = () => {
  return (
    <section className="flex flex-col items-center gap-2 text-center">
      {/* Section Title */}
      <h4 className="mb-12 text-sm tracking-widest uppercase">News</h4>
      <h2 className="text-4xl font-bold">
        Stay Ahead with the Latest Tech Trends
      </h2>

      {/* Section Description */}
      <p className="w-1/3 mx-auto mb-12 ">
        Discover the latest developments in technology with our up-to-date news.
        We curate essential insights to keep you informed and engaged.
      </p>

      {/* News Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {newsData.map((news) => (
          <div key={news.id} className="flex flex-col items-center gap-1">
            {/* Image Placeholder */}
            <Image
              src={news.image}
              className="mb-6 bg-gray-300 "
              alt="News thumbnail image"
              width={400}
              height={250}
            />
            {/* Title */}
            <h3 className="text-lg font-bold">{news.title}</h3>
            {/* Description */}
            <p className="w-3/4 text-gray-600 ">{news.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
