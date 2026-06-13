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
          DEFAULT: '#0F4C81',
          dark: '#0A3A64',
          light: '#1A6BA8',
        },
        accent: {
          DEFAULT: '#C9963A',
          dark: '#A67C2E',
          light: '#DDB45F',
        },
        surface: {
          DEFAULT: '#F7F9FC',
          dark: '#0F172A',
        },
        text: {
          primary: '#1A1A2E',
          secondary: '#4A5568',
          muted: '#718096',
        },
        border: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
}
