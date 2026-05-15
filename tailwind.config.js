/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#090D16',
        charcoal: '#121824',
        'card-dark': '#0E1520',
        subtle: '#1E2A3A',
        'bio-green': '#10B981',
        'bio-cyan': '#06B6D4',
        'bio-orange': '#F97316',
        'primary-text': '#E8EDF5',
        'secondary-text': '#8A9BB0',
        'muted-text': '#4A5568',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 30px rgba(16,185,129,0.15)',
        'glow-cyan': '0 0 30px rgba(6,182,212,0.15)',
        'glow-orange': '0 0 30px rgba(249,115,22,0.15)',
        'glow-green-lg': '0 0 60px rgba(16,185,129,0.2)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(30,42,58,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30,42,58,0.4) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-sm': '40px 40px',
      },
    },
  },
  plugins: [],
}
