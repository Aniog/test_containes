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
          ink: '#191613',
          espresso: '#2A211B',
          cream: '#F8F1E7',
          linen: '#EFE3D2',
          parchment: '#FCF8F1',
          gold: '#B98745',
          bronze: '#7A5730',
          rose: '#C8A28D',
          mist: '#D8C8B7',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        velvet: '0 24px 70px rgba(42, 33, 27, 0.14)',
        jewel: '0 18px 44px rgba(42, 33, 27, 0.12)',
      },
      spacing: {
        18: '4.5rem',
        drawer: '28rem',
      },
      fontSize: {
        nano: ['0.65rem', { lineHeight: '0.9rem' }],
        micro: ['0.68rem', { lineHeight: '1rem' }],
        trust: ['0.7rem', { lineHeight: '1rem' }],
      },
      aspectRatio: {
        portrait: '3 / 4',
        editorial: '4 / 5',
        landscape: '4 / 3',
        reel: '9 / 16',
      },
      gridTemplateColumns: {
        footer: '1.2fr 2fr',
        newsletter: '1fr 1.1fr',
        shop: '17rem 1fr',
        product: '1.1fr 0.9fr',
        gallery: '5rem 1fr',
      },
      letterSpacing: {
        jewel: '0.22em',
        brand: '0.18em',
        luxe: '0.16em',
      },
    },
  },
  plugins: [],
}
