/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#1A1714',
          soft: '#3A332D',
        },
        cream: {
          DEFAULT: '#F6F1EA',
          deep: '#EDE5D9',
        },
        champagne: {
          DEFAULT: '#B89254',
          deep: '#9A7838',
        },
        hairline: '#D9CFC0',
        mute: '#7A6E60',
        bone: '#F1E9DC',
      },
      letterSpacing: {
        editorial: '0.18em',
        eyebrow: '0.3em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
