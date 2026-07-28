/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#10233f',
        'brand-blue': '#2563eb',
        'brand-sky': '#eff6ff',
        'brand-gold': '#b98928',
        surface: '#f6f8fb',
        panel: '#ffffff',
        line: '#d9e1ec',
        'success-soft': '#e7f5ee',
      },
      boxShadow: {
        soft: '0 18px 40px rgba(16, 35, 63, 0.08)',
      },
    },
  },
  plugins: [],
}
