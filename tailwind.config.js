/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#faf8f5',
        foreground: '#1a1a1a',
        muted: '#f2efe9',
        'muted-foreground': '#6b6760',
        accent: '#bfa06b',
        'accent-hover': '#a78957',
        'accent-foreground': '#ffffff',
        card: '#ffffff',
        'card-foreground': '#1a1a1a',
        border: '#e8e3db',
        'border-strong': '#d6d0c6',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.22em',
        wide: '0.12em',
      },
      boxShadow: {
        soft: '0 8px 32px rgba(26, 26, 26, 0.06)',
        lifted: '0 16px 48px rgba(26, 26, 26, 0.10)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
