/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          50:  '#F4F1EA',
          100: '#E9E3D6',
          200: '#D6CDB8',
          700: '#1B3551',
          800: '#11253A',
          900: '#0B1A2A',
          950: '#06121E',
        },
        copper: {
          100: '#F0E5C9',
          200: '#E2D2A4',
          500: '#C8A45D',
          600: '#A8863F',
          700: '#8A6B2E',
        },
        steel: {
          400: '#7A8898',
          500: '#5A6B7D',
          600: '#43526A',
          700: '#324050',
        },
        paper:  '#FFFFFF',
        line:   '#E2DCCD',
        'line-dark': '#1F3854',
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '88rem',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(11, 26, 42, 0.04), 0 8px 24px rgba(11, 26, 42, 0.06)',
        'lift': '0 4px 12px rgba(11, 26, 42, 0.08), 0 20px 40px rgba(11, 26, 42, 0.10)',
      },
      letterSpacing: {
        'widest-2': '0.22em',
      },
    },
  },
  plugins: [],
}
