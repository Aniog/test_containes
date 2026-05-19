/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#7C3AED',
          dark: '#5B21B6',
          light: '#A78BFA',
        },
        surface: {
          DEFAULT: '#0F0F1A',
          card: '#1A1A2E',
          elevated: '#252540',
          border: '#2E2E50',
        },
        accent: {
          steam: '#1B2838',
          epic: '#2D2D2D',
          nintendo: '#E4000F',
          playstation: '#003087',
          xbox: '#107C10',
        },
        text: {
          primary: '#F0F0FF',
          secondary: '#A0A0C0',
          muted: '#606080',
        },
        deal: '#22C55E',
        hot: '#F97316',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0F0F1A 0%, #1A0A2E 50%, #0A1A2E 100%)',
        'card-gradient': 'linear-gradient(180deg, transparent 0%, rgba(15,15,26,0.9) 100%)',
        'brand-gradient': 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'glow': '0 0 20px rgba(124,58,237,0.3)',
        'glow-sm': '0 0 10px rgba(124,58,237,0.2)',
      },
    },
  },
  plugins: [],
}
