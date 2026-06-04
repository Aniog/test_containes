/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lol: {
          gold: '#c8aa6e',
          'gold-light': '#dfbd7e',
          'gold-dark': '#8b7335',
          blue: '#0a1428',
          'blue-light': '#1e2a45',
          'blue-dark': '#050a14',
          accent: '#0397ab',
          'accent-light': '#0ac8c3',
          red: '#e84057',
          'red-dark': '#8b1a2b',
          bg: '#0a0a0f',
          'bg-light': '#14141e',
          'bg-card': '#1a1a2e',
          text: '#e8e6e3',
          'text-muted': '#8a8a9a',
        },
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'Noto Sans SC', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'slideUp': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(200, 170, 110, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(200, 170, 110, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
