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
          bg: '#050a0f',
          surface: '#0d1a26',
          elevated: '#112233',
          cyan: '#00d4ff',
          magenta: '#e040fb',
          neon: '#39ff14',
          text: '#e8f4f8',
          muted: '#7fb3c8',
          border: '#1a3a4a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
