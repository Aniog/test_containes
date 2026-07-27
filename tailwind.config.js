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
          DEFAULT: '#1E3A5F',
          light: '#2D5A87',
          dark: '#0F172A',
        },
        accent: {
          DEFAULT: '#E67E22',
          hover: '#D35400',
        },
        success: '#27AE60',
        background: {
          light: '#F8FAFC',
          dark: '#0F172A',
        },
        text: {
          primary: '#1E293B',
          secondary: '#64748B',
        },
        border: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}
