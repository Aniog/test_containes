/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1f1917',
        espresso: '#2b211d',
        truffle: '#5e4d40',
        ivory: '#f7f1ea',
        shell: '#efe6db',
        mist: '#dbcdbd',
        champagne: '#b8925c',
        brass: '#8d6c3d',
        glow: '#fffaf4',
        pine: '#2a3a33',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.32em',
        editorial: '0.18em',
      },
      aspectRatio: {
        product: '4 / 5',
        portrait: '9 / 16',
        editorial: '3 / 2',
      },
      boxShadow: {
        whisper: '0 18px 40px -26px rgba(31, 25, 23, 0.22)',
        velvet: '0 32px 90px -46px rgba(31, 25, 23, 0.38)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
