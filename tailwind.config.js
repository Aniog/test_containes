/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#FCFAF7',
        surface: '#FFFFFF',
        muted: '#F5F2ED',
        border: '#E8E3DC',
        'text-primary': '#1C1917',
        'text-secondary': '#78716C',
        accent: '#A68A56',
        'accent-hover': '#8B6F3F',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Garamond', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.15em',
        wider: '0.2em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
