/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F2EA',
        surface: '#FBF7F1',
        panel: '#EFE5D8',
        border: '#D8CAB8',
        ink: '#251B16',
        truffle: '#4E3D34',
        muted: '#7B6A5D',
        accent: '#B89465',
        'accent-deep': '#8E6A3A',
        'accent-soft': '#E2D2BA',
        cream: '#FFFDF9',
        shadow: '#1E1510',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px -30px rgba(37, 27, 22, 0.22)',
        card: '0 14px 45px -25px rgba(37, 27, 22, 0.18)',
      },
      letterSpacing: {
        brand: '0.32em',
        product: '0.24em',
        micro: '0.18em',
      },
      aspectRatio: {
        reel: '9 / 16',
        editorial: '4 / 5',
        card: '3 / 4',
      },
    },
  },
  plugins: [],
}
