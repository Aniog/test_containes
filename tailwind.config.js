/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'velmora-stone': '#F9F7F2',
  			'velmora-gold': '#C5A059',
  			'velmora-dark': '#1A1A1A',
  			'velmora-muted': '#8E8E8E',
  			'velmora-border': '#E5E5E5'
  		},
  		fontFamily: {
  			serif: [
  				'Cormorant Garamond',
  				'serif'
  			],
  			sans: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		letterSpacing: {
  			exclusive: '0.15em'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [],
}
