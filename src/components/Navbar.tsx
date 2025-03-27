import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between w-dvw py-10 px-16 bg-[var(--foreground)]">
			<a href="#">
				<h1 className="text-2xl tracking-tight font-bold text-[var(--logo)] font-(family-name:--font-brand)">
					Code&Coffee
				</h1>
			</a>
			<nav>
				<ul className="flex items-center justify-between gap-8 ">
					<li className="text-[var(--text-light)]">
						<a href="#">Home</a>
					</li>
					<li className="text-[var(--text-light)]">
						<a href="#">News</a>
					</li>
					<li className="text-[var(--text-light)]">
						<a href="#">Blogs</a>
					</li>
					<li className="text-[var(--text-light)]">
						<a href="#">Categories</a>
					</li>
					<li className="text-[var(--text-light)]">
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>
			<Button className="  font-bold bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]">
				Join
			</Button>
		</div>
	);
};

export default Navbar;
