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
  			cream: '#FAF7F1',
  			ivory: '#F4EFE6',
  			sand: '#E9E1D3',
  			ink: '#211B14',
  			espresso: '#4A3F33',
  			taupe: '#8A7C6B',
  			gold: '#A6792E',
  			'gold-deep': '#8A6420',
  			'gold-soft': '#EFE4CE'
  		},
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
  		letterSpacing: {
  			widest2: '0.25em'
  		},
  		keyframes: {
  			'fade-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(24px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
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
  			'fade-up': 'fade-up 0.8s ease-out both',
  			'fade-in': 'fade-in 0.6s ease-out both',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [],
}
