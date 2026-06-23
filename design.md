/**
 * MicroCosmos Design System
 * 
 * Theme: A fascinating microscopic world exploration site.
 * Colors: Deep dark space-like background, vibrant glowing neon colors representing microscopic life (bioluminescence, bacteria, organisms).
 * Typography: Clean, modern, scientific sans-serif.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#040b16', // Deep dark blue/black
        surface: '#0d1b2a',
        primary: '#00f5d4', // Bioluminescent cyan
        secondary: '#f15bb5', // Neon pink (nucleus)
        accent: '#fee440', // Bright yellow
        textMain: '#e0e1dd',
        textMuted: '#778da9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'] // For scientific stats/data
      }
    }
  }
}
