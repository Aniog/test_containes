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
          espresso: '#211712',
          ivory: '#F8F2E8',
          champagne: '#E8D6BA',
          champagneDeep: '#B79D77',
          gold: '#B4874B',
          burnished: '#7A552D',
          clay: '#B98272',
          ink: '#32231C',
          taupe: '#7E6D61',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(33, 23, 18, 0.12)',
        glow: '0 18px 60px rgba(180, 135, 75, 0.22)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease both',
        'soft-pulse': 'softPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        softPulse: {
          '0%, 100%': { opacity: '0.68' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
