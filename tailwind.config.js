/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmos-bg': '#050d1a',
        'cosmos-card': '#0f1f38',
        'cosmos-cyan': '#00d4ff',
        'cosmos-violet': '#7c3aed',
        'cosmos-emerald': '#10b981',
        'cosmos-text': '#f0f6ff',
        'cosmos-muted': '#94a3b8',
        'cosmos-border': '#1e3a5f',
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(0,212,255,0.15)',
        'glow-violet': '0 0 30px rgba(124,58,237,0.15)',
        'glow-cyan-lg': '0 0 60px rgba(0,212,255,0.25)',
      },
    },
  },
  plugins: [],
}
