/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          700: '#243f77',
          800: '#1a2d5a',
          900: '#0f1b3d',
        },
        accent: {
          400: '#f76b1c',
          500: '#e8590c',
          600: '#d14b08',
        },
      },
    },
  },
  plugins: [],
}
