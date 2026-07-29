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
          DEFAULT: '#1B4D7A',
          dark: '#0F3356',
          light: '#2A6BAD',
        },
        accent: {
          DEFAULT: '#E8A838',
          dark: '#C98A1F',
        },
        surface: {
          DEFAULT: '#F8FAFB',
          alt: '#EDF2F7',
        },
        'text-primary': '#1A202C',
        'text-body': '#4A5568',
        'text-muted': '#718096',
        border: '#E2E8F0',
        success: '#38A169',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
