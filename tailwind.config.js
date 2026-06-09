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
          50: '#fdf8f0',
          100: '#f9edd6',
          200: '#f2d8ab',
          300: '#e9bd76',
          400: '#df9b40',
          500: '#d6831e',
          600: '#c86a15',
          700: '#a65114',
          800: '#864118',
          900: '#6e3617',
        },
        charcoal: {
          50: '#f6f6f7',
          100: '#e2e3e5',
          200: '#c5c6cb',
          300: '#a0a2a9',
          400: '#7c7e87',
          500: '#61636c',
          600: '#4d4f57',
          700: '#3f4148',
          800: '#2c2d32',
          900: '#1a1b1f',
          950: '#111215',
        },
        steel: {
          50: '#f4f6f8',
          100: '#e9ecf0',
          200: '#d3d9e0',
          300: '#b0bac7',
          400: '#8896a7',
          500: '#6a7a8e',
          600: '#546275',
          700: '#45505f',
          800: '#3b4450',
          900: '#353c45',
          950: '#23272e',
        },
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
        'title': ['1.75rem', { lineHeight: '1.25', fontWeight: '600' }],
        'subtitle': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
}
