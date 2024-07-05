import Image from "next/image";
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  title: string;
  desc: string;
}

const images: ImageProps[] = [
  {
    src: "https://i.ibb.co/YhLB0Hw/IMG-8776.jpg",
    alt: "Image 1",
    title: "Men in Black",
    desc: "Freestyle Shoot",
  },
  {
    src: "https://i.ibb.co/GWD3GwT/IMG-8783.jpg",
    alt: "Image 2",
    title: "Men in Black",
    desc: "Freestyle Shoot",
  },
  {
    src: "https://i.ibb.co/85z4tNh/IMG-5384.jpg",
    alt: "Image 3",
    title: "Men in Black",
    desc: "Freestyle Shoot",
  },
  {
    src: "https://i.ibb.co/FJfqhmK/IMG-5319.jpg",
    alt: "Image 4",
    title: "Men in Black",
    desc: "Freestyle Shoot",
  },
  {
    src: "https://i.ibb.co/qB4MR7Z/IMG-9014.jpg",
    alt: "Image 5",
    title: "Men in Black",
    desc: "Freestyle Shoot",
  },
  {
    src: "https://i.ibb.co/Dbg3Fhb/IMG-8651.jpg",
    alt: "Image 6",
    title: "Men in Black",
    desc: "Freestyle Shoot",
  },
  {
    src: "https://i.ibb.co/bdN8k2m/IMG-5388.jpg",
    alt: "Image 7",
    title: "Men in Black",
    desc: "Freestyle Shoot",
  },
  {
    src: "https://i.ibb.co/KLJ3zmb/IMG-5059.jpg",
    alt: "Image 8",
    title: "Men in Black",
    desc: "Freestyle Shoot",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="p-5 md:p-10 mt-16">
      <h1 className="text-center font-gallient text-5xl mb-8">
        Recent Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {images.map((image, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div className="w-full h-64 relative">
              <Image
                className="h-full w-full object-cover object-top rounded-lg"
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
                quality={40}
              />
            </div>
            <h2 className="font-satoshi font-bold mt-4 text-xl text-center">
              {image.title}
            </h2>
            <p className="text-[#606060] text-[16px] text-center mt-2">
              {image.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
