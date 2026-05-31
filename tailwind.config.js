/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmos-black': '#050810',
        'cosmos-dark': '#0a0f1e',
        'cosmos-navy': '#0d1530',
        'cosmos-blue': '#1a2a5e',
        'nebula-purple': '#6b21a8',
        'nebula-violet': '#7c3aed',
        'nebula-pink': '#c026d3',
        'stardust-gold': '#f59e0b',
        'stardust-cyan': '#06b6d4',
        'memory-white': '#e2e8f0',
        'memory-muted': '#94a3b8',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 10px rgba(124,58,237,0.2)' },
          '50%': { opacity: '1', boxShadow: '0 0 30px rgba(124,58,237,0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'cosmos-gradient': 'linear-gradient(135deg, #050810 0%, #0d1530 50%, #050810 100%)',
        'nebula-gradient': 'linear-gradient(135deg, #6b21a8 0%, #7c3aed 50%, #c026d3 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
      },
    },
  },
  plugins: [],
}
