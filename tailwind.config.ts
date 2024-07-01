import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			backgroundColor: {
				'black-transparent': 'rgba(0, 0, 0, 0.114)',
				'white-transparent': 'rgba(253, 253, 253, 0.9)',
			},
			fontFamily: {
				gallient: ['Gallient', 'sans-serif'],
				satoshi: ['Satoshi', 'sans-serif'],
					},
					gridTemplateColumns: {
				'masonry': 'repeat(auto-fill, minmax(200px, 1fr))',
					},
					spacing: {
				'5': '1.25rem',
				'8': '2rem',
					}
		},
	},
	variants: {
		extend: {
		  gridColumn: ['responsive'],
		  gridRow: ['responsive'],
		},
	  },
	plugins: [],
};
export default config;
