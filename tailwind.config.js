/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette — quiet luxury
        espresso:   '#1C1410',
        charcoal:   '#2A2420',
        bark:       '#3D3028',
        stone:      '#7A6E65',
        parchment:  '#F5F0E8',
        cream:      '#FAF7F2',
        ivory:      '#FFFDF9',
        // Gold accent
        gold:       '#C9A96E',
        'gold-light': '#DFC08A',
        'gold-dark':  '#A8854A',
        // Utility
        mist:       '#E8E2D9',
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
