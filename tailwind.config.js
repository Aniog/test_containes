/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#172554',
          950: '#0f172a',
        },
        accent: {
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
        },
        sand: {
          50: '#f8fafc',
          100: '#eef2f7',
          200: '#e2e8f0',
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
