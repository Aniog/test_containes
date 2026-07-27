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
          DEFAULT: '#0f4c81',
          light: '#1e6ba8',
          dark: '#0b3a63',
        },
        teal: {
          DEFAULT: '#0d9488',
          light: '#14b8a6',
        },
        background: '#ffffff',
        foreground: '#0f172a',
        muted: '#f1f5f9',
        'muted-foreground': '#64748b',
        border: '#e2e8f0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
