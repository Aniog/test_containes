/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        skate: {
          yellow: '#facc15',
          red: '#ef4444',
          dark: '#09090b',
          surface: '#18181b',
          elevated: '#27272a',
          border: '#3f3f46',
        },
      },
    },
  },
  plugins: [],
}
