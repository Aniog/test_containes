/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A2540',
          800: '#0F3057',
          700: '#163C6B',
        },
        brand: {
          50:  '#EEF3FF',
          100: '#D9E4FF',
          200: '#B3C8FF',
          500: '#3D78FF',
          600: '#1E5BFF',
          700: '#1747CC',
        },
        crimson: {
          500: '#D63447',
          600: '#C8102E',
        },
        ink: {
          50:  '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          700: '#334155',
          900: '#0F172A',
        },
        success: { 600: '#16A34A' },
        warning: { 600: '#D97706' },
        danger:  { 600: '#DC2626' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 4px 12px rgba(15, 23, 42, 0.08), 0 2px 4px rgba(15, 23, 42, 0.06)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
