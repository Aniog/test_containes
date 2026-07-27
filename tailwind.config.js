/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0B3D6B',
        'primary-dark': '#062847',
        'accent-orange': '#E67E22',
        'accent-orange-hover': '#D35400',
        'gray-50': '#F8FAFC',
        'gray-100': '#F1F5F9',
        'gray-200': '#E2E8F0',
        'gray-300': '#CBD5E1',
        'gray-500': '#64748B',
        'gray-700': '#334155',
        'gray-900': '#0F172A',
        'success-green': '#16A34A',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
