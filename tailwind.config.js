/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f6f4f0',
        surface: '#ffffff',
        'surface-warm': '#f1ece4',
        ink: '#1c1917',
        'ink-secondary': '#78716c',
        'ink-muted': '#a8a29e',
        accent: '#b8860b',
        'accent-soft': '#d4af37',
        border: '#e7e5e4',
        'border-soft': '#f0ece6',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 20px 60px rgba(0,0,0,0.08)',
        'soft-lg': '0 25px 80px rgba(0,0,0,0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
