/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora-obsidian': '#1A1614',
        'velmora-charcoal': '#2C2420',
        'velmora-stone': '#F5F0EB',
        'velmora-cream': '#FAF7F4',
        'velmora-gold': '#C9A96E',
        'velmora-gold-light': '#E8D5A3',
        'velmora-gold-dark': '#A07840',
        'velmora-ink': '#1A1614',
        'velmora-muted': '#7A6E68',
        'velmora-whisper': '#B8AFA9',
        'velmora-border': '#E8E0D8',
        'velmora-surface': '#FFFFFF',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInFast: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-out forwards',
        fadeInFast: 'fadeInFast 0.3s ease-out forwards',
        slideInRight: 'slideInRight 0.35s ease-out forwards',
      },
    },
  },
  plugins: [],
}
