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
          gold: '#D4A853',
          light: '#F8FAFC',
          white: '#FFFFFF',
          dark: '#1E293B',
          muted: '#64748B',
          border: '#E2E8F0',
          green: '#16A34A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
