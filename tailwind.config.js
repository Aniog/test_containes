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
  			background: '#FAF9F6',
  			foreground: '#2A2926',
  			primary: {
  				DEFAULT: '#B89A6A',
  				foreground: '#FFFFFF'
  			},
  			secondary: {
  				DEFAULT: '#E3DFD5',
  				foreground: '#2A2926'
  			},
  			muted: {
  				DEFAULT: '#F2F0EB',
  				foreground: '#6E6B65'
  			},
  			accent: {
  				DEFAULT: '#4A5043',
  				foreground: '#FFFFFF'
  			},
  			border: '#E8E5DD'
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'sans-serif'
  			],
  			serif: [
  				'"Cormorant Garamond"',
  				'serif'
  			]
  		},
  		letterSpacing: {
  			widest: '.2em'
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
