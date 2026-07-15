/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-custom': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans-custom': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'velmora': {
          bg: '#F5F2ED',
          'bg-dark': '#1A1816',
          text: '#1A1816',
          'text-muted': '#4A4640',
          'text-light': '#8B8178',
          border: '#E5E0D8',
          accent: '#A67C52',
          'accent-dark': '#8B6643',
        }
      },
      letterSpacing: {
        'widest': '0.15em',
        'wide-custom': '0.1em',
      }
    },
  },
  plugins: [],
}
