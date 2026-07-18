/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: '#241A16',
          espresso: '#3A2923',
          cream: '#F7F0E7',
          parchment: '#EFE2D3',
          linen: '#FBF7F1',
          gold: '#B88945',
          champagne: '#D8B982',
          rose: '#8D5D4F',
          muted: '#75665F',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(36, 26, 22, 0.10)',
        glow: '0 18px 50px rgba(184, 137, 69, 0.22)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
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
