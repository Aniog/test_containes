/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        ivory: '#F5F0EA',
        charcoal: '#1A1814',
        espresso: '#2D2926',
        stone: '#6B635A',
        gold: {
          DEFAULT: '#C9A962',
          hover: '#B8943F',
          light: '#E8D9B8',
        },
        taupe: '#E8E2D9',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': 'clamp(3rem, 8vw, 5rem)',
        'section': 'clamp(2rem, 4vw, 3rem)',
        'card': '1.5rem',
      },
      spacing: {
        'section': 'clamp(4rem, 10vw, 8rem)',
      },
      maxWidth: {
        'container': '1400px',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
    },
  },
  plugins: [],
}
