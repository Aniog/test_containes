/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'true-black': '#000000',
        'space-violet': '#7c3aed',
        'space-indigo': '#6366f1',
        'star-gold': '#f0c060',
        'nebula-pink': '#e879f9',
        'nebula-blue': '#38bdf8',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'ken-burns': 'kenBurns 24s ease-in-out infinite',
      },
      keyframes: {
        kenBurns: {
          '0%':   { transform: 'scale(1) translate(0, 0)' },
          '50%':  { transform: 'scale(1.12) translate(-1.5%, -1%)' },
          '100%': { transform: 'scale(1) translate(0, 0)' },
        },
      },
    },
  },
  plugins: [],
}
