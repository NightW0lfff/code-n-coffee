import React from "react";

const Footer = () => {
	return (
		<footer className="flex flex-col items-center justify-between w-full gap-20">
			<div className="flex flex-col items-center gap-4">
				<a href="#">
					<h1 className="text-3xl font-bold font-(family-name:--font-brand) tracking-tight">
						Code&Coffee
					</h1>
				</a>
				<ul className="flex gap-4">
					<li>News</li>
					<li>Blogs</li>
					<li>About</li>
					<li>Resources</li>
				</ul>
			</div>

			<div className="flex justify-between w-full text-[.8rem] tracking-tighter gap-4">
				<p className="text-center">
					&copy; {new Date().getFullYear()} Code&Coffee. All rights reserved.
				</p>

				<ul className="flex gap-8 underline underline-offset-3">
					<li className=" hover:text-[var(--accent)]">
						<a href="#">Privacy Policy</a>
					</li>
					<li className=" hover:text-[var(--accent)]">
						<a href="#">Terms of Service</a>
					</li>
					<li className=" hover:text-[var(--accent)]">
						<a href="#">Cookies Settings</a>
					</li>
				</ul>

				<p className="text-center">Made with ❤️ by Code&Coffee Team</p>
			</div>
		</footer>
	);
};

export default Footer;
