/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				workSans: ["Work Sans", "sans-serif"],
				playfair: ["Playfair Display", "serif"],
				jarkata: ["Plus Jakarta Sans", "sans-serif"],
			},
			backgroundColor: {
				brandPrimary: "#E65503",
				brandSecondary: "#0A1240",
				brandSecondaryDeep: "#060B26",
			},
			colors: {
				textColor: "#555555",
				headings: "#0A1240",
				brandPrimary: "#E65503",
			}
		},
	},
	plugins: [],
};
