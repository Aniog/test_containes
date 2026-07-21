/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvet: {
          50: '#FAF7F2',
          100: '#F5F0E7',
          200: '#EBE4D6',
          300: '#D9CEB8',
          400: '#C4A265',
          500: '#B89347',
          600: '#A07D36',
          700: '#80632B',
          800: '#5C4720',
          900: '#3D2F15',
          950: '#1A1715',
        },
        gold: {
          50: '#FDF9F2',
          100: '#F9F0DF',
          200: '#F0DEB3',
          300: '#E5C87D',
          400: '#D4B87A',
          500: '#C4A265',
          600: '#B89347',
          700: '#9A7936',
          800: '#7D6230',
          900: '#65502B',
        },
        warm: {
          50: '#FAF8F6',
          100: '#F5F1EC',
          200: '#EBE5DC',
          300: '#D9D0C2',
          400: '#B8AD9D',
          500: '#8B857D',
          600: '#6E6860',
          700: '#4E4943',
          800: '#2C2824',
          900: '#1A1715',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        wider: '0.15em',
        wide: '0.08em',
      },
    },
  },
  plugins: [],
}
