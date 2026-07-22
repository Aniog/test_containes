/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F5F1EC',
          300: '#EDE7DD',
          400: '#DED2C3',
          500: '#C9B8A0',
        },
        charcoal: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#6D6D6D',
          600: '#5D5D5D',
          700: '#4F4F4F',
          800: '#3D3D3D',
          900: '#2A2A2A',
          950: '#1A1A1A',
        },
        gold: {
          50: '#FDF9F0',
          100: '#F9F0D9',
          200: '#F2DEB0',
          300: '#E8C77A',
          400: '#D4A84B',
          500: '#C4952E',
          600: '#A67622',
          700: '#8A5F1F',
          800: '#734D20',
          900: '#614019',
        },
        champagne: '#C4952E',
        warmblack: '#1A1815',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'extra-wide': '0.15em',
      },
    },
  },
  plugins: [],
}
