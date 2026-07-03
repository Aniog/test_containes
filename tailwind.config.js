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
        ink: '#1c1917',
        'ink-secondary': '#78716c',
        'ink-muted': '#a8a29e',
        accent: '#b8860b',
        'accent-soft': '#f5ecd7',
        border: '#e7e5e4',
        'border-soft': '#f0ece6',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(28, 25, 23, 0.08)',
        glow: '0 20px 50px -14px rgba(184, 134, 11, 0.18)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideIn: 'slideIn 0.35s ease-out forwards',
      },
    },
  },
  plugins: [],
}
