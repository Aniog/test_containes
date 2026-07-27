/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B2545',
          'navy-700': '#13315C',
          blue: '#1B6CA8',
          'blue-600': '#155C8F',
          amber: '#F59E0B',
          'amber-600': '#D97706',
          slate: '#F1F5F9',
          'slate-200': '#E2E8F0',
          ink: '#0F172A',
          muted: '#475569',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
