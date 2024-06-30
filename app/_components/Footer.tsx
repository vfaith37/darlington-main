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
		<footer className='flex items-center flex-col pt-12 bg-[#F4F4F4] text-black w-full'>
			<div className='flex flex-col md:flex-row gap-9 justify-between sm:px-5 w-full px-8'>
				<div>
					<h1 className='font-bold'>NEWSLETTER</h1>
					<p className="font-light text-[#606060]">Never miss out on any update from my website.</p>
					<p className="font-light text-[#606060]">Subscribe to get exciting updates</p>
					<h1 className='font-bold'>EMAIL</h1>
					<form onSubmit={handleSubmit} className="">
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
						/>
						<button type="submit" className="mt-4 w-full bg-black font-bold text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
							Subscribe
						</button>
					</form>
				</div>
				<div className='flex flex-col items-center'>
					<h1 className='font-bold'>SOCIAL MEDIA</h1>
					<p className='font-light text-[#606060]'>Instagram</p>
					<p className="font-light text-[#606060]">Facebook</p>
					<p className="font-light text-[#606060]">Twitter (X)</p>
					<p className="font-light text-[#606060]">Youtube</p>
				</div>
				<div className='flex flex-col items-center sm:items-start'>
					<h1 className='font-bold'>AGENT MANAGERS</h1>
					<p className="font-medium text-[#606060]">Music Manager:<span className="font-light text-[#606060]"> Mr Kels | Tel</span></p>
					<p className="font-medium text-[#606060]">Social Manager:<span className="font-light text-[#606060]"> Francis Richard | Tel</span></p>
					<p className="font-medium text-[#606060]">General Manager:<span className="font-light text-[#606060]"> Neveen Dominic | Tel</span></p>
				</div>
				<div className='hidden sm:flex sm:flex-col sm:items-center sm:items-start'>
		<h1 className='font-bold'>OTHER USEFUL LINKS</h1>
			<p className="font-light text-[#606060]">Brandon Williams.</p>
			<p className="font-light text-[#606060]">Abido Shaker</p>
			<p className="font-light text-[#606060]">Abido Shaker</p>
			<p className="font-light text-[#606060]">Abido Shaker</p>
			</div>
			</div>
			<div className="w-[90%] h-px bg-gray-300 mb-2 mt-8" />
			<p className='self-center mb-8'>&copy; {currentYear} | Created by EVOCREATIVES.</p>
		</footer>
	)
}

export default Footer
