/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: '#FAF7F2',
        linen: '#EFE8DD',
        sand: '#E2D6C5',
        espresso: '#1B1410',
        mink: '#6B5D4F',
        stone: '#9A8B7A',
        gold: '#B08968',
        'gold-deep': '#8C6B4A',
        'gold-soft': '#D9C2A1',
        cream: '#F4ECDF',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wider-2': '0.18em',
        'widest-2': '0.24em',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) both',
        'fade-in': 'fade-in 0.5s ease-out both',
        'shimmer': 'shimmer 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
