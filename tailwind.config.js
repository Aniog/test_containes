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
          DEFAULT: '#FAF7F2',
          50: '#FDFCFA',
          100: '#FAF7F2',
          200: '#F5F0E8',
        },
        gold: {
          light: '#D4B896',
          DEFAULT: '#C4A265',
          dark: '#8B6914',
          warm: '#B8956B',
        },
        espresso: {
          DEFAULT: '#2C2420',
          light: '#3D322C',
        },
        taupe: {
          DEFAULT: '#6B5B4F',
          light: '#8B7B6F',
        },
        linen: {
          DEFAULT: '#E8E0D5',
          light: '#F0E8DD',
        },
        charcoal: {
          DEFAULT: '#1A1816',
          light: '#2A2826',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-out-right': 'slideOutRight 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'shimmer': 'shimmer 2s infinite linear',
        'pulse-soft': 'pulseSoft 2s infinite ease-in-out',
        'bounce-soft': 'bounceSoft 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'translateY(0)' },
          '50%': { opacity: '0.7', transform: 'translateY(4px)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(44, 36, 32, 0.07), 0 10px 20px -2px rgba(44, 36, 32, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(44, 36, 32, 0.1), 0 20px 25px -5px rgba(44, 36, 32, 0.05)',
        'gold': '0 4px 14px 0 rgba(196, 162, 101, 0.25)',
      },
    },
  },
  plugins: [],
}
