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
        background: "#FDFBF7",
        foreground: "#2A2A2A",
        brand: {
          gold: "#C4A052",
          black: "#1A1A1A",
          charcoal: "#2A2A2A",
          muted: "#8C8C8C",
          border: "#E5E5E5",
        }
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'Inter'", "sans-serif"],
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
  plugins: [require("tailwindcss-animate")],
}
