/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF8F2',
        cream: '#F4ECDF',
        espresso: {
          DEFAULT: '#1B1410',
          soft: '#3A2E25',
        },
        gold: {
          DEFAULT: '#B08A52',
          deep: '#8C6A3D',
          soft: '#D9C39A',
        },
        taupe: '#8A7C6A',
        hairline: '#E4D9C6',
        noir: {
          DEFAULT: '#0E0A07',
          soft: '#1A1410',
        },
        danger: '#9B2C1F',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider2: '0.18em',
        widest2: '0.22em',
        widest3: '0.32em',
      },
      maxWidth: {
        page: '1440px',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(27,20,16,0.06)',
        elev: '0 18px 50px rgba(27,20,16,0.10)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'drawer-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
        'drawer-in': 'drawer-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
