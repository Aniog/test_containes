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
          dark: '#0B1426',
          medium: '#132040',
          light: '#1A2D52',
        },
        gold: {
          DEFAULT: '#C8A45C',
          light: '#D4B76A',
          muted: '#A68B4B',
        },
        card: {
          dark: '#0F1B33',
          hover: '#162244',
        },
        divider: '#1E3A5F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
