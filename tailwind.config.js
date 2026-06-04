/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#fdf8f0',
          100: '#f9eddb',
          200: '#f2d9b3',
          300: '#e8bf82',
          400: '#dda050',
          500: '#d4842f',
          600: '#c46b24',
          700: '#a35320',
          800: '#844220',
          900: '#6c381d',
          950: '#3a1c0e',
        },
        ochre: {
          50: '#fefbe8',
          100: '#fdf6c4',
          200: '#fcea8c',
          300: '#fad64a',
          400: '#f6bf1c',
          500: '#e6a60f',
          600: '#c77f0a',
          700: '#9f5b0d',
          800: '#834812',
          900: '#6f3b15',
          950: '#411d08',
        },
        acacia: {
          50: '#f3f7f2',
          100: '#e3ece0',
          200: '#c7d9c2',
          300: '#a3bf9d',
          400: '#7da376',
          500: '#5f8859',
          600: '#4a6e45',
          700: '#3b5837',
          800: '#31472e',
          900: '#293b27',
          950: '#132012',
        },
        savanna: {
          cream: '#fdf8f0',
          sand: '#e8d5b7',
          dust: '#c4a882',
          clay: '#a0522d',
          earth: '#5c3317',
          shadow: '#2d1a0c',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'parallax-slow': 'parallax 20s ease-in-out infinite alternate',
        'dissolve': 'dissolve 2s ease-in-out',
        'haze': 'haze 8s ease-in-out infinite',
      },
      keyframes: {
        parallax: {
          '0%': { transform: 'translateY(0) scale(1.05)' },
          '100%': { transform: 'translateY(-3%) scale(1.08)' },
        },
        dissolve: {
          '0%': { opacity: '0', filter: 'blur(8px) brightness(1.4)' },
          '100%': { opacity: '1', filter: 'blur(0) brightness(1)' },
        },
        haze: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}
