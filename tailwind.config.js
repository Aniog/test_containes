/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FBF8F3',
          100: '#F6F0E6',
          200: '#EFE5D2',
          300: '#E2D2B3',
        },
        ink: {
          DEFAULT: '#1A1410',
          900: '#100B08',
          800: '#1A1410',
          700: '#2A221B',
          600: '#4A3F33',
          500: '#6B6258',
          400: '#8A8278',
          300: '#A89E92',
        },
        gold: {
          DEFAULT: '#B68B4F',
          50: '#F4EAD9',
          100: '#E8D4B0',
          200: '#D6B884',
          300: '#C49C5E',
          400: '#B68B4F',
          500: '#9A7340',
          600: '#7A5A30',
          700: '#5A4220',
        },
        sand: '#D9C8B0',
        cream: '#F2EADB',
        rust: '#8B4A2B',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(26, 20, 16, 0.04), 0 8px 24px rgba(26, 20, 16, 0.06)',
        lift: '0 8px 30px rgba(26, 20, 16, 0.10)',
        'gold-glow': '0 0 0 1px rgba(182, 139, 79, 0.25), 0 12px 32px rgba(182, 139, 79, 0.18)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out both',
        'fade-up': 'fadeUp 0.9s ease-out both',
        'slow-zoom': 'slowZoom 18s ease-in-out infinite alternate',
        shimmer: 'shimmer 2.4s linear infinite',
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
