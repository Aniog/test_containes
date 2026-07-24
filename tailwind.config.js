/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm neutral base palette
        cream: {
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F5F0E8',
          300: '#EDE5D8',
          400: '#E0D3C0',
          500: '#C8B89A',
          600: '#A69578',
          700: '#8A7A62',
          800: '#6E614D',
          900: '#544A3B',
        },
        // Deep rich brown-charcoal for text and dark accents
        espresso: {
          50: '#F8F6F4',
          100: '#EDE8E3',
          200: '#D4CBC1',
          300: '#B5A798',
          400: '#958472',
          500: '#7A6B5A',
          600: '#615446',
          700: '#4A3F35',
          800: '#352D25',
          900: '#1E1A15',
        },
        // Warm gold accent
        gold: {
          50: '#FFFCF0',
          100: '#FFF8DB',
          200: '#FFEEB0',
          300: '#FFE280',
          400: '#FFD54F',
          500: '#C9A96E',
          600: '#B8943D',
          700: '#9A7B2F',
          800: '#7C6325',
          900: '#5E4B1C',
        },
        // Muted sage for secondary accents
        sage: {
          50: '#F6F8F5',
          100: '#E8EDE5',
          200: '#D1DCCC',
          300: '#B5C4AC',
          400: '#97AB8B',
          500: '#7A9270',
          600: '#617758',
          700: '#4D5E46',
          800: '#3A4735',
          900: '#2A3327',
        },
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '0.04em' }],
        'heading': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '0.03em' }],
        'subheading': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3', letterSpacing: '0.02em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '1rem',
        'xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.06)',
        'gold': '0 4px 20px -3px rgba(201, 169, 110, 0.3)',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #FDFCFA 0%, #F5F0E8 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C9A96E 0%, #FFD54F 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1E1A15 0%, #352D25 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
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
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionProperty: {
        'smooth': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
