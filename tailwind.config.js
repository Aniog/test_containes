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
          DEFAULT: '#0B2545',
          2: '#13315C',
        },
        accent: {
          DEFAULT: '#0E7C86',
          2: '#E0A82E',
        },
        ink: {
          DEFAULT: '#1F2937',
          soft: '#475569',
        },
        line: '#E2E8F0',
        surface: {
          DEFAULT: '#F7F9FC',
          2: '#EEF2F7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
