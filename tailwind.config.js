/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saddle: '#8B4513',
        chestnut: '#954535',
        cream: '#FDF6E3',
        hay: '#D4A853',
        forest: '#2D4A2D',
        bark: '#5C3D1E',
        mist: '#F0EAD6',
        'stone-custom': '#8C7B6B',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
