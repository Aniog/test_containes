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
          blue: '#1e40af',
          navy: '#1e3a5f',
          orange: '#f97316',
          light: '#f8fafc',
          white: '#ffffff',
          text: '#1e293b',
          muted: '#64748b',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
