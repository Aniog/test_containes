/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        ivory: '#F5F0E8',
        accent: {
          DEFAULT: '#C9A96E',
          hover: '#D4B87A',
          dark: '#A88B4A',
          foreground: '#FFFFFF',
        },
        surface: {
          dark: '#1C1917',
          'dark-foreground': '#FAF7F2',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'product': '0.15em',
        'nav': '0.12em',
        'widest-custom': '0.2em',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}
