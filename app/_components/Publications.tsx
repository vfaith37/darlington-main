import React from "react";

interface Publication {
	image: string;
	date: string;
	source: string;
	title: string;
	desc: string;
	alt: string;
}

const publications: Publication[] = [
	{
		image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
		alt: "Image 1",
		title: "Music Is A Tool Through Which I Spread The Gospel.",
		desc: "Darlington Uchenna Unichi is an elite fashion and runway model, for whom modelling trandsend beyond showcasing clothing or highlighting……Morewic and to the brands he advocates for. Over the past two decades as a brand ambassador, Darlington has consistently achieved exceptional results, meeting objectives and fostering long-term relationships. His dedication to excellence has earned recognition from both local and international brands, including SEGURA VIUDAS, Mr. Universe Nigeria, the International Human Rights Peace Commission in Florida, USA, Neveen Dominic Cosmetics, and as a delegate for Beauty From the King Kush.",
		source: "Vanguard NGR",
		date: "April 2024",
	},
	{
		image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
		alt: "Image 2",
		title: "Darlington Unichi: The Multifaceted Model Redefining Success",
		desc: "this is a test page to check for custom writeups on this website. the idea is to have external links as well as internal article links, this is an example of internal link, click anywhere on the text to…..",
		source: "Evocreatives",
		date: "April 2024",
	},
	{
		image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
		alt: "Image 3",
		title: "Music Is A Tool Through Which I Spread The Gospel.",
		desc: "Darlington Uchenna Unichi is an elite fashion and runway model, for whom modelling trandsend beyond showcasing clothing or highlighting……Morewic and to the brands he advocates for. Over the past two decades as a brand ambassador, Darlington has consistently achieved exceptional results, meeting objectives and fostering long-term relationships. His dedication to excellence has earned recognition from both local and international brands, including SEGURA VIUDAS, Mr. Universe Nigeria, the International Human Rights Peace Commission in Florida, USA, Neveen Dominic Cosmetics, and as a delegate for Beauty From the King Kush.",
		source: "Vanguard NGR",
		date: "April 2024",
	},
	{
		image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
		alt: "Image 4",
		title: "Music Is A Tool Through Which I Spread The Gospel.",
		desc: "Darlington Uchenna Unichi is an elite fashion and runway model, for whom modelling trandsend beyond showcasing clothing or highlighting……Morewic and to the brands he advocates for. Over the past two decades as a brand ambassador, Darlington has consistently achieved exceptional results, meeting objectives and fostering long-term relationships. His dedication to excellence has earned recognition from both local and international brands, including SEGURA VIUDAS, Mr. Universe Nigeria, the International Human Rights Peace Commission in Florida, USA, Neveen Dominic Cosmetics, and as a delegate for Beauty From the King Kush.",
		source: "Vanguard NGR",
		date: "April 2024",
	},
];

const Publications = () => {
	return (
		<div className="mt-20 p-5 bg-[#F7F7F7] w-full flex flex-col items-center">
			<h1 className="text-3xl mb-5">Latest Publications</h1>
			<div className="columns-1 gap-5 lg:gap-8 sm:columns-2">
				{publications.map((item, index) => (
					<div key={index} className="mb-5 bg-[#EAEAEA] w-[430px] px-5 lg:px-0">
						<img
							className="w-[430px] h-48 object-cover"
							src={item.image}
							alt={item.alt}
						/>
							<p>{item.date} | {item.source}</p>
						<h2 className="mt-2">{item.title}</h2>
						<p className=" line-clamp-3" >{item.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Publications;
