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
          navy: '#0b1f3a',
          blue: '#1264d8',
          amber: '#f59e0b',
          ink: '#102033',
          slate: '#526173',
          mist: '#e8eef6',
          cloud: '#f6f8fb',
          steel: '#d7e0eb',
        },
      },
      boxShadow: {
        soft: '0 18px 50px rgba(15, 31, 58, 0.10)',
      },
    },
  },
  plugins: [],
}
