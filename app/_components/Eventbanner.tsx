import React from 'react';

const Eventbanner: React.FC = () => {
	return (
		<div className="hidden md:flex p-5 md:p-10 border flex-col relative">
			<img src="https://i.ibb.co/PcP1qm0/banner.png" alt="banner" className="w-full h-full z-0 absolute top-0 left-0" />
			<div className="flex flex-col z-10 items-end">
				<h1 className="font-gallient lg:text-5xl md:text-3xl">Event Banner Goes Here</h1>
				<p className='text-2xl font-satoshi font-light mt-4 mb-5'>Event description also goes here</p>
				<p className='font-satoshi text-xs font-medium'>CTA Action Here <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"> 
&rarr; </span></p>
	</div>
	</div>
	);
};

export default Eventbanner;
