/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /bg-cuhk-(purple|purple-dark|purple-light|gold|gold-dark|gold-light)/ },
    { pattern: /text-cuhk-(purple|purple-dark|purple-light|gold|gold-dark|gold-light)/ },
    { pattern: /border-cuhk-(purple|purple-dark|purple-light|gold|gold-dark|gold-light)/ },
    { pattern: /hover:bg-cuhk-(purple|purple-dark|gold|gold-dark)/ },
    { pattern: /hover:text-cuhk-(purple|purple-dark|gold|gold-dark)/ },
    { pattern: /ring-cuhk-(purple|gold)/ },
    { pattern: /from-cuhk-(purple|gold)/ },
    { pattern: /to-cuhk-(purple|gold)/ },
    'bg-cuhk-purple/20',
    'bg-cuhk-gold/20',
    'border-cuhk-purple/20',
    'border-cuhk-gold/30',
    'focus:ring-cuhk-purple',
    'focus:border-cuhk-purple',
  ],
  theme: {
    extend: {
      colors: {
        'cuhk-purple': '#4E2A84',
        'cuhk-purple-dark': '#3B1F63',
        'cuhk-purple-light': '#F5F0FF',
        'cuhk-gold': '#C8A951',
        'cuhk-gold-dark': '#A88A3A',
        'cuhk-gold-light': '#FDF8EC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
