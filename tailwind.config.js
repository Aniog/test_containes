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
          dark: '#0F3355',
        },
        secondary: {
          DEFAULT: '#E8A838',
          dark: '#C98B1F',
        },
        neutral: {
          50: '#F8FAFB',
          100: '#F1F4F7',
          200: '#E2E7ED',
          300: '#C8D1DB',
          600: '#5A6B7B',
          800: '#1F2D3D',
          900: '#0F1A26',
        },
        success: '#2E8B57',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
