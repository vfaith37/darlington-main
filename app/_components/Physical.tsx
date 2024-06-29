import { images } from "./constants";
import left from "../../public/left.svg";
import right from "../../public/right.svg";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface Physic {
	title: string;
	value: string
}
const physic: Physic[] = [
	{title: "Height", value: "6 FT"},
	{title: "Suit", value: "39/40R M"},
	{title: "Eyes", value: "Brown"},
	{title: "Waist", value: "32''"},
	{title: "Shirt", value: "Medium"},
	{title: "Shoe", value: "42/43"},
	{title: "Pants", value: "41"},
	{title: "Hair", value: "Black"},
]
const worked_with: Physic[] = [
	{title: "San Diego", value: "2019"},
	{title: "Ruthers", value: "2019"},
	{title: "Doramints", value: "2018"},
	{title: "Dsaints", value: "2022"},
	{title: "Dason", value: "2021"},
	{title: "St. Patrick", value: "2023"},
	{title: "James", value: "2024"},
	{title: "Evo", value: "2024"},
]
const Physical = () => {
	const ref = useRef(null);
  console.log(ref);
  
	const isInView = useInView(ref);
	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
			transition={{ ease: "linear", duration: 2 }}
			className="my-8 p-4 bg-gray-100 rounded-md"
			>
				<div className="flex gap-9">
<div className="w-1/3">
	<img className="h-auto max-w-full rounded-lg" src={ "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"} alt={"Image 1"} />
{/* <div className="bg-black-transparent w-48 h-48 absolute top-[400px]"><p>Hey</p></div> */}
</div>
<div className="w-1/3">
	<p>Physical Stats</p>
	{physic.map((item, index) => (
		<div key={index} className="flex justify-between">
		<h1>{item.title}</h1>
		<p>{item.value}</p>
	</div>
	))}
		</div>
			<div className="w-1/3">
	<p>Worked with</p>
	{worked_with.map((item, index) => (
		<div key={index} className="flex justify-between">
		<h1>{item.title}</h1>
		<p>{item.value}</p>
	</div>
	))}
		</div>
		</div>
	</motion.div>
	);
};

export default Physical;
