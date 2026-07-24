/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        velmora: {
          bg: '#1a1411',
          surface: '#241c18',
          panel: '#302621',
          cream: '#efe4d7',
          line: '#4a3b33',
          ivory: '#f7f1ea',
          taupe: '#cbbcae',
          ink: '#241914',
          gold: '#d6b783',
          goldDeep: '#b89252',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
