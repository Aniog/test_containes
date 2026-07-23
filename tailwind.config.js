/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: '#F5F0EB',
        background: '#1C1C1E',
        card: '#2A2A2C',
        'card-foreground': '#F5F0EB',
        primary: '#C9A96E',
        'primary-foreground': '#1C1C1E',
        muted: '#2A2A2C',
        'muted-foreground': '#8A8580',
        border: '#3A3A3C',
        accent: '#EDE8E0',
        'accent-foreground': '#1C1C1E',
        'muted-gold': '#A68B4B',
        'soft-ivory': '#EDE8E0',
        'light-gray': '#B5AFA8',
        'dark-gray': '#2A2A2C',
        'rose-gold': '#D4A574',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'brand': '0.3em',
        'product': '0.2em',
        'nav': '0.15em',
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
