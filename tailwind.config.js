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
          navy: '#0F2742',
          blue: '#1F66D1',
          sky: '#EAF3FF',
          amber: '#F6B73C',
        },
      },
      boxShadow: {
        soft: '0 18px 60px rgba(15, 39, 66, 0.12)',
      },
    },
  },
  plugins: [],
}
