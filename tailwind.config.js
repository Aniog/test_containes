/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme 1 – Warm & Artisan (original)
        cream: '#FDF6EC',
        'warm-white': '#FFFDF8',
        brown: '#5C3D2E',
        'brown-dark': '#3B2314',
        'brown-light': '#8B6347',
        amber: '#D4873A',
        'amber-light': '#F2C07E',
        sage: '#7A8C6E',

        // Theme 2 – Soft & Pastel (Home)
        pastel: {
          bg: '#FDF0F5',
          card: '#FAE8F0',
          accent: '#C9728A',
          'accent-light': '#E8A8BC',
          text: '#4A2535',
          muted: '#9B7A8A',
          heading: '#3D1A2E',
          lavender: '#EDE8F5',
        },

        // Theme 3 – Dark & Moody (Menu)
        moody: {
          bg: '#160C07',
          surface: '#241208',
          card: '#321A0C',
          gold: '#C9963A',
          'gold-light': '#E8C07A',
          cream: '#F0E6D3',
          muted: '#9A7A58',
        },

        // Theme 4 – Fresh & Natural (Articles)
        natural: {
          bg: '#F2F5EE',
          card: '#FFFFFF',
          sage: '#4E7A52',
          'sage-light': '#A8C4A8',
          terra: '#C4622D',
          'terra-light': '#E8A070',
          text: '#1E3020',
          muted: '#5A7060',
        },

        // Theme 5 – Classic B&W with Pop (About)
        pop: {
          bg: '#F7F7F7',
          card: '#FFFFFF',
          black: '#111111',
          gray: '#444444',
          muted: '#888888',
          red: '#D42020',
          'red-light': '#F06060',
        },

        // Theme 6 – Vintage Retro (Contact)
        retro: {
          bg: '#FFF5E6',
          card: '#FDE8D4',
          teal: '#1E6B6B',
          'teal-light': '#4A9A9A',
          mustard: '#C8920A',
          'mustard-light': '#E8B840',
          text: '#3D1E08',
          muted: '#8B6040',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
