/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F5F1',
        foreground: '#2C1A12',
        card: '#FFFFFF',
        'card-foreground': '#2C1A12',
        muted: '#EAE3DA',
        'muted-foreground': '#7A6B5F',
        accent: '#B8926A',
        'accent-foreground': '#FFFFFF',
        border: '#DCD3C9',
        input: '#DCD3C9',
        ring: '#B8926A',
        primary: '#B8926A',
        'primary-foreground': '#FFFFFF',
        secondary: '#EAE3DA',
        'secondary-foreground': '#2C1A12',
        destructive: '#B54A4A',
        'destructive-foreground': '#FFFFFF',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.22em',
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
