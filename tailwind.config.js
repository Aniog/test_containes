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
          DEFAULT: '#1E3A5F',
          light: '#2C5F8A',
          dark: '#152B45',
        },
        accent: {
          DEFAULT: '#E87722',
          hover: '#C85D18',
        },
        b2b: {
          light: '#F7F8FA',
          gray: '#F0F2F5',
          text: '#111827',
          'text-medium': '#4B5563',
          'text-light': '#6B7280',
          border: '#E5E7EB',
          success: '#059669',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
