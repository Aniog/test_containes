/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slot-bg': '#1a0a2e',
        'slot-bg2': '#0d0620',
        'slot-frame': '#2d1b69',
        'slot-reel': '#0f0a1e',
        'slot-gold': '#f5a623',
        'slot-gold2': '#ffd700',
        'slot-purple': '#7c3aed',
        'slot-purple2': '#4c1d95',
        'slot-pink': '#ec4899',
        'slot-pink2': '#be185d',
        'slot-cyan': '#06b6d4',
        'slot-green': '#10b981',
        'slot-red': '#ef4444',
        'slot-border': '#6d28d9',
      },
      fontFamily: {
        'game': ['Orbitron', 'Exo 2', 'sans-serif'],
      },
      boxShadow: {
        'neon-gold': '0 0 10px #f5a623, 0 0 20px #f5a623, 0 0 40px #f5a623',
        'neon-purple': '0 0 10px #7c3aed, 0 0 20px #7c3aed, 0 0 40px #7c3aed',
        'neon-pink': '0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 40px #ec4899',
        'neon-cyan': '0 0 10px #06b6d4, 0 0 20px #06b6d4',
        'neon-green': '0 0 10px #10b981, 0 0 20px #10b981',
        'reel-inner': 'inset 0 0 30px rgba(0,0,0,0.8)',
        'frame': '0 0 30px rgba(124, 58, 237, 0.5), inset 0 0 30px rgba(0,0,0,0.3)',
      },
      animation: {
        'spin-reel': 'spinReel 0.1s linear infinite',
        'win-pulse': 'winPulse 0.5s ease-in-out infinite',
        'coin-bounce': 'coinBounce 0.6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'win-flash': 'winFlash 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'jackpot': 'jackpot 0.5s ease-in-out infinite',
      },
      keyframes: {
        spinReel: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        winPulse: {
          '0%, 100%': { transform: 'scale(1)', filter: 'brightness(1)' },
          '50%': { transform: 'scale(1.1)', filter: 'brightness(1.5)' },
        },
        coinBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px #f5a623, 0 0 20px #f5a623' },
          '50%': { boxShadow: '0 0 20px #f5a623, 0 0 40px #f5a623, 0 0 60px #f5a623' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        winFlash: {
          '0%': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: 'rgba(245, 166, 35, 0.3)' },
          '100%': { backgroundColor: 'transparent' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        jackpot: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', filter: 'hue-rotate(0deg)' },
          '25%': { transform: 'scale(1.2) rotate(-5deg)', filter: 'hue-rotate(90deg)' },
          '75%': { transform: 'scale(1.2) rotate(5deg)', filter: 'hue-rotate(270deg)' },
        },
      },
    },
  },
  plugins: [],
}
