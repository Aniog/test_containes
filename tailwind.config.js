/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0f2a43',
          blue: '#1d6fb8',
          teal: '#0f766e',
          amber: '#d97706',
          surface: '#f5f8fb',
          border: '#d9e3ee',
          ink: '#122033',
          muted: '#5c6f82',
        },
      },
      boxShadow: {
        soft: '0 18px 50px rgba(15, 42, 67, 0.10)',
      },
    },
  },
  plugins: [],
}
