/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#1a1614',
        surface: '#faf7f2',
        accent: '#b8860b',
        'accent-hover': '#9a7009',
        muted: '#8b7d71',
        border: '#e8e0d5',
        'card-bg': '#ffffff',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'button': '0.05em',
      },
    },
  },
  plugins: [],
}
