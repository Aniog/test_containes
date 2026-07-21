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
        'bright-gold': '#D4BA7A',
        'cream': '#F5F0E8',
        'ivory': '#FAF7F2',
        'warm-white': '#FFFDF9',
        'soft-white': '#F0EBE3',
        'warm-gray': '#8A8279',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
