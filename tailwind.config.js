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
          900: '#0f2238',
          800: '#1a3a5c',
          700: '#234b75',
          600: '#2c5f8a',
          500: '#3573a0',
          50: '#e8f0f8',
        },
        accent: {
          600: '#b8310b',
          500: '#d4380d',
          400: '#e8471b',
          50: '#fef2ee',
        },
        surface: {
          DEFAULT: '#ffffff',
          alt: '#f6f8fa',
          border: '#e2e6ea',
        },
        text: {
          DEFAULT: '#1a1a2e',
          secondary: '#5a6270',
          muted: '#8b919e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
