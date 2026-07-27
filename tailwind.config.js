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
          navy: '#1B2A4A',
          blue: '#2563EB',
          orange: '#F97316',
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
