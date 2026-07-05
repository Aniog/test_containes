/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        champagne: '#E8DCC4',
        sand: '#F5F0E8',
        cream: '#FDFBF7',
        espresso: '#2C2420',
        walnut: '#4A3F35',
        gold: {
          DEFAULT: '#C9A961',
          light: '#D4B978',
          dark: '#A88B4A',
        },
        charcoal: '#3D3630',
        stone: '#8B7E74',
        linen: '#D9D2C7',
        ivory: '#FAF8F5',
        success: '#4A7C59',
        error: '#A65D57',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'h1': ['3rem', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'h2': ['2.25rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'h3': ['1.75rem', { lineHeight: '1.25', letterSpacing: '0.02em' }],
        'h4': ['1.375rem', { lineHeight: '1.3', letterSpacing: '0.02em' }],
        'product': ['1.125rem', { lineHeight: '1.4', letterSpacing: '0.15em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(44, 36, 32, 0.06)',
        'medium': '0 4px 12px rgba(44, 36, 32, 0.08)',
        'elevated': '0 8px 24px rgba(44, 36, 32, 0.12)',
        'premium': '0 16px 48px rgba(44, 36, 32, 0.16)',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '250ms',
        'slow': '400ms',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
      borderRadius: {
        'none': '0',
      },
    },
  },
  plugins: [],
}
