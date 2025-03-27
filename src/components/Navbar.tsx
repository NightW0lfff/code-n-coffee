import React from "react";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between w-dvw py-10 px-16 bg-[var(--foreground)]">
			<a href="#">
				<h1 className="text-3xl font-bold text-[var(--logo)]">Code&Coffee</h1>
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
			<button className=" px-4 py-2 font-bold bg-[var(--accent)] text-white rounded cursor-pointer hover:bg-[var(--accent-hover)]">
				Join
			</button>
		</div>
	);
};

export default Navbar;
