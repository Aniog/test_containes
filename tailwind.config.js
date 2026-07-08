/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			serif: [
  				'Cormorant Garamond',
  				'Georgia',
  				'serif'
  			],
  			sans: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		colors: {
  			brand: {
  				bg: '#F6F3EE',
  				surface: '#FFFFFF',
  				ink: '#1C1917',
  				muted: '#78716C',
  				subtle: '#A8A29E',
  				divider: '#E7E5E4',
  				accent: '#B45309',
  				accentHover: '#92400E',
  				warm: '#F5F0E8',
  				gold: '#C9A96E',
  				goldLight: '#E6D5B8'
  			}
  		},
  		letterSpacing: {
  			widest: '.18em'
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
