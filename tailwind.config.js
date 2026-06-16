/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0b0d10',
          2: '#11141a',
          3: '#1a1f29',
        },
        bone: '#f5f3ee',
        paper: '#faf8f3',
        line: {
          DEFAULT: '#262b34',
          2: '#e6e1d6',
        },
        brass: {
          DEFAULT: '#c89b3c',
          2: '#a07d2a',
        },
        steel: '#8a8f99',
        ash: '#5a5f6a',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        'lift': '0 30px 60px -30px rgba(0,0,0,0.5)',
        'glow': '0 0 0 1px rgba(200,155,60,0.25), 0 20px 40px -20px rgba(200,155,60,0.4)',
      },
      letterSpacing: {
        'eyebrow': '0.25em',
      },
    },
  },
  plugins: [],
}
