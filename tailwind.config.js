/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmos-deep': '#050d14',
        'cosmos-dark': '#0a1628',
        'cosmos-card': '#0f1f35',
        'cosmos-cyan': '#00d4ff',
        'cosmos-violet': '#7c3aed',
        'cosmos-glow': '#00ffcc',
        'cosmos-text': '#e8f4f8',
        'cosmos-muted': '#7fb3c8',
        'cosmos-dim': '#3d6478',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(0,212,255,0.15)',
        'glow-md': '0 0 40px rgba(0,212,255,0.2)',
        'glow-lg': '0 0 60px rgba(0,212,255,0.3)',
        'glow-violet': '0 0 40px rgba(124,58,237,0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
