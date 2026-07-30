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
          navy: '#1B2B4B',
          blue: '#2563EB',
          orange: '#F97316',
          light: '#F8FAFC',
          white: '#FFFFFF',
          dark: '#1E293B',
          gray: '#64748B',
          muted: '#94A3B8',
          border: '#E2E8F0',
          green: '#10B981',
        }
      }
    },
  },
  plugins: [],
}
