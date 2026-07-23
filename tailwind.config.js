/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#171315',
        parchment: '#f6f0ea',
        surface: '#fbf8f4',
        espresso: '#2e2325',
        gold: '#b8925e',
        mist: '#e9dfd2',
        muted: '#7c6a61',
        line: '#d9c8b8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        soft: '0 24px 60px rgba(23, 19, 21, 0.08)',
        luxe: '0 30px 80px rgba(23, 19, 21, 0.18)',
      },
      letterSpacing: {
        luxe: '0.28em',
        button: '0.18em',
        eyebrow: '0.32em',
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(90deg, rgba(23, 19, 21, 0.82) 0%, rgba(23, 19, 21, 0.45) 42%, rgba(23, 19, 21, 0.12) 100%)',
      },
    },
  },
  plugins: [],
}
