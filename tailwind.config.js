/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4D8E',
          dark: '#0F2D5A',
          light: '#2563EB',
        },
        accent: {
          DEFAULT: '#E8762E',
          light: '#F4A261',
        },
        'bg-light': '#F7F9FC',
        'text-primary': '#1A1A2E',
        'text-secondary': '#5A6377',
        'text-light': '#8B95A5',
        'border-light': '#E2E8F0',
        success: '#22C55E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
