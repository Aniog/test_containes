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
          bg: '#050d1a',
          surface: '#0a1628',
          card: '#0f1f38',
          teal: '#00d4c8',
          cyan: '#00b8ff',
          text: '#e8f4f8',
          muted: '#8ab4c8',
          dim: '#4a7a94',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
