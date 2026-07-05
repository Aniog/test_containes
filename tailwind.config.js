/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0d0d0d',
        charcoal: '#1f1d1b',
        gold: {
          DEFAULT: '#c9a96e',
          light: '#d4b87a',
          dark: '#b8944f',
        },
        ivory: '#f5f0ea',
        cream: '#faf8f5',
        muted: '#a69e94',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'bounce-subtle': {
          '0%, 100%': { transform: 'translate(-50%, 0)' },
          '50%': { transform: 'translate(-50%, 8px)' },
        },
      },
      animation: {
        'bounce-subtle': 'bounce-subtle 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
