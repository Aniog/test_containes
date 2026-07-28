/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#10233f',
        'brand-blue': '#2563eb',
        'brand-blue-dark': '#1d4ed8',
        'brand-sky': '#dbeafe',
        'brand-steel': '#cbd5e1',
        'brand-sand': '#f5efe6',
        'brand-slate': '#f5f7fb',
        'brand-ink': '#334155',
      },
      boxShadow: {
        soft: '0 20px 45px -24px rgba(15, 23, 42, 0.2)',
      },
    },
  },
  plugins: [],
}
