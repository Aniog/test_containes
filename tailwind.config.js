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
  			velmora: {
  				gold: {
  					'50': '#faf3e6',
  					'100': '#f5e6cc',
  					'200': '#e6cc99',
  					'300': '#d4a574',
  					'400': '#c9995e',
  					'500': '#b8864a',
  					'600': '#a0703a',
  					'700': '#8a5c30',
  					'800': '#73502a',
  					'900': '#5d4323'
  				},
  				charcoal: {
  					'50': '#f5f5f5',
  					'100': '#e5e5e5',
  					'200': '#cccccc',
  					'300': '#a3a3a3',
  					'400': '#808080',
  					'500': '#666666',
  					'600': '#4d4d4d',
  					'700': '#333333',
  					'800': '#1a1a1a',
  					'900': '#0d0d0d'
  				},
  				cream: {
  					'50': '#fffcf9',
  					'100': '#fff9f0',
  					'200': '#fff5e6',
  					'300': '#fff0d9',
  					'400': '#ffecc2',
  					'500': '#faf8f5'
  				}
  			}
  		},
  		fontFamily: {
  			serif: [
  				'Cormorant Garamond',
  				'Playfair Display',
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
  			widest: '.2em'
  		},
  		boxShadow: {
  			soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
  			'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
  			gold: '0 4px 20px -2px rgba(212, 165, 116, 0.3)'
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.6s ease-out',
  			'slide-up': 'slideUp 0.6s ease-out',
  			'scale-in': 'scaleIn 0.4s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			scaleIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'scale(0.95)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'scale(1)'
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
  		}
  	}
  },
  plugins: [],
}
