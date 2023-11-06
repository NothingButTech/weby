/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// gridTemplateColumns: {
			// 	layout: '300px minmax(600px, 1fr) 200px'
			// },
			fontFamily: {
				'sans-serif': ['Space Mono', 'sans-serif'],
				logo: ['Major Mono Display', 'sans-serif']
			},
			colors: {
				'regal-blue': '#243c5a',
				'bg-primary': '#15171B',
				'bg-secondary': '#1D1E26'
			}
		}
	},
	plugins: []
}
