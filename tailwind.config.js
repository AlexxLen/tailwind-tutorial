/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html'],
	theme: {
		extend: {
			gridTemplateRows: {
				layout: 'auto 1fr auto',
			},
			colors: {
				'logo-main': '#ff0066',
			},
			fontFamily: {
				main: ['Montserrat'],
			},
		},
	},
	plugins: [],
};
