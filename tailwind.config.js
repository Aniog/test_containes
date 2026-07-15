/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velmora: {
          obsidian: '#1c1716',
          ivory: '#f7f2ea',
          porcelain: '#efe7dd',
          ink: '#241d1a',
          taupe: '#7f7068',
          mist: '#d8cbbd',
          gold: '#c9a56a',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.32em',
        product: '0.22em',
      },
      borderRadius: {
        luxe: '2rem',
        'luxe-xl': '2.5rem',
      },
      boxShadow: {
        velmora: '0 18px 60px rgba(36, 29, 26, 0.12)',
      },
      spacing: {
        112: '28rem',
        120: '30rem',
      },
    },
  },
  plugins: [],
}
