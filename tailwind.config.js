/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette - warm quiet luxury
        bone: {
          DEFAULT: '#F5F0E8',
          50: '#FBF8F3',
          100: '#F8F3EB',
          200: '#F5F0E8',
          300: '#EBE3D6',
        },
        cream: {
          DEFAULT: '#FAF6EF',
          dark: '#EFE7D8',
        },
        ink: {
          DEFAULT: '#1F1A14',
          900: '#0F0D09',
          800: '#1F1A14',
          700: '#2D2620',
          600: '#4A3F33',
        },
        cocoa: {
          DEFAULT: '#6B5C4F',
          light: '#8A7A6B',
        },
        gold: {
          DEFAULT: '#B08A4A',
          deep: '#8A6A35',
          light: '#D9B97A',
          soft: '#E6D2A8',
        },
        rose: {
          DEFAULT: '#C9A38A',
          deep: '#A07D62',
        },
        hairline: 'rgba(31, 26, 20, 0.12)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'wide-2': '0.12em',
        'wide-3': '0.18em',
        'wide-4': '0.25em',
        'wide-5': '0.32em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(31, 26, 20, 0.04), 0 8px 24px rgba(31, 26, 20, 0.06)',
        'lift': '0 4px 8px rgba(31, 26, 20, 0.04), 0 16px 40px rgba(31, 26, 20, 0.10)',
        'drawer': '-12px 0 40px rgba(31, 26, 20, 0.18)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'drawer-in': 'drawerIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'marquee': 'marquee 40s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawerIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
