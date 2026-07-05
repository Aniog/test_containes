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
  			sans: ['Inter', 'system-ui', 'sans-serif'],
  			serif: ['Cormorant Garamond', 'Georgia', 'serif'],
  		},
  		colors: {
  			velmora: {
  				ink: '#1c1917',
  				cream: '#f7f3ed',
  				sand: '#ede7de',
  				gold: '#b48a4a',
  				goldDark: '#8f6b35',
  				espresso: '#3e3630',
  				taupe: '#8c8179',
  				pearl: '#faf8f5',
  			},
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			'fade-in': {
  				from: { opacity: '0', transform: 'translateY(12px)' },
  				to: { opacity: '1', transform: 'translateY(0)' }
  			},
  			'slide-in-right': {
  				from: { transform: 'translateX(100%)' },
  				to: { transform: 'translateX(0)' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in': 'fade-in 0.6s ease-out forwards',
  			'slide-in-right': 'slide-in-right 0.3s ease-out'
  		}
  	}
  },
  plugins: [],
}
