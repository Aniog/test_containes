// Velmora Fine Jewelry - Design System Tokens

export const colors = {
  // Base palette - warm editorial quiet luxury
  bg: '#F8F5F0',           // Warm off-white background
  surface: '#FFFFFF',      // Pure white surfaces
  surfaceAlt: '#F5F2ED',   // Warm cream alt surface
  text: '#2C2825',         // Deep warm charcoal
  textMuted: '#6B635C',    // Secondary text
  textLight: '#8A8178',    // Tertiary / captions
  border: '#D4C9B9',       // Hairline dividers
  borderLight: '#E8E0D5',  // Lighter borders
  
  // Accent - warm gold
  gold: '#B89778',         // Primary gold accent
  goldDark: '#8B6F47',     // Darker gold for hover
  goldLight: '#D4B896',    // Lighter gold
  
  // Status
  success: '#4A5C4A',
  error: '#8B4A4A',
};

export const typography = {
  // Serif for headings and product names
  serif: "'Playfair Display', Georgia, serif",
  // Sans for body and UI
  sans: "'Inter', system-ui, -apple-system, sans-serif",
};

export const spacing = {
  // Generous whitespace is key
  section: '6rem',    // 96px
  sectionSm: '4rem',  // 64px
  gutter: '2rem',     // 32px
};

export const transitions = {
  base: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  slow: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
  fast: 'all 0.15s cubic-bezier(0.4, 0.0, 0.2, 1)',
};
