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
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcc8dc',
          300: '#8fa3c2',
          400: '#6279a8',
          500: '#2c3e6b',
          600: '#1e2d52',
          700: '#172240',
          800: '#111832',
          900: '#0c1125',
        },
        accent: {
          50: '#fdf8f0',
          100: '#f9edd8',
          200: '#f2d8a8',
          300: '#eac378',
          400: '#e2ae48',
          500: '#c8942e',
          600: '#a07624',
          700: '#7c5b1c',
          800: '#5c4415',
          900: '#3f2f0e',
        },
        steel: {
          50: '#f6f7f9',
          100: '#ecedf2',
          200: '#d0d3e0',
          300: '#aeb3c9',
          400: '#8890ae',
          500: '#6b7397',
          600: '#555c7d',
          700: '#464c66',
          800: '#3b4056',
          900: '#343849',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
