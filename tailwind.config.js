/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#0B2545',
          50: '#F2F5FA',
          100: '#E1E8F2',
          500: '#1E4F87',
          700: '#13315C',
          900: '#0B2545',
        },
        accent: {
          DEFAULT: '#0E7C86',
          500: '#14B8A6',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,0.04), 0 4px 12px rgba(15,23,42,0.06)',
      },
    },
  },
  plugins: [],
}
