/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmos-bg': '#050d0f',
        'cosmos-surface': '#0a1a1e',
        'cosmos-card': '#0f2329',
        'cosmos-accent': '#00e5c8',
        'cosmos-violet': '#7c3aed',
        'cosmos-text': '#e8f4f6',
        'cosmos-muted': '#7fb8c4',
        'cosmos-dim': '#3d6b75',
        'cosmos-border': '#1a3a42',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
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
