/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#1a1715',
        ink: '#2a221d',
        porcelain: '#f7f2eb',
        ivory: '#fdf9f3',
        champagne: '#b89a69',
        sand: '#efe5d8',
        mist: '#d9cdbd',
        sage: '#7a8571',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(42, 34, 29, 0.08)',
        card: '0 10px 28px rgba(42, 34, 29, 0.06)',
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      backgroundImage: {
        'hero-fade': 'linear-gradient(180deg, rgba(26, 23, 21, 0.18) 0%, rgba(26, 23, 21, 0.72) 100%)',
      },
    },
  },
  plugins: [],
}
