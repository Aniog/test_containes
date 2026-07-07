/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvet: '#0F1115',
        'velvet-secondary': '#181A20',
        ivory: '#F5F0E8',
        'ivory-dark': '#EAE3D8',
        cream: '#F7F5F0',
        'warm-gray': '#A9A59B',
        'warm-gray-dark': '#6E6A62',
        accent: '#C7A266',
        'accent-hover': '#D4AF78',
        error: '#E57373',
        success: '#A5D6A7',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.18em',
        'ultra': '0.25em',
      },
      transitionDuration: {
        '400': '400ms',
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '9/16': '9 / 16',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
