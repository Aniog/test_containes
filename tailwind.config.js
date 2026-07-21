/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F9F6F2',
        espresso: '#2B211E',
        charcoal: '#1F1A17',
        warmgray: '#6E625C',
        accent: '#B76D4A',
        'accent-hover': '#9A5A3B',
        taupe: '#E8E0D8',
        hairline: '#D9CFC5',
        gold: '#C6A25F',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        brand: '0.2em',
        wide: '0.12em',
      },
      transitionDuration: {
        400: '400ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
