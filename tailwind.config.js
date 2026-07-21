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
          50: '#f9f7f4',
          100: '#f0ebe3',
          200: '#e2d6c5',
          300: '#d0bfa1',
          400: '#bfa078',
          500: '#b08d5f',
          600: '#a37a4f',
          700: '#886242',
          800: '#70513a',
          900: '#5c4331',
          950: '#312219',
        },
        ink: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#1a1a1a',
        },
        paper: '#faf8f5',
        champagne: '#c8a97e',
        border: '#ddd6cc',
        input: '#ddd6cc',
        ring: '#b08d5f',
        background: '#faf8f5',
        foreground: '#1a1a1a',
        primary: {
          DEFAULT: '#a37a4f',
          foreground: '#faf8f5',
        },
        secondary: {
          DEFAULT: '#f0ebe3',
          foreground: '#1a1a1a',
        },
        muted: {
          DEFAULT: '#f0ebe3',
          foreground: '#6d6d6d',
        },
        accent: {
          DEFAULT: '#f0ebe3',
          foreground: '#1a1a1a',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#faf8f5',
        },
        card: {
          DEFAULT: '#faf8f5',
          foreground: '#1a1a1a',
        },
        popover: {
          DEFAULT: '#faf8f5',
          foreground: '#1a1a1a',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
