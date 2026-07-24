/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette — warm, refined, luxury
        cream: {
          50: '#FEFCF9',
          100: '#FAF7F2',
          200: '#F5F0E8',
          300: '#EDE6D9',
          400: '#DDD4C3',
        },
        charcoal: {
          DEFAULT: '#1A1817',
          light: '#2C2825',
          medium: '#3D3531',
          muted: '#6B5E4C',
        },
        gold: {
          DEFAULT: '#C9A96E',
          light: '#D4B87A',
          dark: '#B8960F',
          50: '#FBF6EC',
          100: '#F5EDD8',
          200: '#EDDEBB',
          300: '#D4B87A',
          400: '#C9A96E',
          500: '#B8960F',
          600: '#A07C00',
          700: '#7D6200',
        },
        taupe: {
          DEFAULT: '#8B7D6B',
          light: '#A69882',
          dark: '#6F6354',
        },
        ivory: {
          DEFAULT: '#FFFEF9',
          warm: '#FDF8F0',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.05', letterSpacing: '0.04em', fontWeight: '300' }],
        'headline': ['2.75rem', { lineHeight: '1.15', letterSpacing: '0.03em', fontWeight: '300' }],
        'section': ['2rem', { lineHeight: '1.2', letterSpacing: '0.03em', fontWeight: '400' }],
        'sub': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0.01em', fontWeight: '400' }],
        'body': ['0.9375rem', { lineHeight: '1.6', letterSpacing: '0.01em', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.06em', fontWeight: '500' }],
        'nav': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.1em', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
      },
      borderRadius: {
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '6px',
        'lg': '8px',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(26,24,23,0.04), 0 1px 2px -1px rgba(26,24,23,0.06)',
        'card-hover': '0 4px 12px 0 rgba(26,24,23,0.08), 0 2px 4px -2px rgba(26,24,23,0.05)',
        'drawer': '0 20px 60px -12px rgba(26,24,23,0.25)',
        'soft': '0 2px 8px rgba(26,24,23,0.06)',
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'super-wide': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.35s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
