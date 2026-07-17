/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora palette: deep espresso base + warm champagne/gold accents
        velvet:    '#1A1410',   // near-black warm base
        espresso:  '#2C2118',   // dark brown
        bark:      '#4A3728',   // mid brown
        sand:      '#C8A97E',   // warm champagne gold
        champagne: '#E8D5B0',   // light champagne
        cream:     '#F7F2EA',   // off-white warm
        ivory:     '#FDFAF5',   // near-white
        gold:      '#B8924A',   // accent gold
        'gold-light': '#D4AF6E',// lighter gold
        mist:      '#8A7B6E',   // muted warm gray
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
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
