/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-ink': '#16202E',
        'brand-slate': '#556274',
        'brand-steel': '#A8B3C1',
        'brand-mist': '#E8EDF3',
        'brand-ivory': '#F7F4EE',
        'brand-bronze': '#B88A52',
        'brand-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
