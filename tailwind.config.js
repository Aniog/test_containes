/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmos-950': '#03040a',
        'cosmos-900': '#070b18',
        'cosmos-800': '#0d1530',
        'cosmos-700': '#162048',
        'cosmos-600': '#1e2d6b',
        'nebula-500': '#3d4fc4',
        'nebula-400': '#6b7fe8',
        'nebula-300': '#9aaaf0',
        'aurora-500': '#7c3aed',
        'aurora-400': '#a855f7',
        'aurora-300': '#c084fc',
        'stardust-500': '#d97706',
        'stardust-400': '#f59e0b',
        'stardust-300': '#fcd34d',
        'memory-pink': '#ec4899',
        'memory-teal': '#14b8a6',
        'memory-cyan': '#06b6d4',
        'text-primary': '#f0f4ff',
        'text-secondary': '#a8b4d8',
        'text-muted': '#5a6a9a',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drift: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(10px) translateY(-5px)' },
          '50%': { transform: 'translateX(5px) translateY(-10px)' },
          '75%': { transform: 'translateX(-5px) translateY(-5px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
