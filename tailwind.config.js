/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'abyss': '#020b18',
        'deep-navy': '#041428',
        'ocean-dark': '#061e3a',
        'midnight': '#0a2d52',
        'teal-deep': '#0d4f6e',
        'bio-cyan': '#00d4ff',
        'glow-aqua': '#00ffcc',
        'soft-teal': '#4dd9c0',
        'pearl': '#e8f4f8',
        'muted-slate': '#7ba3b8',
      },
      fontFamily: {
        'display': ['Cinzel', 'serif'],
        'heading': ['Raleway', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(0,212,255,0.3)' },
          '100%': { textShadow: '0 0 30px rgba(0,212,255,0.8), 0 0 60px rgba(0,212,255,0.4)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(180deg, #020b18 0%, #041428 30%, #061e3a 60%, #0a2d52 100%)',
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, #0d4f6e 0%, #041428 50%, #020b18 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(13,79,110,0.3) 0%, rgba(6,30,58,0.6) 100%)',
        'glow-gradient': 'linear-gradient(90deg, transparent, rgba(0,212,255,0.1), transparent)',
      },
    },
  },
  plugins: [],
}
