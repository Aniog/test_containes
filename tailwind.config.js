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
          navy: '#10243e',
          slate: '#405066',
          blue: '#1769e0',
          amber: '#d88a1d',
          cloud: '#f6f8fb',
          mist: '#e7edf5',
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(16, 36, 62, 0.10)',
      },
    },
  },
  plugins: [],
}
