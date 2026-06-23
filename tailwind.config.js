/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmos: {
          dark: '#050a14',
          navy: '#0d1b2e',
          card: '#0f2035',
          teal: '#00d4c8',
          cyan: '#38bdf8',
          purple: '#a855f7',
          glow: '#00ffd5',
          text: '#f0f8ff',
          muted: '#7ea8c4',
          border: '#1a3a5c',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'cosmos-gradient': 'linear-gradient(135deg, #050a14 0%, #0d1b2e 50%, #050a14 100%)',
        'teal-glow': 'radial-gradient(ellipse at center, rgba(0,212,200,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'cosmos-glow': '0 0 30px rgba(0,212,200,0.15)',
        'cosmos-glow-lg': '0 0 60px rgba(0,212,200,0.2)',
      },
    },
  },
  plugins: [],
}
