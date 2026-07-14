/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  	extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        border: "#E8E6E1",
        input: "#E8E6E1",
        ring: "#9E7746",
        background: "#FAFAF8",
        foreground: "#1A1818",
        primary: {
          DEFAULT: "#9E7746",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F2EBE1",
          foreground: "#1A1818",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#E8E6E1",
          foreground: "#6B6865",
        },
        accent: {
          DEFAULT: "#F2EBE1",
          foreground: "#1A1818",
        },
        popover: {
          DEFAULT: "#FAFAF8",
          foreground: "#1A1818",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1818",
        },
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
