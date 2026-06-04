/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canopy: {
          deep: '#1A2421',
          shadow: '#141D1A',
          moss: '#2A3A2F',
          bark: '#3D2B1F',
        },
        mist: {
          DEFAULT: '#8B9D95',
          light: '#C4CFC9',
          pale: '#DEE5E1',
          heavy: '#6B7D75',
        },
        fog: {
          DEFAULT: 'rgba(196, 207, 201, 0.85)',
          light: 'rgba(196, 207, 201, 0.5)',
          heavy: 'rgba(196, 207, 201, 0.95)',
        },
        stone: '#5C5C5C',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
      },
      borderRadius: {
        rugged: '3px',
      },
      borderWidth: {
        rugged: '2px',
      },
    },
  },
  plugins: [],
}
