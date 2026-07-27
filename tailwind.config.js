/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B3A5C',
          light: '#2563EB',
          dark: '#0F2440',
        },
        gold: {
          DEFAULT: '#D4A853',
          light: '#E8C97A',
          dark: '#B8923F',
        },
        slate: {
          muted: '#5A6B7D',
          light: '#8A9BAE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
