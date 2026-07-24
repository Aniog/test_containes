/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FEFCF8',
          100: '#FAF7F2',
          200: '#F5F0E8',
          300: '#EDE6D9',
          400: '#DDD4C3',
        },
        charcoal: {
          DEFAULT: '#1A1611',
          50: '#F5F4F2',
          100: '#E8E6E2',
          200: '#D1CEC8',
          300: '#A39E94',
          400: '#7A756B',
          500: '#5A5549',
          600: '#3D392F',
          700: '#2A2519',
          800: '#1A1611',
          900: '#0F0D0A',
        },
        gold: {
          DEFAULT: '#C9A96E',
          light: '#D4BA85',
          dark: '#B89555',
          muted: '#E8D9B5',
          50: '#FDF8EF',
          100: '#F9F0DD',
          200: '#F1DFB8',
          300: '#E8D9B5',
          400: '#D4BA85',
          500: '#C9A96E',
          600: '#B89555',
          700: '#9A7A3E',
          800: '#7D6230',
          900: '#5E4A24',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'mega-wide': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'luxury': '0 4px 24px rgba(26, 22, 17, 0.08)',
        'luxury-lg': '0 8px 40px rgba(26, 22, 17, 0.12)',
        'luxury-xl': '0 16px 64px rgba(26, 22, 17, 0.16)',
        'gold-glow': '0 4px 24px rgba(201, 169, 110, 0.3)',
      },
    },
  },
  plugins: [],
}
