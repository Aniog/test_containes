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
  			brand: {
  				bg: '#F6F3EE',
  				surface: '#FFFFFF',
  				ink: '#1C1917',
  				muted: '#78716C',
  				subtle: '#A8A29E',
  				line: '#E7E5E4',
  				accent: '#B45309',
  				accentHover: '#92400E',
  				warm: '#F5F0E8',
  				gold: '#C9A96E',
  				goldLight: '#E5D5B8'
  			}
  		},
  		fontFamily: {
  			serif: [
  				'Cormorant Garamond',
  				'Georgia',
  				'serif'
  			],
  			sans: [
  				'Inter',
  				'Manrope',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		letterSpacing: {
  			widest: '0.25em'
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
