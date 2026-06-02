/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00FFFF',
        'neon-magenta': '#FF00FF',
        'neon-green': '#00FF41',
        'neon-amber': '#FFB300',
        'neon-blue': '#0080FF',
        'led-black': '#000000',
        'led-surface': '#0A0A0A',
        'led-grid': '#111111',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 8px #00FFFF, 0 0 20px rgba(0,255,255,0.25)',
        'neon-cyan-lg': '0 0 12px #00FFFF, 0 0 40px rgba(0,255,255,0.4)',
        'neon-magenta': '0 0 8px #FF00FF, 0 0 20px rgba(255,0,255,0.25)',
        'neon-magenta-lg': '0 0 12px #FF00FF, 0 0 40px rgba(255,0,255,0.4)',
        'neon-green': '0 0 8px #00FF41, 0 0 20px rgba(0,255,65,0.25)',
        'neon-amber': '0 0 8px #FFB300, 0 0 20px rgba(255,179,0,0.25)',
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
      },
      animation: {
        'flicker': 'flicker 3s infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.8' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.6' },
          '97%': { opacity: '1' },
        },
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 8px #00FFFF, 0 0 20px rgba(0,255,255,0.25)' },
          '50%': { boxShadow: '0 0 16px #00FFFF, 0 0 50px rgba(0,255,255,0.5)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
