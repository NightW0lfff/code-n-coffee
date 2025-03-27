import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

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
			<h4 className="mb-8 text-sm tracking-widest uppercase">Blog</h4>
			<h2 className="text-4xl font-bold">Discover the Latest Tech Insights</h2>

			{/* Section Description */}
			<p className="w-1/3 mx-auto mb-12">
				Explore our blog to find insightful articles on software engineering,
				web development, and design.
			</p>

			{/* Blog Grid */}
			<div className="grid w-full grid-cols-1 gap-20 md:grid-cols-2">
				{blogData.map((blog) => (
					<Card key={blog.id} className="flex flex-col gap-6 pt-0">
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
								<Avatar className="w-12 h-12">
									<AvatarImage
										src="https://github.com/shadcn.png"
										alt="@shadcn"
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>

								{/* Blog Infomation */}
								<div className="flex flex-col w-full text-start">
									<p className="font-semibold text-gray-600">John Doe</p>
									<div className="flex items-center justify-between w-full ">
										<p className="text-[.8rem] text-gray-400">
											August 25, 2021
										</p>
										<p className="text-[.8rem] text-gray-400">6 mins read</p>
									</div>
								</div>
							</div>
						</div>
					</Card>
				))}
			</div>

			{/* CTA Button */}
			{/* <div className="flex justify-end w-full px-20"> */}
			<Link
				href="#"
				className="pt-12 tracking-wider underline rounded-full cursor-pointer underline-offset-4 hover:text-[var(--accent)]"
			>
				Read More
			</Link>
			{/* </div> */}
		</section>
	);
};

export default BlogSection;
