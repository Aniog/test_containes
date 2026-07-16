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
          50: '#FEFCF9',
          100: '#FDF8F0',
          200: '#FAF3E8',
          300: '#F5EBD9',
          400: '#EDDFC5',
        },
        charcoal: {
          50: '#F5F4F3',
          100: '#E8E6E3',
          200: '#D1CEC9',
          300: '#A9A59E',
          400: '#7D7870',
          500: '#5C5750',
          600: '#3D3933',
          700: '#2C2821',
          800: '#1E1B16',
          900: '#121010',
        },
        gold: {
          50: '#FBF7EF',
          100: '#F5EDD8',
          200: '#ECDBB2',
          300: '#DFC486',
          400: '#D4AF6A',
          500: '#C9A055',
          600: '#B8893E',
          700: '#996F32',
          800: '#7D5A2A',
          900: '#5E4320',
        },
        rose: {
          50: '#FDF5F3',
          100: '#FCE8E3',
          200: '#FADBD3',
          300: '#F5C0B3',
          400: '#E9988A',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.2em',
        'nav': '0.15em',
        'wide-xl': '0.3em',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(44, 40, 33, 0.08), 0 4px 6px -4px rgba(44, 40, 33, 0.04)',
        'card': '0 4px 25px -5px rgba(44, 40, 33, 0.06)',
        'elevated': '0 10px 40px -10px rgba(44, 40, 33, 0.12)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
