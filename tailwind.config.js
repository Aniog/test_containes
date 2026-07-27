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
          navy: '#0b1f3a',
          ink: '#172033',
          blue: '#1e64b8',
          softBlue: '#e8f0fa',
          amber: '#d89a2b',
          line: '#d8e0ea',
          bg: '#f6f8fb',
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(11, 31, 58, 0.08)',
      },
    },
  },
  plugins: [],
}
