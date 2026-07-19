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
          base: '#FAF8F5',
          surface: '#FFFFFF',
          text: '#1A1A1A',
          muted: '#6B6560',
          divider: '#E8E4DF',
          accent: '#B88A5E',
          'accent-dark': '#8C6A45',
          'accent-light': '#F5EDE3',
          dark: '#1C1917',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.2em',
        'ultra': '0.3em',
      }
    },
  },
  plugins: [],
}
