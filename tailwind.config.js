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
          // Deep warm base — nearly black with brown warmth
          base: '#1A1512',
          // Warm off-white / cream editorial backgrounds
          cream: '#FBF7F2',
          // Warm mid-tone beige
          sand: '#E8DFD5',
          // Warm darker beige for subtle accents
          taupe: '#B8A99A',
          // Gold accent — warm metallic
          gold: '#C49A3C',
          // Darker gold for hover states
          'gold-dark': '#A07828',
          // Soft white
          white: '#FFFDFA',
          // Muted warm gray for body text
          muted: '#8B8076',
          // Dark text
          text: '#2C2621',
          // Border / hairline
          border: '#D9D0C5',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        'extra-wide': '0.35em',
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '0.01em' }],
        'section': ['clamp(2rem, 3.5vw, 3rem)', { lineHeight: '1.15' }],
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
