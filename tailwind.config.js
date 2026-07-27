/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0B2545',
          hover: '#133B6F',
          50: '#F0F4FA',
          100: '#D8E2F0',
          200: '#B0C4E1',
          900: '#0B2545',
          950: '#06182E',
        },
        brand: {
          red: '#D62828',
          'red-hover': '#B11F1F',
          gold: '#C9A227',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F4F6F9',
          soft: '#EDF1F7',
        },
        ink: {
          DEFAULT: '#0F172A',
          muted: '#64748B',
          subtle: '#475569',
        },
        line: '#E2E8F0',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 8px 24px rgba(11, 37, 69, 0.08)',
      },
    },
  },
  plugins: [],
}
