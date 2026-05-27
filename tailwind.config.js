/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmos-bg': '#050d12',
        'cosmos-card': '#0f2230',
        'cosmos-cyan': '#00e5ff',
        'cosmos-green': '#39ff14',
        'cosmos-violet': '#b57bee',
        'cosmos-text': '#e8f4f8',
        'cosmos-muted': '#7fb3c8',
        'cosmos-border': '#1a3a4a',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { textShadow: '0 0 20px rgba(0,229,255,0.4)' },
          '50%': { textShadow: '0 0 40px rgba(0,229,255,0.8), 0 0 80px rgba(0,229,255,0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
