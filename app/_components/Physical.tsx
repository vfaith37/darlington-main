import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

interface Physic {
	title: string;
	value: string;
}

const physicStats: Physic[] = [
	{ title: "Height", value: "6 FT" },
	{ title: "Suit", value: "39/40R M" },
	{ title: "Eyes", value: "Brown" },
	{ title: "Waist", value: "32''" },
	{ title: "Shirt", value: "Medium" },
	{ title: "Shoe", value: "42/43" },
	{ title: "Pants", value: "41''" },
	{ title: "Hair", value: "Black" },
];

const Physical = () => {
	const physicalRef = useRef(null);
	const statsRef = useRef(null);
	const isPhysicalInView = useInView(physicalRef);
	const isStatsInView = useInView(statsRef);

	return (
		<div ref={physicalRef} className="my-8">
			<div className="flex flex-col sm:flex-row sm:gap-2 lg:gap-10 xl:gap-20 justify-center items-center w-full">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: isPhysicalInView ? 1 : 0, scale: isPhysicalInView ? 1 : 0.5 }}
					transition={{ ease: "linear", duration: 2 }}
					className="mb-4 sm:mb-0"
				>
					<Image
						width={389}
						height={538}
						className="h-auto max-w-full rounded-lg"
						src="/PhysicalStats.jpg"
						alt="Physical Stats Image"
					/>
				</motion.div>
				<motion.div
					ref={statsRef}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: isStatsInView ? 1 : 0, scale: isStatsInView ? 1 : 0.5 }}
					transition={{ ease: "linear", duration: 2 }}
					className="font-satoshi pt-12 w-[232px]"
				>
					<p className="font-gallient text-4xl mb-9">Physical Stats</p>
					{physicStats.map((item, index) => (
						<div key={index} className="flex justify-between mb-6">
							<h1 className="font-light">{item.title}</h1>
							<p className="font-medium font-satoshi">{item.value}</p>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default Physical;
