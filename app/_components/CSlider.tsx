"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { images, ImageData } from './images'; // Assuming you have the images array in a separate file

const CoffeeSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container mx-auto py-8">
      {/* <div className="relative overflow-hidden" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <div className="flex justify-center items-center transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((image: ImageData, index: number) => (
            <div
              key={image.id}
              className={`flex-none transition-transform duration-500 ${index === currentSlide ? 'w-[678px] h-[437px]' : 'w-[293px] h-[347px]'} ${index === currentSlide ? 'transform scale-100 z-10' : 'transform scale-90'}`}
              style={{ margin: '0 10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <div className={`relative ${index === currentSlide ? 'w-[678px] h-[437px]' : 'w-[293px] h-[347px]'} transition-transform duration-500`}>
                <Image src={image.src} alt={image.title} layout="fill" objectFit="cover" className="mx-auto" />
                <div className="bg-white shadow-lg p-4 mt-2">
                  <h2 className="text-xl font-bold">{image.title}</h2>
                  <p className="text-gray-600">{image.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          &#8592;
        </button>
        <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          &#8594;
        </button>
      </div> */}
      <div className="p-5 md:p-10">
  <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
    <img src="https://source.unsplash.com/ztpUS4N1xhY" alt="" />
    <img src="https://source.unsplash.com/mPFSPqZOO7s" alt="" />
    <img src="https://source.unsplash.com/uPEnxrdSKIw" alt="" />
    <img src="https://source.unsplash.com/hFKZ5-OT9Ys" alt="" />
    <img src="https://source.unsplash.com/xoTt2fjs7d0" alt="" />
    <img src="https://source.unsplash.com/Vc2dD4l57og" alt="" />
    <img src="https://source.unsplash.com/hqnQWmIt3cY" alt="" />
    <img src="https://source.unsplash.com/NTGg2rtWDwg" alt="" />
    <img src="https://source.unsplash.com/uyX3qAQhZVA" alt="" />
    <img src="https://source.unsplash.com/LV-NvIcA-Gg" alt="" />
    <img src="https://source.unsplash.com/0qnRfgnZIsI" alt="" />
    <img src="https://source.unsplash.com/mpwF3Mv2UaU" alt="" />
    <img src="https://source.unsplash.com/gfMWhkDCwYM" alt="" />
    <img src="https://source.unsplash.com/8KtqjrskUg8" alt="" />
    <img src="https://source.unsplash.com/qAaGXj-AOv4" alt="" />
  </div>
</div>

    </div>
  );
};

export default CoffeeSlider;
