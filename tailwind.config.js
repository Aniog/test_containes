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
          bg: {
            primary: '#0A0A09',
            secondary: '#1A1A18',
            elevated: '#2A2825',
          },
          text: {
            primary: '#F7F5F0',
            secondary: '#A8A49C',
            tertiary: '#6B6860',
          },
          gold: {
            DEFAULT: '#C9A962',
            hover: '#D4B876',
            muted: '#8B7A4C',
          },
          border: {
            subtle: '#3D3A33',
            visible: '#4A4640',
          },
          success: '#7A8B6F',
          error: '#A66B6B',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '1.5' }],
        'sm': ['13px', { lineHeight: '1.5' }],
        'base': ['15px', { lineHeight: '1.6' }],
        'lg': ['18px', { lineHeight: '1.5' }],
        'xl': ['22px', { lineHeight: '1.4' }],
        '2xl': ['28px', { lineHeight: '1.3' }],
        '3xl': ['36px', { lineHeight: '1.2' }],
        '4xl': ['48px', { lineHeight: '1.1' }],
        '5xl': ['64px', { lineHeight: '1.05' }],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
      },
      maxWidth: {
        '8xl': '1400px',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'enter': 'cubic-bezier(0, 0, 0.2, 1)',
        'exit': 'cubic-bezier(0.4, 0, 1, 1)',
      },
      boxShadow: {
        'gold': '0 0 20px rgba(201, 169, 98, 0.15)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #C9A962 0%, #D4B876 50%, #8B7A4C 100%)',
      },
    },
  },
  plugins: [],
}
