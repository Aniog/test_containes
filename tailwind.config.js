/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btc: {
          bg: '#0a0a0f',
          surface: '#0f0f1a',
          card: '#13131f',
          border: '#1e1e3a',
          orange: '#f7931a',
          green: '#00ff88',
          cyan: '#00d4ff',
          purple: '#8b5cf6',
          text: '#e2e8f0',
          muted: '#64748b',
          dim: '#94a3b8',
        },
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', '"Fira Code"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #f7931a, 0 0 20px #f7931a' },
          '100%': { textShadow: '0 0 20px #f7931a, 0 0 40px #f7931a, 0 0 60px #f7931a' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)',
        'dot-pattern': 'radial-gradient(circle, rgba(247,147,26,0.15) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
        'dot': '30px 30px',
      },
    },
  },
  plugins: [],
}
