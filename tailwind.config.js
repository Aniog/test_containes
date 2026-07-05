/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-black': '#1A1714',
        'deep-brown': '#2A2520',
        'warm-charcoal': '#3D3630',
        'muted-gold': '#C4A868',
        'bright-gold': '#D4B87A',
        'cream': '#F5F0E8',
        'ivory': '#FAF7F2',
        'warm-white': '#FFFDF9',
        'text-primary': '#1A1714',
        'text-secondary': '#6B6158',
        'text-light': '#F5F0E8',
        'text-muted': '#9B9189',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'wide-product': '0.15em',
      },
    },
  },
  plugins: [],
}
