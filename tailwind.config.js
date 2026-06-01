/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#03050f',
        cosmos: '#070d1f',
        nebula: '#0d1635',
        stardust: '#1a2a5e',
        aurora: '#4f8ef7',
        'aurora-dim': '#2a5cbf',
        'aurora-glow': '#7ab3ff',
        memory: '#c8a8f0',
        'memory-dim': '#9b6fd4',
        warmth: '#f0c87a',
        'warmth-dim': '#c8963a',
        starlight: '#e8f0ff',
        mist: '#8899cc',
        fog: '#4a5a8a',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-slow': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(79,142,247,0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(79,142,247,0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-in-slow': 'fade-in-slow 1.5s ease-out forwards',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
