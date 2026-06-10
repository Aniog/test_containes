/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A365D',
          light: '#2D5A87',
          dark: '#0F2440',
        },
        accent: {
          DEFAULT: '#E67E22',
          hover: '#D35400',
          light: '#F39C12',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#FAFBFC',
          muted: '#EDF2F7',
        },
        text: {
          primary: '#1A202C',
          secondary: '#4A5568',
          muted: '#718096',
        },
        border: '#E2E8F0',
        success: '#38A169',
        warning: '#D69E2E',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['56px', { lineHeight: '64px', fontWeight: '700' }],
        'h1-mobile': ['40px', { lineHeight: '48px', fontWeight: '700' }],
        'h2': ['42px', { lineHeight: '50px', fontWeight: '700' }],
        'h2-mobile': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'h3': ['28px', { lineHeight: '36px', fontWeight: '600' }],
        'h3-mobile': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'h4': ['22px', { lineHeight: '30px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px' }],
        'body': ['16px', { lineHeight: '26px' }],
        'small': ['14px', { lineHeight: '22px' }],
        'caption': ['12px', { lineHeight: '18px' }],
      },
      spacing: {
        'section': '80px',
        'section-mobile': '48px',
        'card': '32px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(26, 54, 93, 0.08)',
        'card-hover': '0 8px 30px rgba(26, 54, 93, 0.12)',
        'button': '0 4px 14px rgba(230, 126, 34, 0.3)',
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
        'input': '4px',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}
