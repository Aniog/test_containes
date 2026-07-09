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
          bg: '#FAF8F5',
          'bg-warm': '#F5F2EE',
          text: '#1C1917',
          muted: '#78716C',
          accent: '#A97142',
          'accent-hover': '#8C5A32',
          dark: '#292524',
          'dark-text': '#FAF8F5',
          border: '#E7E5E4',
          'border-strong': '#D6D3D1',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.22em',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(28, 25, 23, 0.08)',
        'soft-hover': '0 14px 50px -12px rgba(28, 25, 23, 0.12)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
