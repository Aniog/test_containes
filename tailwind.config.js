/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6', // Off-white/Alabaster for a premium feel
        foreground: '#1A1A1A',
        primary: {
          DEFAULT: '#8C7E6A', // Warm Taupe / Muted Gold accent
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F4F1ED', // Very light beige
          foreground: '#1A1A1A',
        },
        accent: {
          DEFAULT: '#D4AF37', // Metallic Gold
          foreground: '#1A1A1A',
        },
        muted: {
          DEFAULT: '#E5E5E5',
          foreground: '#737373',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
      },
    },
  },
  plugins: [],
}
