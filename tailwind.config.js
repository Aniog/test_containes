/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'velmora-mist': '#f3eee7',
        'velmora-ivory': '#fbf8f2',
        'velmora-pearl': '#f8f3ec',
        'velmora-sand': '#e8ddd1',
        'velmora-line': '#d9cbbd',
        'velmora-bronze': '#9d7554',
        'velmora-bronze-dark': '#7f5d42',
        'velmora-bronze-light': '#d6b28b',
        'velmora-ink': '#50463e',
        'velmora-espresso': '#1a1613',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'velmora-sm': '0 12px 30px rgba(26, 22, 19, 0.06)',
        'velmora-lg': '0 24px 60px rgba(26, 22, 19, 0.12)',
      },
    },
  },
  plugins: [],
}
