/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#0a0a0f',
          surface: '#12121a',
          elevated: '#1a1a28',
        },
        border: {
          subtle: '#2a2a3d',
        },
        platform: {
          steam: '#66c0f4',
          epic: '#ffffff',
          nintendo: '#e4000f',
          playstation: '#00439c',
          xbox: '#107c10',
        },
      },
    },
  },
  plugins: [],
}
