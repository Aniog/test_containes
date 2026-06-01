/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#03040a',
        cosmos: '#070b18',
        nebula: '#0d1530',
        starlight: '#e8eaf6',
        aurora: '#7c83fd',
        'aurora-dim': '#4a52c8',
        'aurora-glow': '#a5aaff',
        ember: '#ff8c42',
        'ember-dim': '#c45e1a',
        jade: '#4ecdc4',
        'jade-dim': '#2a8a83',
        rose: '#ff6b9d',
        'rose-dim': '#c43a6a',
        gold: '#ffd166',
        'gold-dim': '#c49a2a',
        mist: '#8892b0',
        'mist-light': '#a8b2d8',
        'mist-dark': '#495670',
      },
      fontFamily: {
        display: ['Cinzel', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.8)' },
        },
        drift: {
          '0%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(124, 131, 253, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(124, 131, 253, 0.8), 0 0 60px rgba(124, 131, 253, 0.4)' },
        },
      },
      backgroundImage: {
        'star-field': 'radial-gradient(ellipse at top, #0d1530 0%, #070b18 50%, #03040a 100%)',
        'aurora-gradient': 'linear-gradient(135deg, #7c83fd22 0%, #4ecdc422 50%, #ff6b9d22 100%)',
        'memory-card': 'linear-gradient(135deg, rgba(13,21,48,0.9) 0%, rgba(7,11,24,0.95) 100%)',
      },
    },
  },
  plugins: [],
}
