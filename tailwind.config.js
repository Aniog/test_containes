/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4D3E',
          50: '#E8F5F1',
          100: '#D1EBE3',
          200: '#A3D7C7',
          300: '#75C3AB',
          400: '#47AF8F',
          500: '#1B4D3E',
          600: '#163E32',
          700: '#112F27',
          800: '#0C201B',
          900: '#07110E',
        },
        secondary: {
          DEFAULT: '#2D5A4A',
          50: '#EDF4F1',
          100: '#DBE9E3',
          200: '#B7D3C7',
          300: '#93BDAB',
          400: '#6FA78F',
          500: '#2D5A4A',
          600: '#24483C',
          700: '#1B362E',
          800: '#122420',
          900: '#091210',
        },
        accent: {
          DEFAULT: '#D4A853',
          50: '#FCF8EE',
          100: '#F9F1DD',
          200: '#F3E3BB',
          300: '#EDD599',
          400: '#E7C777',
          500: '#D4A853',
          600: '#AA8642',
          700: '#806431',
          800: '#564220',
          900: '#2C2110',
        },
        background: {
          light: '#F8FAF9',
          dark: '#0F2D24',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#5A6B62',
          light: '#FFFFFF',
        },
        border: {
          DEFAULT: '#E2E8E5',
          light: '#F0F3F1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'container': '1280px',
      },
      borderRadius: {
        'card': '8px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.1)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
