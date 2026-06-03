/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmos-black': '#050a0e',
        'cosmos-dark': '#0a1520',
        'cosmos-navy': '#0d1f2d',
        'cosmos-teal': '#00c9b1',
        'cosmos-cyan': '#00e5ff',
        'cosmos-violet': '#7c3aed',
        'cosmos-purple': '#a855f7',
        'cosmos-muted': '#4a6a7a',
        'cosmos-light': '#c8dde8',
        'cosmos-white': '#f0f8ff',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0,201,177,0.2)' },
          '100%': { boxShadow: '0 0 50px rgba(0,201,177,0.5)' },
        },
      },
    },
  },
  plugins: [],
}
