/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1a1d23',
          light: '#2a2d35',
        },
        steel: {
          DEFAULT: '#3a3d45',
          light: '#4a4d55',
        },
        amber: {
          DEFAULT: '#c9a962',
          light: '#d4b87a',
          dark: '#b8943f',
        },
        warm: {
          white: '#f8f7f4',
          off: '#edeae3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
