/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F6F2EB',
        surface: '#FFFFFF',
        ink: {
          DEFAULT: '#0E1A2B',
          soft: '#1F2A40',
        },
        muted: '#5B6478',
        line: '#E2D9CC',
        accent: {
          DEFAULT: '#B07A3B',
          strong: '#8C5A21',
          soft: '#E9D4B5',
        },
        slate: {
          DEFAULT: '#0E1A2B',
          soft: '#16243B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        soft: '0 1px 0 0 rgba(14, 26, 43, 0.04), 0 8px 24px -16px rgba(14, 26, 43, 0.12)',
        lift: '0 1px 0 0 rgba(14, 26, 43, 0.05), 0 18px 40px -22px rgba(14, 26, 43, 0.22)',
      },
      letterSpacing: {
        'eyebrow': '0.18em',
      },
    },
  },
  plugins: [],
}
