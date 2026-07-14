/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ivory: '#f6f1ea',
          latte: '#ece3d8',
          gold: '#c7a76c',
          espresso: '#241d1b',
          mocha: '#6e5d54',
          ink: '#1d1815',
          line: '#dbcfc2',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        velmora: '0 24px 80px rgba(36, 29, 27, 0.08)',
        'velmora-card': '0 18px 50px rgba(36, 29, 27, 0.08)',
        'velmora-hover': '0 26px 70px rgba(36, 29, 27, 0.14)',
      },
    },
  },
  plugins: [],
}
