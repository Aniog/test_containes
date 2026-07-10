/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy':      '#0D1B2A',
        'brand-steel':     '#1C3A5E',
        'brand-gold':      '#C9A84C',
        'brand-gold-light':'#E8C97A',
        'brand-white':     '#F8F9FA',
        'brand-light':     '#EEF1F5',
        'brand-muted':     '#8A9BB0',
        'brand-dark':      '#060E18',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
