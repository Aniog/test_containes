/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steam: { DEFAULT: '#1b2838', light: '#c7d5e0', blue: '#66c0f4' },
        epic: { DEFAULT: '#2d2d2d', light: '#f5f5f5' },
        nintendo: { DEFAULT: '#e4000f', light: '#ffffff' },
        playstation: { DEFAULT: '#003087', light: '#ffffff', blue: '#0070d1' },
        xbox: { DEFAULT: '#107c10', light: '#ffffff' },
        gog: { DEFAULT: '#7b2fbe', light: '#ffffff' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        'card-gradient': 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)',
        'purple-cyan': 'linear-gradient(135deg, #9333ea, #06b6d4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
