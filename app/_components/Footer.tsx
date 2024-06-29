import React from 'react'
const currentYear = new Date().getFullYear();
const Footer = () => {
	return (
		<footer className='flex items-center flex-col pt-12 bg-[#F4F4F4] text-black w-full'>
			<div className='flex flex-col md:flex-row gap-9 justify-between'>
			<div>
				<h1>NEWSLETTER</h1>
				<p>Never miss out on any update from my website.</p>
				<p>Subscribe to get exciting updates</p>
				<h1>EMAIL</h1>
				<h1>Subscribe</h1>
				{/* <input type="email" /> */}
				{/* <input type="email" /> */}
				{/* <input type="button" value="submit" /> */}
				{/* <input type="button" value="submit" /> */}
			</div>
			<div className='flex flex-col items-center'>
				<h1 className=''>SOCIAL MEDIA</h1>
				<p className=''>Instagram</p>
				<p>Facebook</p>
				<p>Twitter (X)</p>
				<p>Youtube</p>
			</div>
			<div className='flex flex-col items-center sm:items-start'>
				<h1>AGENT MANAGERS</h1>
				<p>Music Manager:<span> Mr Kels | Tel</span></p>
				<p>Social Manager:<span> Francis Richard | Tel</span></p>
				<p>General Manager:<span> Neveen Dominic | Tel</span></p>
			</div>
			<div>
				<h1>OTHER USEFUL LINKS</h1>
				<p>Brandon Williams.</p>
				<p>Abido Shaker</p>
				<h1>Dabush Kabash</h1>
				<h1>Dabush Kabash</h1>
				{/* <input type="email" /> */}
				{/* <input type="email" /> */}
				{/* <input type="button" value="submit" /> */}
				{/* <input type="button" value="submit" /> */}
			</div>
			</div>
			<div className="w-[90%] h-px bg-gray-300 mb-2 mt-8" />
			<p className='self-center mb-8'>&copy; {currentYear} | Created by EVOCREATIVES.</p>
			</footer> 

	)
}

export default Footer
