/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF7F0',
        'warm-white': '#FDFAF3',
        charcoal: '#1E1E1E',
        'deep-bronze': '#3D3226',
        gold: '#C8A96E',
        'gold-light': '#E0CFA8',
        'gold-dark': '#A68B4B',
        taupe: '#8B7D6B',
        sand: '#F0EAE0',
        'soft-black': '#2C2C2C',
        'dusty-rose': '#C4A5A1',
      },
      fontFamily: {
        serif: ["'Playfair Display'", 'Georgia', 'serif'],
        sans: ["'Inter'", 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
      },
    },
  },
  plugins: [],
}
