/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4D7A',
          light: '#2A6FAF',
          dark: '#0F3355',
        },
        accent: {
          DEFAULT: '#E8A838',
          dark: '#C78B20',
        },
        neutral: {
          50: '#F8FAFB',
          100: '#F1F4F7',
          200: '#E2E7ED',
          300: '#C8D1DB',
          600: '#4A5568',
          800: '#1A2332',
          900: '#0D1520',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
