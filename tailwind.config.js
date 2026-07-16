/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian:   '#1A1714',
        espresso:   '#2C2420',
        parchment:  '#F5F0E8',
        cream:      '#FAF7F2',
        gold:       '#C9A96E',
        'gold-light': '#E8D5A3',
        'gold-dark':  '#A07840',
        mink:       '#8B7355',
        stone:      '#6B5E52',
        blush:      '#E8DDD4',
        charcoal:   '#3D3530',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        manrope:   ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
      },
    },
  },
  plugins: [],
}
