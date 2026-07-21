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
          navy: '#0d1526',
          card: '#111d35',
          teal: '#00d4aa',
          cyan: '#00b4d8',
          purple: '#8b5cf6',
          glow: '#00ffd5',
          light: '#e8f4f8',
          muted: '#7a9bb5',
          border: '#1e3a5f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-teal': '0 0 30px rgba(0, 212, 170, 0.2)',
        'glow-cyan': '0 0 30px rgba(0, 180, 216, 0.2)',
        'glow-sm': '0 0 15px rgba(0, 212, 170, 0.15)',
      },
    },
  },
  plugins: [],
}
