/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FAF8F5',
          alt: '#F5F0EB',
        },
        foreground: {
          DEFAULT: '#2A2520',
          muted: '#6B5E54',
        },
        primary: {
          DEFAULT: '#8B7355',
          hover: '#6B5640',
        },
        accent: {
          DEFAULT: '#B8956A',
          hover: '#A07D52',
        },
        border: '#E8E0D8',
        ring: '#8B7355',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wider': '0.15em',
        'widest': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'premium': '0 4px 24px rgba(42, 37, 32, 0.08)',
        'premium-lg': '0 8px 40px rgba(42, 37, 32, 0.12)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
