/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apex-bg': '#050a14',
        'apex-navy': '#0a1628',
        'apex-card': '#0d1f3c',
        'apex-elevated': '#112244',
        'apex-cyan': '#00d4ff',
        'apex-cyan-dim': '#00b8d9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
