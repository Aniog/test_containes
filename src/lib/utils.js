import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const placeholderColors = [
  ['#1e1a17', '#b68d40'],
  ['#2d2925', '#c9a34e'],
  ['#3a342f', '#d4b366'],
  ['#151311', '#a67c32'],
];

export function getPlaceholderSvg(seed = 'velmora', text = '') {
  const hash = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const [bg, fg] = placeholderColors[hash % placeholderColors.length];
  const displayText = text || seed.slice(0, 2).toUpperCase();

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="400" height="500">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${bg}"/>
          <stop offset="100%" stop-color="#2a2622"/>
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#g)"/>
      <circle cx="200" cy="200" r="80" fill="none" stroke="${fg}" stroke-width="1.5" opacity="0.6"/>
      <circle cx="200" cy="200" r="120" fill="none" stroke="${fg}" stroke-width="0.5" opacity="0.3"/>
      <text x="200" y="360" font-family="Georgia, serif" font-size="14" fill="${fg}" text-anchor="middle" letter-spacing="4" opacity="0.8">VELMORA</text>
      <text x="200" y="390" font-family="Georgia, serif" font-size="11" fill="#f7f4f0" text-anchor="middle" letter-spacing="2" opacity="0.6">${displayText}</text>
    </svg>
  `.trim();

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
