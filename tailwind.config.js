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
          light: '#2E6BAD',
          dark: '#132A44',
        },
        accent: {
          DEFAULT: '#E87722',
          hover: '#D06818',
        },
        surface: {
          DEFAULT: '#F7F8FA',
          white: '#FFFFFF',
        },
        charcoal: '#1F2937',
        body: '#4B5563',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
