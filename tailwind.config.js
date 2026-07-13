/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmos: {
          black: '#050810',
          navy: '#0d1b2a',
          card: '#0f1f30',
          border: '#1a3a4a',
          teal: '#00c8c8',
          cyan: '#00f0ff',
          'teal-muted': '#007a7a',
          text: '#f0f8ff',
          secondary: '#a8c8d8',
          muted: '#5a7a8a',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(0,200,200,0.1)',
        'glow': '0 0 30px rgba(0,200,200,0.15)',
        'glow-lg': '0 0 50px rgba(0,200,200,0.25)',
        'glow-hover': '0 0 40px rgba(0,200,200,0.3)',
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
