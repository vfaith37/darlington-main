import React from 'react';

interface Image {
	src: string;
	alt: string;
		title: string,
		desc: string
}

const images: Image[] = [
	{ src: "https://i.ibb.co/YhLB0Hw/IMG-8776.jpg", alt: "Image 1", title: "Men in Black", desc: "Freestyle Shoot" },
	{ src: "https://i.ibb.co/GWD3GwT/IMG-8783.jpg", alt: "Image 2", title: "Men in Black", desc: "Freestyle Shoot" },
	{ src: "https://i.ibb.co/85z4tNh/IMG-5384.jpg", alt: "Image 3", title: "Men in Black", desc: "Freestyle Shoot" },
	{ src: "https://i.ibb.co/FJfqhmK/IMG-5319.jpg", alt: "Image 4", title: "Men in Black", desc: "Freestyle Shoot" },
	{ src: "https://i.ibb.co/qB4MR7Z/IMG-9014.jpg", alt: "Image 5", title: "Men in Black", desc: "Freestyle Shoot" },
	{ src: "https://i.ibb.co/Dbg3Fhb/IMG-8651.jpg", alt: "Image 6", title: "Men in Black", desc: "Freestyle Shoot" },
	{ src: "https://i.ibb.co/bdN8k2m/IMG-5388.jpg", alt: "Image 7", title: "Men in Black", desc: "Freestyle Shoot" },
	{ src: "https://i.ibb.co/KLJ3zmb/IMG-5059.jpg", alt: "Image 8", title: "Men in Black", desc: "Freestyle Shoot" },
];

const Projects: React.FC = () => {
	return (
		<div className='p-5 md:p-10 mt-16'>
			<h1 className='text-center font-gallient text-5xl mb-8'>Recent Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{images.map((image, index) => (
				<div key={index} className='mt-8'>
					<img className="h-auto max-w-full rounded-lg" src={image.src} alt={image.alt} />
						<h1 className='font-satoshi font-bold mt-2 text-xl'>{image.title}</h1>
						<p className='text-[#606060] text-[16px]'>{image.desc}</p>
				</div>
			))}
			</div>
			</div>
	);
};

export default Projects;
