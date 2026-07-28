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
          DEFAULT: '#0f4c81',
          dark: '#0a3a63',
          light: '#e8f0f8',
        },
        accent: {
          DEFAULT: '#e67e22',
          dark: '#d35400',
        },
        neutral: {
          white: '#ffffff',
          offwhite: '#f8f9fa',
          lightgray: '#e9ecef',
          mediumgray: '#6c757d',
          darkgray: '#343a40',
          nearblack: '#212529',
        },
        success: '#28a745',
        warning: '#ffc107',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
}
