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
          espresso: '#17100d',
          ink: '#2b211d',
          ivory: '#fbf7ef',
          sand: '#efe3d1',
          champagne: '#c9a35c',
          taupe: '#8c7a68',
          rose: '#d8b8a7',
        },
      },
      fontFamily: {
        serifDisplay: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        velmoraSoft: '0 24px 80px rgba(23, 16, 13, 0.10)',
        velmoraLift: '0 18px 50px rgba(23, 16, 13, 0.16)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marqueeSoft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-18px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease both',
        marqueeSoft: 'marqueeSoft 2.8s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
