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
          navy: '#0F2A43',
          blue: '#1D6FA5',
          gold: '#C8872A',
          mist: '#F4F7FA',
          border: '#D8E1EA',
          ink: '#152536',
          muted: '#5F7184',
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 42, 67, 0.08)',
      },
    },
  },
  plugins: [],
}
