/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-deep': '#1A2421',
        'forest-mid': '#243028',
        'forest-surface': '#2E3D35',
        'mist-grey': '#8A9E94',
        'mist-light': '#B8C9C0',
        'fog-white': '#E8EDE9',
        'moss': '#4A6741',
        'bark': '#5C4A35',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
      animation: {
        'fog-clear': 'fogClear 0.7s ease-out forwards',
      },
      keyframes: {
        fogClear: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
