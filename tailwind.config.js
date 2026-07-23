/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0f0f0f',
          soft: '#141414',
          muted: '#1c1c1c',
          border: '#2a2a2a',
        },
        surface: {
          DEFAULT: '#f7f5f2',
          warm: '#f2ede6',
          muted: '#ece7df',
        },
        accent: {
          DEFAULT: '#c9a96e',
          light: '#dcc89e',
          dark: '#b08d4f',
          muted: 'rgba(201, 169, 110, 0.12)',
        },
        ink: {
          DEFAULT: '#1a1a1a',
          soft: '#3a3a3a',
          muted: '#6b6b6b',
          faint: '#9a9a9a',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.28em',
        tighter: '0.15em',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.06)',
        lift: '0 18px 45px rgba(0,0,0,0.10)',
        glow: '0 0 0 1px rgba(201,169,110,0.18)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
