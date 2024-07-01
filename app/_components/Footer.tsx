"use client";

import React, { useState } from 'react'
const currentYear = new Date().getFullYear();

const Footer = () => {
	const [email, setEmail] = useState<string>('');

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		// Handle the form submission
		console.log('Email submitted:', email);
	};

	return (
		<footer className='flex flex-col pt-12 bg-[#F4F4F4] text-black w-full'>
			<div className='flex flex-col lg:flex-row gap-9 lg:gap-1 xl:gap-9 sm:px-5 px-8 self-center'>
				<div className='px-2'>
					<h1 className='font-bold text-[16px] mb-4'>NEWSLETTER</h1>
					<p className="font-light text-[#606060] text-[14px] mb-2">Never miss out on any update from my website.</p>
					<p className="font-light text-[#606060] text-[14px] mb-4">Subscribe to get exciting updates</p>
					<h1 className='font-bold text-[16px] mb-2'>EMAIL</h1>
					<form onSubmit={handleSubmit} className="">
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							placeholder='name@email.com'
							className="mt-1 block w-full px-3 py-2 border bg-transparent border-gray-300 rounded-md placeholder-[#606060] focus:outline-none focus:ring-black focus:border-black sm:text-sm"
						/>
						<button type="submit" className="mt-4 w-full bg-black font-bold text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
							Subscribe
						</button>
					</form>
				</div>
				<div className='flex flex-col items-center lg:items-start px-2'>
					<h1 className='font-bold text-[16px] mb-4'>SOCIAL MEDIA</h1>
					<p className="font-light text-[#606060] text-[14px] mb-2">Instagram</p>
					<p className="font-light text-[#606060] text-[14px] mb-2">Facebook</p>
					<p className="font-light text-[#606060] text-[14px] mb-2">Twitter (X)</p>
					<p className="font-light text-[#606060] text-[14px]">Youtube</p>
				</div>
				<div className='flex flex-col items-center lg:items-start'>
					<h1 className='font-bold text-[16px] mb-4'>AGENT MANAGERS</h1>
					<p className="font-medium text-[#606060] mb-2">Music Manager:<span className="font-light text-[#606060] text-[14px] mb-2"> Mr Kels | Tel</span></p>
					<p className="font-medium text-[#606060] mb-2">Social Manager:<span className="font-light text-[#606060] text-[14px] mb-2"> Francis Richard | Tel</span></p>
					<p className="font-medium text-[#606060]">General Manager:<span className="font-light text-[#606060] text-[14px] mb-2"> Neveen Dominic | Tel</span></p>
				</div>
				<div className='hidden sm:hidden lg:flex sm:flex-col sm:items-center lg:items-start px-2'>
		<h1 className='font-bold text-[16px] mb-4'>OTHER USEFUL LINKS</h1>
			<p className="font-light text-[#606060] text-[14px] mb-2">Brandon Williams.</p>
			<p className="font-light text-[#606060] text-[14px] mb-2">Abido Shaker</p>
			<p className="font-light text-[#606060] text-[14px] mb-2">Abido Shaker</p>
			<p className="font-light text-[#606060] text-[14px]">Abido Shaker</p>
			</div>
			</div>
			<div className="w-[90%] h-px bg-gray-300 mb-2 mt-8" />
			<p className='self-center mb-8'>&copy; {currentYear} | Created by EVOCREATIVES.</p>
		</footer>
	)
}

export default Footer
