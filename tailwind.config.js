/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        velmora: {
          espresso: '#241914',
          ink: '#3A2B24',
          ivory: '#F8F2EA',
          porcelain: '#FFFDF8',
          champagne: '#E8D8C5',
          gold: '#B8894D',
          deepgold: '#8B6333',
          clay: '#C9A08A',
        },
      },
      boxShadow: {
        velvet: '0 24px 70px rgba(36, 25, 20, 0.14)',
        glint: '0 14px 36px rgba(184, 137, 77, 0.18)',
      },
      letterSpacing: {
        luxury: '0.22em',
      },
    },
  },
  plugins: [],
}
