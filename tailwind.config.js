/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: '#23191b',
          ivory: '#f6f1eb',
          panel: '#efe5d9',
          gold: '#c9a56a',
          mist: '#d8ccbf',
          muted: '#6f5f60',
          soft: '#e7d9cc',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        velmora: '0.24em',
      },
      boxShadow: {
        velmora: '0 18px 45px rgba(35, 25, 27, 0.08)',
        soft: '0 12px 30px rgba(35, 25, 27, 0.06)',
      },
      backgroundImage: {
        'velmora-fade':
          'linear-gradient(180deg, rgba(35,25,27,0.08) 0%, rgba(35,25,27,0.74) 100%)',
        'velmora-panel':
          'linear-gradient(135deg, rgba(239,229,217,0.92) 0%, rgba(246,241,235,1) 100%)',
      },
    },
  },
  plugins: [],
}
