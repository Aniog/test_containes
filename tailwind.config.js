/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#171717',
        ink: '#2a2622',
        ivory: '#f7f2eb',
        sand: '#ede3d6',
        champagne: '#d8b980',
        bronze: '#8c6a39',
        mist: '#d9cfc2',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        brand: '0.24em',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(23, 23, 23, 0.08)',
        panel: '0 18px 40px rgba(23, 23, 23, 0.12)',
      },
      backgroundImage: {
        'velmora-glow': 'linear-gradient(180deg, rgba(23, 23, 23, 0.1) 0%, rgba(23, 23, 23, 0.72) 100%)',
      },
    },
  },
  plugins: [],
}
