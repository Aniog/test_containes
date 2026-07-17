/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'velmora': {
          'bg-primary': '#FAF8F5',
          'bg-secondary': '#F5F1EB',
          'text-primary': '#1A1A1A',
          'text-secondary': '#6B6560',
          'accent': '#B8965A',
          'accent-hover': '#9A7B48',
          'border': '#E5E0D8',
          'card': '#FFFFFF',
          'success': '#7A9E7E',
          'error': '#C47A7A',
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'logo': ['28px', { lineHeight: '1.2', fontWeight: '500' }],
        'hero': ['56px', { lineHeight: '1.1', fontWeight: '400' }],
        'section': ['40px', { lineHeight: '1.2', fontWeight: '400' }],
        'product': ['18px', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        'section': '80px',
        'section-mobile': '48px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 30px rgba(0,0,0,0.1)',
        'button': '0 2px 8px rgba(184,150,90,0.3)',
      },
      letterSpacing: {
        'product': '0.15em',
        'wide': '0.1em',
      },
      transitionDuration: {
        'hover': '300ms',
      },
      aspectRatio: {
        'product': '4/5',
      },
    },
  },
  plugins: [],
}
