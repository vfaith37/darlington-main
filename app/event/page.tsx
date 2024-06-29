// pages/event.tsx

import React from "react";

interface EventLinkProps {
	href: string;
	title: string;
	description: string;
}

const EventLink: React.FC<EventLinkProps> = ({ href, title, description }) => (
	<a
		href={href}
		className="group flex flex-col bg-black text-white rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
		target="_blank"
		rel="noopener noreferrer"
	>
		<h2 className="mb-3 text-2xl font-semibold">
			{title}{" "}

		</h2>
		<p className="m-0 max-w-[30ch] text-sm opacity-50">{description}</p>
			<div className="bg-white rounded-lg w-10 h-10 self-end flex flex-col items-center justify-center mt-6">
		<p className=" text-black font-bold">
			&darr;
			</p>
				</div>
	</a>
);

const Event: React.FC = () => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="mb-32 flex flex-row gap-5">
				{/* Links */}
				<EventLink
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					title="Docs"
					description="Find in-depth information about Next.js features and API."
				/>
				<EventLink
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					title="Learn"
					description="Learn about Next.js in an interactive course with quizzes!"
				/>
				<EventLink
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					title="Templates"
					description="Explore starter templates for Next.js."
				/>
			</div>
		</main>
	);
};

export default Event;
