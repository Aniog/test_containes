/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmos-bg': '#050d12',
        'cosmos-surface': '#0a1a24',
        'cosmos-card': '#0f2535',
        'cosmos-primary': '#00c9a7',
        'cosmos-primary-dark': '#009e84',
        'cosmos-accent': '#7b61ff',
        'cosmos-accent2': '#ff6b6b',
        'cosmos-text': '#e8f4f8',
        'cosmos-muted': '#8ab4c4',
        'cosmos-border': '#1a3a4a',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 30px rgba(0,201,167,0.15)',
        'glow-lg': '0 0 60px rgba(0,201,167,0.25)',
        'glow-hover': '0 0 40px rgba(0,201,167,0.3)',
        'glow-accent': '0 0 30px rgba(123,97,255,0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
