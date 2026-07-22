/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FDFBF8',
          alt: '#F7F3EE',
          dark: '#1A1814',
        },
        text: {
          DEFAULT: '#1A1814',
          muted: '#6B6560',
          light: '#9C9590',
        },
        accent: {
          DEFAULT: '#C4A86B',
          dark: '#A68B4B',
        },
        border: '#E8E3DC',
        white: '#FFFFFF',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'extra-wide': '0.15em',
        'ultra-wide': '0.25em',
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(26, 24, 20, 0.04)',
        'medium': '0 4px 20px rgba(26, 24, 20, 0.06)',
        'elevated': '0 8px 40px rgba(26, 24, 20, 0.08)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
}
