"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
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

const HeroSection: React.FC<HeroSectionProps> = ({ image }) => {
	return (
		<section className="flex flex-col items-center w-full text-center">
			<h1 className="text-6xl tracking-tighter font-semibold w-2/4 leading-snug text-[var(--heading)] font-(family-name:--font-brand)">
				Code & Coffee
			</h1>

			<h2 className="mb-6 m-w-3/5 w-fit ">
				<Typewriter
					options={{
						strings: headlines,
						cursor: "_",
						autoStart: true,
						loop: true,
						delay: 70,
						deleteSpeed: 30,
						wrapperClassName:
							"text-2xl font-medium text-[var(--heading)] tracking-wider ",
						cursorClassName: "text-2xl font-light animate-ping",
					}}
				/>
			</h2>
			<p className="w-2/4 mx-auto mb-6 text-lg italic font-medium">
				&ldquo;A community of developers who love to code and drink
				coffee.&rdquo;
			</p>
			<div className="flex justify-center gap-4 py-4 mb-30">
				<Button className=" font-bold   bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]">
					Sign Up
				</Button>
				<Button className=" font-semibold !bg-white !border !border-[var(--accent)] !text-[var(--accent)]   hover:!bg-[var(--accent-light)] hover:!text-[var(--accent)] hover:!border-transparent">
					Learn More
				</Button>
			</div>
			<Image
				src={image}
				alt="Hero Image"
				width={1400}
				height={800}
				className="w-full mx-auto bg-slate-400"
			/>
		</section>
	);
};

export default HeroSection;
