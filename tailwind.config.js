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
          dark: '#0a0a0a',
          navy: '#111111',
          card: '#1a1a1a',
          teal: '#ffffff',
          cyan: '#e2e8f0',
          purple: '#94a3b8',
          glow: '#ffffff',
          text: '#f8fafc',
          muted: '#64748b',
          border: '#2d2d2d',
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
