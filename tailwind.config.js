/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#FAF8F5',
        surface: '#FFFFFF',
        primary: '#1A1A1A',
        secondary: '#6B6B6B',
        muted: '#9E9E9E',
        accent: '#B76E3E',
        'accent-hover': '#9A5A30',
        dark: '#1A1A1A',
        'dark-text': '#FAF8F5',
        hairline: '#E5E0DA',
        star: '#C4956A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.15em',
        wider: '0.1em',
        wide: '0.05em',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
