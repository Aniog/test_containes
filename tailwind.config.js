/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          bg: {
            primary: '#faf8f5',
            secondary: '#f5f2ed',
            dark: '#1c1917',
            overlay: 'rgba(28, 25, 23, 0.95)',
          },
          text: {
            primary: '#1c1917',
            secondary: '#78716c',
            muted: '#a8a29e',
            inverse: '#faf8f5',
          },
          accent: {
            DEFAULT: '#b8956e',
            dark: '#9a7a58',
            light: '#d4b896',
            muted: '#e8ddd0',
          },
          gold: {
            DEFAULT: '#c9a962',
            light: '#e5d4a8',
            dark: '#a68b3d',
          },
          border: {
            DEFAULT: '#e7e3dd',
            dark: '#d6d0c8',
          },
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
        '5xl': '8rem',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(28, 25, 23, 0.04)',
        'md': '0 4px 12px rgba(28, 25, 23, 0.06)',
        'lg': '0 8px 24px rgba(28, 25, 23, 0.08)',
        'xl': '0 16px 48px rgba(28, 25, 23, 0.12)',
      },
      transitionDuration: {
        '250': '250ms',
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
      },
    },
  },
  plugins: [],
}
