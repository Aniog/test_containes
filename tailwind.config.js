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
        background: '#FBF7F1',
        surface: '#FFFFFF',
        foreground: '#1A1614',
        'foreground-muted': '#8B7D72',
        accent: '#C9A96E',
        'accent-dark': '#B8954F',
        'deep-warm': '#3D3028',
        border: '#E8E0D6',
        gold: {
          50: '#FBF7F1',
          100: '#F5EDE0',
          200: '#E8DCC4',
          300: '#DBCBA8',
          400: '#CEBA8C',
          500: '#C9A96E',
          600: '#B8954F',
          700: '#9A7D3E',
          800: '#7C6532',
          900: '#5E4D26',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1A1614',
        },
        muted: {
          DEFAULT: '#F5F0EB',
          foreground: '#8B7D72',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0',
        md: '0',
        lg: '0',
        xl: '0',
      },
      letterSpacing: {
        wide: '0.08em',
        wider: '0.12em',
        widest: '0.16em',
      },
      maxWidth: {
        content: '1280px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
