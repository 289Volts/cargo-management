/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				workSans: ["Work Sans", "sans-serif"],
				playfair: ["Playfair Display", "serif"],
				jarkata: ["Plus Jakarta Sans", "sans-serif"],
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
