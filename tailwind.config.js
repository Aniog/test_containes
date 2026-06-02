/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmos-black': '#050a0e',
        'cosmos-navy': '#0a1628',
        'cosmos-dark': '#0d2137',
        'cosmos-cyan': '#00d4ff',
        'cosmos-teal': '#00b4d8',
        'cosmos-green': '#39ff14',
        'cosmos-violet': '#a78bfa',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'cosmos-gradient': 'linear-gradient(135deg, #050a0e 0%, #0a1628 50%, #0d2137 100%)',
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.15) 0%, transparent 60%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
