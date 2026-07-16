/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velmora Fine Jewelry - Quiet Luxury Palette
        base: {
          50: '#FAF8F5',
          100: '#F8F5F1',
          200: '#F0EBE3',
          300: '#E5DDD1',
          400: '#D4C9B8',
          500: '#B8A48F',
          600: '#8C7660',
          700: '#5C4E42',
          800: '#3D332B',
          900: '#1C1917',
        },
        gold: {
          50: '#FBF8F3',
          100: '#F5EDE0',
          200: '#E8D5B8',
          300: '#D9B98A',
          400: '#C9A06A',
          500: '#B89778',
          600: '#A07F5A',
          700: '#7D6145',
          800: '#5C4733',
          900: '#3D2F22',
        },
        accent: '#B89778',
        'accent-dark': '#A07F5A',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.15em',
        'wider': '0.1em',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
