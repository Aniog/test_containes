/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8F5F0',
        surface: '#FFFFFF',
        primary: '#1A1A1A',
        secondary: '#6B6560',
        accent: '#A67C52',
        'accent-hover': '#8E6B45',
        border: '#E5DDD4',
        'light-accent': '#F0E8DD',
        star: '#D4A857',
        'footer-bg': '#1A1A1A',
        'footer-text': '#A09890',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wide-extra': '0.12em',
      },
      maxWidth: {
        'content': '1280px',
      },
    },
  },
  plugins: [],
}
