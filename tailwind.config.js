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
          obsidian: '#15110E',
          espresso: '#241B16',
          cream: '#F8F2EA',
          parchment: '#EFE3D2',
          silk: '#FFF9F1',
          gold: '#B98B4B',
          bronze: '#7B5630',
          muted: '#7C6B5D',
        },
      },
      fontFamily: {
        serifDisplay: ['Cormorant Garamond', 'Georgia', 'serif'],
        sansBody: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        nav: '0.18em',
        product: '0.16em',
      },
      boxShadow: {
        editorial: '0 24px 70px rgba(36, 27, 22, 0.14)',
        softGold: '0 16px 42px rgba(185, 139, 75, 0.18)',
      },
      animation: {
        fadeUp: 'fadeUp 0.75s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
