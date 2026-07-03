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
          base: '#1C1917',
          surface: '#FAF9F7',
          card: '#F5F0EB',
          accent: '#B8860B',
          'accent-hover': '#9A7209',
          'accent-light': '#F5ECD7',
          border: '#E7E0D8',
          muted: '#78716C',
          'text-dark': '#1C1917',
          'text-light': '#FAF9F7',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
