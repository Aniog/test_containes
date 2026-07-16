/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep warm charcoal base
        obsidian: {
          DEFAULT: '#1C1917',
          50: '#F5F4F3',
          100: '#E8E5E2',
          200: '#D1CBC5',
          300: '#B5ACA3',
          400: '#948880',
          500: '#736660',
          600: '#5A4F4A',
          700: '#3D3532',
          800: '#2A2320',
          900: '#1C1917',
        },
        // Warm gold accent
        gold: {
          DEFAULT: '#C9A96E',
          light: '#E8D5A3',
          muted: '#B8935A',
          pale: '#F5EDD8',
          warm: '#D4B483',
        },
        // Soft cream / ivory
        cream: {
          DEFAULT: '#FAF7F2',
          warm: '#F5EFE4',
          deep: '#EDE4D4',
        },
        // Muted rose for accents
        blush: {
          DEFAULT: '#E8D5C4',
          light: '#F5EDE4',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        'ultra-wide': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'drawer-in': 'drawerIn 0.35s ease-out',
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
        drawerIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
