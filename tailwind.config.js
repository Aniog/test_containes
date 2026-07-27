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
          navy: '#0f2742',
          blue: '#1769aa',
          amber: '#c98518',
          ink: '#102033',
          muted: '#5c6b7c',
          surface: '#f4f7fa',
          border: '#d9e2ec',
          pale: '#eaf3fb',
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 39, 66, 0.10)',
      },
    },
  },
  plugins: [],
}
