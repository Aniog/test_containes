/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        velmora: {
          ink: '#1f1714',
          cocoa: '#3a2a24',
          accent: '#c9a86a',
          'accent-deep': '#9f7a3d',
          ivory: '#fcf8f2',
          paper: '#fffdf9',
          mist: '#f1e8de',
          sand: '#efe4d6',
          line: '#dbcdbd',
          muted: '#6f6258',
          olive: '#6c5c52',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        editorial: '0.22em',
        product: '0.18em',
      },
      boxShadow: {
        'velmora-card': '0 20px 60px rgba(31, 23, 20, 0.08)',
        'velmora-floating': '0 30px 80px rgba(31, 23, 20, 0.14)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
}
