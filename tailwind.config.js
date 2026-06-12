/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#0B2545',
          blue: '#1D4ED8',
          accent: '#F59E0B',
          ink: '#0F172A',
          muted: '#475569',
          border: '#E2E8F0',
          surface: '#F8FAFC',
          bg: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}
