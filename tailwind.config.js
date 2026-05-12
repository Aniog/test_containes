/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmos: {
          void:    '#0B0E14',
          deep:    '#0D1117',
          charcoal:'#121212',
          surface: '#161B27',
          card:    '#1A2035',
          border:  '#252D42',
          muted:   '#3A4460',
          text:    '#C8D0E0',
          subtle:  '#8892A4',
        },
        amber: {
          glow:   '#F5A623',
          bright: '#FFB84D',
          soft:   '#E8943A',
          dim:    '#7A4F1A',
        },
        star: {
          white:  '#F0F4FF',
          blue:   '#A8C4FF',
          purple: '#C4A8FF',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cosmos': 'linear-gradient(135deg, #0B0E14 0%, #0D1117 50%, #0B0E14 100%)',
      },
      animation: {
        'pulse-slow':   'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':        'float 6s ease-in-out infinite',
        'glow':         'glow 2s ease-in-out infinite alternate',
        'fade-in-up':   'fadeInUp 0.8s ease-out forwards',
        'fade-in':      'fadeIn 1s ease-out forwards',
        'shimmer':      'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 20px rgba(245,166,35,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(245,166,35,0.7)' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'amber-glow':  '0 0 30px rgba(245,166,35,0.4)',
        'amber-soft':  '0 0 15px rgba(245,166,35,0.2)',
        'card-cosmos': '0 4px 32px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.05)',
        'inner-glow':  'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
}
