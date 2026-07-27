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
          navy: '#0f2a43',
          blue: '#2f6f9f',
          amber: '#d9902f',
          amberDark: '#c57c1f',
          cream: '#f7f4ef',
          mist: '#edf2f6',
          ink: '#13202b',
          muted: '#5d6b78',
        },
      },
      boxShadow: {
        card: '0 18px 45px rgba(15, 42, 67, 0.10)',
      },
    },
  },
  plugins: [],
}
