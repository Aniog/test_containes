/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nebula-blue': '#4f8ef7',
        'aurora-teal': '#2dd4bf',
        'stardust-gold': '#f5c842',
        'memory-rose': '#e879a0',
        'void-purple': '#8b5cf6',
        'space-black': '#050810',
        'space-navy': '#080d1a',
        'space-midnight': '#0d1530',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.8)' },
        },
        drift: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(10px) translateY(-5px)' },
          '50%': { transform: 'translateX(5px) translateY(-10px)' },
          '75%': { transform: 'translateX(-5px) translateY(-5px)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
