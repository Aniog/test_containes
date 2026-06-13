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
          DEFAULT: '#1B3A5C',
          dark: '#0F2640',
          light: '#2A4F7A',
        },
        sky: {
          brand: '#2E86DE',
          'brand-hover': '#1B6FC5',
        },
        gray: {
          50: '#F7F8FA',
          100: '#EDF0F5',
          200: '#E8ECF1',
          300: '#CBD5E0',
          600: '#718096',
          700: '#4A5568',
          800: '#2D3748',
          900: '#1A202C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
