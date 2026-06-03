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
          bg: '#050a0f',
          navy: '#0a1628',
          card: '#0d1f35',
          cyan: '#00d4ff',
          teal: '#00b4a0',
          neon: '#39ff14',
          text: '#f0f8ff',
          muted: '#8ab4c8',
          dim: '#4a6a7a',
          border: '#1a3a4a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(0,212,255,0.15)',
        'glow-cyan-lg': '0 0 50px rgba(0,212,255,0.25)',
        'glow-teal': '0 0 30px rgba(0,180,160,0.2)',
      },
    },
  },
  plugins: [],
}
