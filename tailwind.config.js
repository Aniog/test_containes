/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'space-black': '#050810',
        'space-navy': '#080d1a',
        'space-midnight': '#0d1530',
        'nebula-purple': '#7c3aed',
        'stellar-cyan': '#06b6d4',
        'memory-gold': '#f59e0b',
        'cosmic-rose': '#f43f5e',
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'drift': 'drift 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

