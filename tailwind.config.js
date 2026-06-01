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
          card: '#0f1f38',
          navy: '#0a1628',
          cyan: '#00d4ff',
          violet: '#7c3aed',
          emerald: '#10b981',
          border: '#1e3a5f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
