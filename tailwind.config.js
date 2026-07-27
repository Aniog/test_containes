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
          blue: '#1D6FA3',
          soft: '#EAF4FA',
          green: '#1F7A5A',
          amber: '#C9842B',
          ink: '#172331',
          muted: '#65758A',
          border: '#D9E2EA',
          page: '#F7FAFC',
        },
      },
      boxShadow: {
        soft: '0 18px 50px rgba(15, 42, 67, 0.08)',
      },
    },
  },
  plugins: [],
}
