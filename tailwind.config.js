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
          black:    '#1a1614',
          charcoal: '#2d2926',
          brown:    '#3d3330',
          stone:    '#8c7b6e',
          sand:     '#c4b09a',
          gold:     '#c9a96e',
          'gold-light': '#e8d5b0',
          blush:    '#e8d5c4',
          cream:    '#f5f0e8',
          ivory:    '#faf7f2',
        },
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
