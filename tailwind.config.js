/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EF',
          200: '#F5EDE0',
          300: '#EDE3CF',
        },
        warmstone: {
          50: '#F8F7F5',
          100: '#EFECEA',
          200: '#DED8D3',
          300: '#C8BFB7',
          400: '#B19E91',
          500: '#9A8574',
          600: '#7D6B5D',
          700: '#5C4F46',
          800: '#3D3330',
          900: '#1F1A18',
        },
        gold: {
          50: '#FDF9EF',
          100: '#FAF0D4',
          200: '#F5E0A8',
          300: '#EFCB71',
          400: '#E8B03A',
          500: '#D4A012',
          600: '#B07D0A',
          700: '#805808',
          800: '#523B08',
          900: '#2B2006',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#666666',
          600: '#4A4A4A',
          700: '#333333',
          800: '#1A1A1A',
          900: '#0D0D0D',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'extra-wide': '0.15em',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
