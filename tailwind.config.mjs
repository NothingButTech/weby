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
				'clr-bg-primary': '#10151D',
				'clr-bg-secondary': '#161E29',
				'clr-border-primary': '#161e29',
				'clr-border-secondary': '#2E3C51',
				'clr-text-primary': 'rgb(191 199 210)',
				'clr-text-secondary': 'rgb(128 140 156)'
			}
		}
	},
	plugins: []
}
