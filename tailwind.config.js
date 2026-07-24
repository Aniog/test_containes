/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        champagne: '#E8DCC4',
        sand: '#D9C9AE',
        hairline: '#E0D6C7',
        muted: '#8A7B6E',
        ink: '#1F1815',
        'ink-soft': '#3A2E26',
        gold: {
          DEFAULT: '#A67C3D',
          deep: '#7A5A2A',
          soft: '#C9A876',
        },
        blush: '#D4A89C',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.75rem, 6vw, 4.75rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'hero': ['clamp(2.25rem, 5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
      },
      letterSpacing: {
        'wider-2': '0.18em',
        'widest-2': '0.32em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(31,24,21,0.04), 0 4px 12px rgba(31,24,21,0.04)',
        'soft-lg': '0 8px 32px rgba(31,24,21,0.08)',
        'gold-glow': '0 0 0 1px rgba(166,124,61,0.2)',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 600ms cubic-bezier(0.4, 0, 0.2, 1) both',
        'slide-up': 'slideUp 600ms cubic-bezier(0.4, 0, 0.2, 1) both',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
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
