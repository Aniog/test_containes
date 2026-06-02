/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: '#7A9E7E',
        'deep-sage': '#4E6E52',
        clay: '#F5F0E8',
        parchment: '#EDE6D6',
        ink: '#1C1C1A',
        'muted-ink': '#5A5A54',
        divider: '#D8D0C0',
        'neo-red': '#EB1B1A',
        'neo-green': '#4DDB1A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'phi': '1.618rem',
        'phi-2': '2.618rem',
        'phi-3': '4.236rem',
        'phi-4': '6.854rem',
      },
      transitionTimingFunction: {
        'natural': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
