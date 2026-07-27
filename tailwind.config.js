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
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccd9',
          300: '#94aec6',
          400: '#6b8ba8',
          500: '#4a6d8a',
          600: '#2d4f6c',
          700: '#1E3A5F',
          800: '#0F2440',
          900: '#0a1a2e',
        },
        accent: {
          50: '#fef5e7',
          100: '#fdebd0',
          200: '#fad7a0',
          300: '#f5c470',
          400: '#f0b040',
          500: '#E67E22',
          600: '#D35400',
          700: '#a04000',
          800: '#7a3000',
          900: '#542000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
