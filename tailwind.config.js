/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-black': '#000000',
        'cosmic-void': '#0a0a0f',
        'cosmic-surface': '#0f0f1a',
        'nebula-violet': '#7c3aed',
        'nebula-light': '#a78bfa',
        'cosmic-cyan': '#06b6d4',
        'stellar-gold': '#f59e0b',
        'star-white': '#f8fafc',
        'star-dim': '#94a3b8',
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      keyframes: {
        kenburns: {
          '0%':   { transform: 'scale(1.0) translate(0%, 0%)' },
          '50%':  { transform: 'scale(1.12) translate(-1.5%, -1%)' },
          '100%': { transform: 'scale(1.0) translate(0%, 0%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        kenburns: 'kenburns 22s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}
