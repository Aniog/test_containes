/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        abyss: {
          900: '#000020',
          800: '#000040',
          700: '#000060',
          600: '#000080',
          500: '#0000a0',
          400: '#0000c0',
        },
        cyan: {
          DEFAULT: '#00FFFF',
          400: '#00FFFF',
          300: '#33FFFF',
          200: '#66FFFF',
          100: '#99FFFF',
        },
      },
      borderRadius: {
        'bubble': '2rem',
        'bubble-lg': '3rem',
        'bubble-xl': '4rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'liquid': 'liquid 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        liquid: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
        },
      },
    },
  },
  plugins: [],
}
