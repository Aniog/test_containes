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
          navy: '#1a365d',
          'navy-light': '#1e3a5f',
          'navy-dark': '#0f2440',
          steel: '#64748b',
          'steel-light': '#94a3b8',
          'steel-dark': '#475569',
          gold: '#b45309',
          'gold-light': '#d97706',
          'gold-dark': '#92400e',
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'steel-gradient': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0f2440 0%, #1a365d 50%, #1e3a5f 100%)',
        'gold-gradient': 'linear-gradient(135deg, #92400e 0%, #b45309 50%, #d97706 100%)',
      },
    },
  },
  plugins: [],
}
