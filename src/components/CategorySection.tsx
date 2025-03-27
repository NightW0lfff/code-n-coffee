import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";

const categories = [
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
			"Gain valuable knowledge on backend, cloud, and DevOps topics. Gain valuable knowledge on backend, cloud, and DevOps topics Gain valuable knowledge on backend, cloud, and DevOps topics",
		image: "/placeholder.png",
	},
	{
		id: 4,
		title: "Deep Dive into Software Engineering Insights",
		description:
			"Gain valuable knowledge on backend, cloud, and DevOps topics.",
		image: "/placeholder.png",
	},
];

const CategorySection = () => {
	return (
		<section className="flex flex-col items-center w-full gap-2 text-center">
			{/* Section Title */}
			<h4 className="mb-8 text-sm tracking-widest uppercase">Category</h4>
			<h2 className="text-4xl font-bold">Explore Our Categories</h2>

			{/* Section Description */}
			<p className="w-1/3 mx-auto mb-12">
				Discover the latest developments in technology with our up-to-date news.
				We curate essential insights to keep you informed and engaged.
			</p>

			{/* Category Grid */}
			<div className="grid grid-cols-1 gap-x-20 gap-y-10 w-fit md:grid-cols-2">
				{categories.map((blog) => (
					<Card key={blog.id} className="flex flex-row py-0">
						{/* Image Placeholder */}
						<Image
							src={blog.image}
							className="bg-gray-300 w-50 h-50"
							alt="Blog thumbnail image"
							width={400}
							height={250}
						/>

						<div className="flex flex-col justify-between py-2 w-fit">
							{/* <div className="flex items-center justify-end w-full pr-3 ">
								<p className="text-gray-400">August 25, 2021</p>
								<p className="text-gray-400">6 mins read</p>
							</div> */}

							<div className="flex flex-col gap-2 text-start">
								{/* Title */}
								<h3 className="text-2xl font-bold text-start">{blog.title}</h3>
								{/* Description */}
								<p className="w-3/4 text-gray-600 text-start line-clamp-2">
									{blog.description}
								</p>
							</div>
							<Link
								href="#"
								className="hover:text-[var(--accent)] tracking-wider underline rounded-full cursor-pointer underline-offset-4 text-end mr-4 mb-1"
							>
								Read More &rarr;
							</Link>
						</div>
					</Card>
				))}
			</div>

			<Link
				href="#"
				className="pt-12 tracking-wider underline rounded-full cursor-pointer underline-offset-4 hover:text-[var(--accent)]"
			>
				View All Categories
			</Link>
		</section>
	);
};

export default CategorySection;
