/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmos-black': '#030d06',
        'cosmos-dark': '#061410',
        'cosmos-navy': '#0a1f14',
        'cosmos-blue': '#0f3320',
        'nebula-purple': '#166534',
        'nebula-violet': '#059669',
        'nebula-pink': '#84cc16',
        'stardust-gold': '#f59e0b',
        'stardust-cyan': '#34d399',
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
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 10px rgba(5,150,105,0.2)' },
          '50%': { opacity: '1', boxShadow: '0 0 30px rgba(5,150,105,0.5)' },
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
        'cosmos-gradient': 'linear-gradient(135deg, #030d06 0%, #0a1f14 50%, #030d06 100%)',
        'nebula-gradient': 'linear-gradient(135deg, #166534 0%, #059669 50%, #84cc16 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
      },
    },
  },
  plugins: [],
}
