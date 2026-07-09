/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          cream:   '#FBF7F4',
          sand:    '#EDE4DB',
          gold:    '#C8A96E',
          'gold-light': '#E8D5B0',
          bronze:  '#8B734A',
          charcoal:'#2C2C2C',
          smoke:   '#5C5C5C',
          stone:   '#9A9A9A',
          border:  '#E0D8D0',
          surface: '#F5F1EC',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.18em',
      },
    },
  },
  plugins: [],
}
