/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#faf8f4',
        foreground: '#3d3229',
        muted: '#8c7b6b',
        accent: '#b08d57',
        'accent-hover': '#9a7a48',
        border: '#e8e0d5',
        card: '#ffffff',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.18em',
      },
    },
  },
  plugins: [],
}
