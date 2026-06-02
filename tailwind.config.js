/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        acid: '#CCFF00',
        'violet-deep': '#1A0033',
        void: '#0A0010',
        electric: '#7B00FF',
        magenta: '#FF00CC',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        marquee: 'marquee 18s linear infinite',
        'marquee-slow': 'marquee 30s linear infinite',
        glitch: 'glitch 2s steps(2, end) infinite',
        flicker: 'flicker 3s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glitch: {
          '0%, 100%': { clipPath: 'inset(0 0 100% 0)', transform: 'translate(0)' },
          '20%': { clipPath: 'inset(20% 0 60% 0)', transform: 'translate(-4px, 2px)' },
          '40%': { clipPath: 'inset(50% 0 30% 0)', transform: 'translate(4px, -2px)' },
          '60%': { clipPath: 'inset(70% 0 10% 0)', transform: 'translate(-2px, 4px)' },
          '80%': { clipPath: 'inset(10% 0 80% 0)', transform: 'translate(2px, -4px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.4' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.6' },
          '97%': { opacity: '1' },
        },
      },
      boxShadow: {
        acid: '0 0 20px #CCFF00, 0 0 40px rgba(204,255,0,0.3)',
        electric: '0 0 20px #7B00FF, 0 0 40px rgba(123,0,255,0.3)',
        glitch: '4px 4px 0 #FF00CC, -4px -4px 0 #7B00FF',
      },
    },
  },
  plugins: [],
}
