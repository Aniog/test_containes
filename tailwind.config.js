/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1f171c',
        porcelain: '#f7f2ec',
        sand: '#ede3d7',
        sandDeep: '#cfbfad',
        champagne: '#c6a26c',
        champagneInk: '#2b2117',
        rosewood: '#755560',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(31, 23, 28, 0.08)',
        card: '0 18px 30px rgba(31, 23, 28, 0.06)',
      },
      letterSpacing: {
        eyebrow: '0.28em',
        luxe: '0.32em',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backgroundImage: {
        'hero-fade': 'linear-gradient(180deg, rgba(15, 11, 14, 0.18) 0%, rgba(15, 11, 14, 0.52) 58%, rgba(15, 11, 14, 0.72) 100%)',
      },
    },
  },
  plugins: [],
}
