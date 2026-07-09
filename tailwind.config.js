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
          surface: '#0d1a24',
          elevated: '#112233',
          teal: '#00d4c8',
          tealDark: '#00b8ad',
          text: '#e2f0f9',
          muted: '#7fa8c4',
          faint: '#4a7a9b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
