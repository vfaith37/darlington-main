import React from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const _Portfolio: React.FC = () => {
  const images = [
    {
      src: "https://i.ibb.co/54V9w6z/IMG-8783r.png",
    },
    {
      src: "https://i.ibb.co/5MZ6Hgm/IMG-8766r.jpg",
    },
    {
      src: "https://i.ibb.co/GWD3GwT/IMG-8783.jpg",
    },
    {
      src: "https://i.ibb.co/qB4MR7Z/IMG-9014.jpg",
    },
    {
      src: "https://i.ibb.co/XJfgd0M/IMG-8498.jpg",
    },
    {
      src: "https://i.ibb.co/GWD3GwT/IMG-8783.jpg",
    },
    {
      src: "https://i.ibb.co/qB4MR7Z/IMG-9014.jpg",
    },
    {
      src: "https://i.ibb.co/XJfgd0M/IMG-8498.jpg",
    },
  ];

  return (
    <div className="p-5 mt-16 lg:pb-[7rem]">
      <h1 className="text-center font-gallient text-5xl mb-4">Portfolio</h1>
      {/* <div className="p-5 md:p-10 mt-16"> */}
      {/* <div className="grid grid-cols-masonry gap-5 lg:gap-8">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Masonry item ${index + 1}`}
            className={`${image.colSpan} ${image.rowSpan} w-full h-auto object-cover`}
          />
        ))}
      </div> */}
      {/* </div> */}
      <ParallaxScroll images={images.map((el) => el.src)} />
    </div>
  );
};

export default _Portfolio;
