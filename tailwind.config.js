/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velmora: {
          parchment: '#f5efe7',
          sand: '#efe4d6',
          mist: '#fbf7f1',
          ink: '#201a17',
          muted: '#625651',
          gold: '#c8a66a',
          ivory: '#f8f1e6',
          line: 'rgba(32, 26, 23, 0.12)',
        },
      },
      boxShadow: {
        velmora: '0 24px 60px rgba(32, 26, 23, 0.16)',
        'velmora-soft': '0 16px 36px rgba(32, 26, 23, 0.09)',
      },
      letterSpacing: {
        luxury: '0.24em',
        'luxury-tight': '0.18em',
      },
    },
  },
  plugins: [],
}
