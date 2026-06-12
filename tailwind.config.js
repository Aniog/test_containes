/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A4B8C',
        accent: '#C0392B',
        gold: '#D4A017',
        bgLight: '#F7F9FC',
        textDark: '#1A2332',
        textBody: '#3D4F66',
        textMuted: '#6B7A8D',
        borderColor: '#D8E0EA',
        success: '#27AE60',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
