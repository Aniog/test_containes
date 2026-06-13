/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0f172a',
          blue: '#1d4ed8',
          sky: '#e0efff',
          amber: '#b45309',
        },
        surface: {
          canvas: '#f8fafc',
          card: '#ffffff',
          border: '#dbe3ef',
          muted: '#eef4f8',
        },
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
