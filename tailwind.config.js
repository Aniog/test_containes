/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B2A4A',
          'navy-hover': '#102f55',
        },
        accent: {
          DEFAULT: '#1E63D6',
          hover: '#1851B3',
          soft: '#E8EFFB',
        },
        'brand-accent': {
          DEFAULT: '#1E63D6',
          hover: '#1851B3',
          soft: '#E8EFFB',
        },
        primary: {
          DEFAULT: '#1E63D6',
          hover: '#1851B3',
          soft: '#E8EFFB',
        },
        surface: {
          DEFAULT: '#F6F8FB',
          card: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#0E1726',
          soft: '#3D4A5C',
          muted: '#6B7689',
        },
        hairline: {
          DEFAULT: '#E2E7EF',
          hover: '#CBD3E0',
        },
        status: {
          success: '#10895B',
          warning: '#C77A0A',
          danger: '#B5341A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '80rem',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(14, 23, 38, 0.04), 0 1px 3px rgba(14, 23, 38, 0.06)',
        'card-hover': '0 4px 12px rgba(14, 23, 38, 0.08), 0 2px 4px rgba(14, 23, 38, 0.04)',
        'nav': '0 1px 0 rgba(14, 23, 38, 0.06)',
      },
    },
  },
  plugins: [],
}
