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
          ink: '#0E1A2B',
          steel: '#1F2A3A',
          graphite: '#2C3543',
          mist: '#F5F6F8',
          cloud: '#FFFFFF',
          brass: '#C8A45D',
          'brass-soft': '#E2C998',
          ember: '#B8763E',
          muted: '#6B7280',
          line: '#E5E7EB',
        },
      },
      fontFamily: {
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      boxShadow: {
        card: '0 1px 2px rgba(14,26,43,0.04), 0 8px 24px rgba(14,26,43,0.06)',
        'card-hover': '0 1px 2px rgba(14,26,43,0.06), 0 16px 40px rgba(14,26,43,0.10)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
