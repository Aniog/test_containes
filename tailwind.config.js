/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C9A84C',
          'gold-light': '#E8D48B',
          'gold-dark': '#A8882E',
          cream: '#FAF7F2',
          charcoal: '#1C1C1C',
          'charcoal-light': '#2A2A2A',
          stone: '#8B8580',
          'stone-light': '#B8B0A8',
          ivory: '#F5F0EB',
          rose: '#E8C4C4',
        },
        background: '#FAF7F2',
        foreground: '#1C1C1C',
        muted: {
          DEFAULT: '#F0EBE4',
          foreground: '#8B8580',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1C1C1C',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#1C1C1C',
        },
        border: '#E5DDD4',
        input: '#E5DDD4',
        accent: {
          DEFAULT: '#C9A84C',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F0EBE4',
          foreground: '#2A2A2A',
        },
        destructive: {
          DEFAULT: '#C44A4A',
          foreground: '#FAFAFA',
        },
        ring: '#C9A84C',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.2em',
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      height: {
        '18': '4.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
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
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
