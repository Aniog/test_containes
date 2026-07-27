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
          DEFAULT: '#0f172a',
          light: '#1e293b',
        },
        accent: {
          DEFAULT: '#2563eb',
          hover: '#1d4ed8',
        },
        surface: '#ffffff',
        muted: '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
