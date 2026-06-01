/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#020408',
        deep: '#060d18',
        abyss: '#0a1628',
        surface: '#0f1f35',
        panel: '#142540',
        border: '#1e3a5f',
        amber: { DEFAULT: '#f59e0b', glow: '#fbbf24' },
        cyan: { DEFAULT: '#06b6d4', glow: '#22d3ee' },
        violet: { DEFAULT: '#7c3aed', glow: '#8b5cf6' },
        crimson: { DEFAULT: '#dc2626', glow: '#ef4444' },
        emerald: { DEFAULT: '#059669', glow: '#10b981' },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-up': 'float-up var(--dur, 8s) linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'flicker': 'flicker 4s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'float-up': {
          '0%': { transform: 'translateY(100vh)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.4' },
          '100%': { transform: 'translateY(-20vh)', opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.4' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.6' },
          '97%': { opacity: '1' },
        },
        'rotate-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}
