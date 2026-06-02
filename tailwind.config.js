/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#111111',
        obsidian: '#1A1A1A',
        deep: '#222222',
        shadow: '#333333',
        iron: '#444444',
        mid: '#777777',
        ash: '#999999',
        concrete: '#AAAAAA',
        pale: '#BBBBBB',
        'light-grey': '#CCCCCC',
        ghost: '#DDDDDD',
        chalk: '#EEEEEE',
        'white-raw': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      letterSpacing: {
        'widest-2': '0.2em',
        'widest-3': '0.3em',
        'widest-4': '0.4em',
      },
      transitionDuration: {
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
}
