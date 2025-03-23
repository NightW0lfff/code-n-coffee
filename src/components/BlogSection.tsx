import React from "react";
import Image from "next/image";

const blogData = [
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
];

const BlogSection = () => {
  return (
    <section className="flex flex-col items-center w-full gap-2 text-center">
      {/* Section Title */}
      <h4 className="mb-12 text-sm tracking-widest uppercase">Blog</h4>
      <h2 className="text-4xl font-bold">Discover the Latest Tech Insights</h2>

      {/* Section Description */}
      <p className="w-1/3 mx-auto mb-12">
        Explore our blog to find insightful articles on software engineering,
        web development, and design.
      </p>

      {/* Blog Grid */}
      <div className="grid w-full grid-cols-1 gap-20 px-20 md:grid-cols-2">
        {blogData.map((blog) => (
          <div key={blog.id} className="flex flex-col gap-6">
            {/* Image Placeholder */}
            <Image
              src={blog.image}
              className="w-full bg-gray-300"
              alt="Blog thumbnail image"
              width={400}
              height={250}
            />
            <div className="flex flex-col gap-1 px-3">
              {/* Title */}
              <h3 className="text-lg font-bold text-start">{blog.title}</h3>
              {/* Description */}
              <p className="w-3/4 mb-6 text-gray-600 text-start">
                {blog.description}
              </p>
              {/* Author Icon */}
              <div className="flex items-center gap-2">
                <Image
                  src="/images/author.png"
                  alt="Author icon"
                  width={20}
                  height={20}
                  className="w-12 h-12 bg-gray-300 rounded-full"
                />
                {/* Blog Infomation */}
                <div className="flex flex-col w-full text-start">
                  <p className="font-semibold text-gray-600">John Doe</p>
                  <div className="flex items-center justify-between w-full ">
                    <p className="text-gray-400">August 25, 2021</p>
                    <p className="text-gray-400">6 mins read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {/* <div className="flex justify-end w-full px-20"> */}
      <button className="pt-12 tracking-wider text-white underline rounded-full cursor-pointer bg-primary underline-offset-4">
        Read More
      </button>
      {/* </div> */}
    </section>
  );
};

export default BlogSection;
