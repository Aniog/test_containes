/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#050a0e',
        'midnight': '#0a1628',
        'dark-purple': '#130d2a',
        'bio-violet': '#8b5cf6',
        'emerald-glow': '#00ff88',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-violet': '0 0 30px rgba(139,92,246,0.2)',
        'glow-violet-lg': '0 0 50px rgba(139,92,246,0.3)',
        'glow-emerald': '0 0 30px rgba(0,255,136,0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
