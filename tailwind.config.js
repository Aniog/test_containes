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
          navy: '#10243E',
          blue: '#1F5E9E',
          amber: '#D88A24',
          mist: '#F3F7FA',
          border: '#D9E2EC',
          slate: '#334155',
          muted: '#64748B',
        },
      },
      boxShadow: {
        card: '0 18px 50px rgba(16, 36, 62, 0.08)',
      },
    },
  },
  plugins: [],
}
