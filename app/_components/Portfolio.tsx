import React from 'react';

const _Portfolio: React.FC = () => {
  const images: { src: string, colSpan?: string, rowSpan?: string }[] = [
    { src: "https://i.ibb.co/54V9w6z/IMG-8783r.png", colSpan: 'col-span-2', rowSpan: 'row-span-2' },
    { src: "https://i.ibb.co/5MZ6Hgm/IMG-8766r.jpg", colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    { src: "https://i.ibb.co/GWD3GwT/IMG-8783.jpg", colSpan: 'col-span-1', rowSpan: 'row-span-2' },
    { src: "https://i.ibb.co/qB4MR7Z/IMG-9014.jpg", colSpan: 'col-span-2', rowSpan: 'row-span-1' },
    { src: "https://i.ibb.co/XJfgd0M/IMG-8498.jpg", colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  ];

  return (
    <div className="p-5 md:p-10 mt-16">
      <h1 className='text-center font-gallient text-5xl mb-8'>Portfolio</h1>
      <div className="grid grid-cols-masonry gap-5 lg:gap-8">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Masonry item ${index + 1}`}
            className={`${image.colSpan} ${image.rowSpan} w-full h-auto object-cover`}
          />
        ))}
      </div>
    </div>
  );
};

export default _Portfolio;
