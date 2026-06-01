/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#050810',
        'space-navy': '#080d1a',
        'space-indigo': '#0d1530',
        'nebula-blue': '#4f8ef7',
        'aurora-teal': '#2dd4bf',
        'stardust-gold': '#f5c842',
        'memory-rose': '#e879a0',
        'cosmic-violet': '#a78bfa',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        drift: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'space-gradient': 'radial-gradient(ellipse at center, #0d1530 0%, #080d1a 50%, #050810 100%)',
        'nebula-gradient': 'radial-gradient(ellipse at 30% 50%, rgba(79,142,247,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(167,139,250,0.06) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
}
