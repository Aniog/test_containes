/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: '#0F1720',
        steel: '#334155',
        brass: '#B98A2F',
        mist: '#E8EDF2',
        cloud: '#F8FAFC',
        slateLine: '#CBD5E1',
      },
    },
  },
  plugins: [],
}
