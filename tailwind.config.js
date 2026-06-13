/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0f2544',
          blue: '#1d5f99',
          steel: '#496985',
          amber: '#d99a21',
          surface: '#f6f8fb',
          muted: '#eaf1f8',
          ink: '#1f2937',
          subtle: '#5f6f82',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
