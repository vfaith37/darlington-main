import React from 'react';

interface Image {
	src: string;
	alt: string;
    title: string,
    desc: string
}

const images: Image[] = [
	{ src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg", alt: "Image 1", title: "Men in Black", desc: "looking sharp" },
	{ src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg", alt: "Image 2", title: "Men in Black", desc: "looking sharp" },
	{ src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg", alt: "Image 3", title: "Men in Black", desc: "looking sharp" },
	{ src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg", alt: "Image 4", title: "Men in Black", desc: "looking sharp" },
	{ src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg", alt: "Image 5", title: "Men in Black", desc: "looking sharp" },
	{ src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg", alt: "Image 6", title: "Men in Black", desc: "looking sharp" },
	{ src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg", alt: "Image 7", title: "Men in Black", desc: "looking sharp" },
	{ src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg", alt: "Image 8", title: "Men in Black", desc: "looking sharp" },
	{ src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg", alt: "Image 9", title: "Men in Black", desc: "looking sharp" },
	{ src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg", alt: "Image 10", title: "Men in Black", desc: "looking sharp" },
	{ src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg", alt: "Image 11", title: "Men in Black", desc: "looking sharp" },
	{ src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg", alt: "Image 12", title: "Men in Black", desc: "looking sharp" }
];

const Projects: React.FC = () => {
	return (
		<div>
            <h1>Recent Projects</h1>
	        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
		    {images.map((image, index) => (
		    	<div key={index}>
		        	<img className="h-auto max-w-full rounded-lg" src={image.src} alt={image.alt} />
                    <h1>{image.title}</h1>
                    <p>{image.desc}</p>
		    	</div>
		    ))}
		    </div>
	    </div>
	);
};

export default Projects;
