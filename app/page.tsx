"use client";

import Image from "next/image";
import Header from "./_components/Header";
import Physical from "./_components/Physical";
import _Portfolio from "./_components/Portfolio";
import Footer from "./_components/Footer";
import Slider from "./_components/Slider";
import CoffeeSlider from "./_components/CSlider";
import MasonryGrid from "./_components/Grid";
import Projects from "./_components/Projects";
import Eventbanner from "./_components/Eventbanner";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function Home() {
	const ref = useRef(null);
	const isInView = useInView(ref);

	useEffect(() => {
		console.log("Element is in view: ", isInView);
	}, [isInView]);

	return (
		<main className="container mx-auto p-4 overflow-hidden">
			<Header />
			{/* <Slider /> */}
			{/* <CoffeeSlider /> */}
			<Physical />
			{/* <Slider /> */}
			<Projects />
			{/* <MasonryGrid /> */}
			<_Portfolio />

			<Eventbanner />
			{/* <Footer /> */}
		</main>
	);
}
