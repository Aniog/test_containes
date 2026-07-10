/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FAF9F7',
        secondary: '#1A1815',
        'secondary-text': '#6B6560',
        accent: '#C9A962',
        'accent-hover': '#B8954F',
        divider: '#E8E5E0',
        card: '#FFFFFF',
        success: '#4A7C59',
        error: '#A65D57',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '4rem', fontWeight: '500' }],
        'h2': ['2.5rem', { lineHeight: '3rem', fontWeight: '500' }],
        'h3': ['1.75rem', { lineHeight: '2.25rem', fontWeight: '500' }],
        'h4': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1rem', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(26, 24, 21, 0.06)',
        'medium': '0 4px 16px rgba(26, 24, 21, 0.08)',
        'elevated': '0 8px 32px rgba(26, 24, 21, 0.12)',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-out',
      },
      maxWidth: {
        'container': '1400px',
      },
    },
  },
  plugins: [],
}
