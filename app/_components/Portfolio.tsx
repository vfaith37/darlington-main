import React from 'react'

const _Portfolio: React.FC = () => {
	const images: string[] = [
		"https://img.freepik.com/premium-photo/fun-party-with-dj_23-2151108189.jpg?size=626&ext=jpg&ga=GA1.1.2094443500.1708599870",
		"https://img.freepik.com/free-photo/group-afro-americans-working-together_1303-8977.jpg?ga=GA1.1.2094443500.1708599870&semt=sph",
		"https://img.freepik.com/premium-photo/portrait-happy-young-casual-man-standing_171337-29744.jpg?ga=GA1.1.2094443500.1708599870&semt=sph",
		"https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?ga=GA1.1.2094443500.1708599870&semt=sph",
		"https://img.freepik.com/premium-photo/group-people-connected-by-network-generative-ai_97167-3834.jpg?ga=GA1.1.2094443500.1708599870&semt=sph",
		"https://img.freepik.com/premium-photo/fun-party-with-dj_23-2151108189.jpg?size=626&ext=jpg&ga=GA1.1.2094443500.1708599870",
		"https://img.freepik.com/free-photo/group-afro-americans-working-together_1303-8977.jpg?ga=GA1.1.2094443500.1708599870&semt=sph",
		"https://img.freepik.com/premium-photo/group-people-connected-by-network-generative-ai_97167-3834.jpg?ga=GA1.1.2094443500.1708599870&semt=sph",
		"https://img.freepik.com/premium-photo/portrait-happy-young-casual-man-standing_171337-29744.jpg?ga=GA1.1.2094443500.1708599870&semt=sph",
		"https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?ga=GA1.1.2094443500.1708599870&semt=sph",
		"https://img.freepik.com/premium-photo/fun-party-with-dj_23-2151108189.jpg?size=626&ext=jpg&ga=GA1.1.2094443500.1708599870",
		"https://img.freepik.com/free-photo/group-afro-americans-working-together_1303-8977.jpg?ga=GA1.1.2094443500.1708599870&semt=sph",
		"https://img.freepik.com/premium-photo/group-people-connected-by-network-generative-ai_97167-3834.jpg?ga=GA1.1.2094443500.1708599870&semt=sph",
		"https://img.freepik.com/premium-photo/portrait-happy-young-casual-man-standing_171337-29744.jpg?ga=GA1.1.2094443500.1708599870&semt=sph",
		"https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?ga=GA1.1.2094443500.1708599870&semt=sph",

	];
	return (
		<div className="p-5 md:p-10">
			<h1>Portfolio</h1>
		<div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
			{images.map((src, index) => (
				<img key={index} src={src} alt={`Masonry item ${index + 1}`} />
			))}
		</div>
	</div>
	)
}

export default _Portfolio
