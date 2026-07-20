/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora palette — deep warm charcoal base + champagne gold accents
        velvet:    '#1A1714',   // near-black warm base
        obsidian:  '#0F0D0C',   // deepest bg
        charcoal:  '#2C2825',   // card bg
        mist:      '#F5F0EB',   // warm off-white
        parchment: '#EDE6DC',   // section bg
        champagne: '#C9A96E',   // primary gold accent
        gold:      '#B8924A',   // deeper gold
        goldLight: '#E2C98A',   // light gold highlight
        stone:     '#8A7F74',   // muted text
        smoke:     '#D4CCC4',   // hairline dividers
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
