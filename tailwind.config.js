/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: '#201815',
          espresso: '#342722',
          cream: '#f7f0e6',
          ivory: '#fbf7f1',
          sand: '#d9cab6',
          taupe: '#8f7d69',
          gold: '#b38b4d',
          goldSoft: '#d8bc87',
          mist: '#efe5d8',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        product: '0.3em',
      },
      boxShadow: {
        velmora: '0 20px 60px rgba(32, 24, 21, 0.12)',
        'velmora-soft': '0 12px 30px rgba(32, 24, 21, 0.08)',
      },
      backgroundImage: {
        'velmora-glow': 'radial-gradient(circle at top, rgba(216, 188, 135, 0.24), transparent 50%)',
      },
    },
  },
  plugins: [],
}
