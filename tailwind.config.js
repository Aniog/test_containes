/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#101722',
        steel: '#4f6075',
        mist: '#eef1f5',
        ivory: '#fbfaf7',
        copper: '#b59266',
        line: '#d6dce4',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(16, 23, 34, 0.08)',
      },
    },
  },
  plugins: [],
}
