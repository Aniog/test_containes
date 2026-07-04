/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#F6F3EE',
        foreground: '#1A1814',
        accent: '#B8956A',
        'accent-hover': '#A08055',
        muted: '#8A8278',
        divider: '#D9D3CA',
        surface: '#FFFFFF',
        'surface-warm': '#EDE9E2',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
      },
    },
  },
  plugins: [],
}
