/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sourcing: {
          navy: '#0B1F3A',
          blue: '#165DAD',
          sky: '#E8F2FF',
          ink: '#1F2937',
          muted: '#64748B',
          line: '#D8E1EC',
          soft: '#F5F8FB',
          card: '#FFFFFF',
          amber: '#B7791F',
          green: '#167A5A',
        },
      },
      boxShadow: {
        b2b: '0 18px 50px rgba(11, 31, 58, 0.10)',
      },
    },
  },
  plugins: [],
}
