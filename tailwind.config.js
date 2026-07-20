/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#faf9f6',
        foreground: '#1a1918',
        surface: '#ffffff',
        'surface-alt': '#f2efeb',
        muted: '#73706c',
        accent: {
          DEFAULT: '#c2a77a',
          hover: '#a38a60',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
