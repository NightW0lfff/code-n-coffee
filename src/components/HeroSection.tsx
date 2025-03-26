"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

interface HeroSectionProps {
	title: string;
	description: string;
	image: string;
}

const headlines = [
	"Dream. Code. Coffee.",
	"Your Daily Brew of Dev Thoughts",
	"Tech News, One Sip at a Time",
	"News, Opinions & Developer Brews",
	"Stay Sharp. Stay Caffeinated",
	"Fuel Your Dream. And Your Code",
];

const HeroSection: React.FC<HeroSectionProps> = ({
	title,
	description,
	image,
}) => {
	return (
		<section className="flex flex-col items-center text-center">
			<h1 className="text-6xl font-semibold w-2/4 leading-snug text-[var(--heading)] font-(family-name:--font-brand)">
				Code & Coffee
			</h1>

			<h2 className="w-2/4 mb-6 ">
				<span>
					<Typewriter
						options={{
							strings: headlines,
							cursor: "_",
							autoStart: true,
							loop: true,
							delay: 70,
							deleteSpeed: 30,
							wrapperClassName: "text-2xl font-medium text-[var(--heading)] ",
							cursorClassName: "text-2xl font-light animate-ping",
						}}
					/>
				</span>
			</h2>
			<p className="w-2/4 mx-auto mb-6 text-lg italic font-medium">
				" A community of developers who love to code and drink coffee. "
			</p>
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
