// pages/Press.tsx

import React from "react";
import Publications from "../_components/Publications";

interface PressLinkProps {
	href: string;
	title: string;
	description: string;
}

const PressLink: React.FC<PressLinkProps> = ({ href, title, description }) => (
	<a
		href={href}
		className="group flex justify-between lg:flex-col bg-black text-white rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 w-[321px]"
		target="_blank"
		rel="noopener noreferrer"
	>
		<div className="">
		<h2 className="mb-3 text-2xl font-semibold">
			{title}{" "}

		</h2>
		<p className="m-0 max-w-[30ch] text-sm opacity-50">{description}</p>
		</div>
			<div className="bg-white rounded-lg lg:w-10 h-10 self-end flex flex-col items-center justify-center lg:mt-6">
		<p className="text-black font-bold px-2">
			<span className="lg:hidden">
				Download
			</span>
		<span className=" ">
			&darr;
			</span>
		</p>
				</div>
	</a>
);

const Press: React.FC = () => {
	return (
		<main className="flex min-h-screen flex-col items-center mt-10 w-full overflow-hidden">
			<div className="flex lg:flex-row flex-col gap-5">
				{/* Links */}
				<PressLink
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					title="Media Kit"
					description="April 2024"
				/>
				<PressLink
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					title="Event Archives"
					description="April 2024"
				/>
				<PressLink
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					title="Media Inquiry"
					description="April 2024"
				/>
			</div>
			<Publications />
		</main>
	);
};

export default Press;
