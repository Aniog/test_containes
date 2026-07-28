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
          navy: '#1A4B8C',
          'navy-dark': '#0F2A5C',
          'navy-light': '#2563EB',
          red: '#C0392B',
          'red-light': '#E74C3C',
          dark: '#1E293B',
          mid: '#475569',
          muted: '#94A3B8',
          border: '#E2E8F0',
          surface: '#F8FAFC',
          'blue-tint': '#EFF6FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
