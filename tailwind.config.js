/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0C0B0A',
        surface: '#181615',
        'surface-2': '#23201E',
        foreground: '#F6F2ED',
        muted: '#B0A69B',
        hairline: 'rgba(246, 242, 237, 0.12)',
        accent: '#B76E4A',
        'accent-hover': '#C9815A',
        'accent-foreground': '#FFFFFF',
        gold: '#C9A86C',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
