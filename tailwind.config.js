/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#221c19',
        walnut: '#2d2521',
        ivory: '#f7f1ea',
        champagne: '#efe4d7',
        umber: '#2f241f',
        pearl: '#f6efe6',
        taupe: '#8d7566',
        gold: '#ba9560',
        'gold-deep': '#9b7745',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 48px rgba(34, 28, 25, 0.12)',
        luxe: '0 24px 80px rgba(13, 10, 8, 0.28)',
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      borderColor: {
        hairline: 'rgba(47, 36, 31, 0.12)',
        'hairline-light': 'rgba(246, 239, 230, 0.16)',
      },
    },
  },
  plugins: [],
}
