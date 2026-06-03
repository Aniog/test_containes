/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmos-bg': '#050d14',
        'cosmos-surface': '#0a1628',
        'cosmos-surface-2': '#0f2040',
        'cosmos-border': '#1a3a5c',
        'cosmos-teal': '#00d4c8',
        'cosmos-cyan': '#22d3ee',
        'cosmos-emerald': '#10b981',
        'cosmos-violet': '#7c3aed',
        'cosmos-amber': '#f59e0b',
        'cosmos-text': '#e2f0ff',
        'cosmos-muted': '#7a9bbf',
        'cosmos-dim': '#3d6080',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
