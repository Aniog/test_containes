/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a5f',
        'primary-light': '#2c5282',
        accent: '#d97706',
        'accent-light': '#f59e0b',
        'neutral-dark': '#1f2937',
        'neutral-mid': '#6b7280',
        'neutral-light': '#f3f4f6',
        success: '#059669',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
