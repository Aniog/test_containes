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
          navy: '#1e3a5f',
          blue: '#2c5282',
          orange: '#e8740c',
          'orange-hover': '#cf660b',
          'orange-light': '#fff4e6',
        },
        surface: {
          white: '#ffffff',
          light: '#f7f8fa',
          muted: '#edf2f7',
        },
        content: {
          primary: '#1a202c',
          secondary: '#4a5568',
          muted: '#718096',
          light: '#a0aec0',
        },
        border: {
          light: '#e2e8f0',
          DEFAULT: '#cbd5e0',
        },
        trust: {
          green: '#22543d',
          'green-bg': '#f0fff4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
