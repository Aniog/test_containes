/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burnt-orange': '#C85A17',
        'deep-ochre': '#B8860B',
        'acacia-green': '#5C7A3E',
        'savanna-cream': '#F5F0E8',
        'warm-sand': '#E8DCC8',
        'dark-earth': '#3B2F1E',
        'dust-brown': '#6B5B3E',
        'sunset-gold': '#D4952A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
      },
      animation: {
        'dissolve': 'dissolve 8s ease-in-out infinite',
        'parallax-slow': 'parallax 20s ease-in-out infinite alternate',
      },
      keyframes: {
        dissolve: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        parallax: {
          '0%': { transform: 'scale(1.05) translateY(0)' },
          '100%': { transform: 'scale(1.15) translateY(-2%)' },
        },
      },
    },
  },
  plugins: [],
}
