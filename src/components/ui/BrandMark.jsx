import React from 'react'
import { cn } from '@/lib/utils'

export const BrandMark = ({ className, tone = 'light' }) => {
  const inkColor = tone === 'light' ? '#FAF8F4' : '#0E1A2B'
  const accentColor = '#B8763E'
  const accentBright = '#D4A574'
  return (
    <svg
      viewBox="0 0 160 40"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-9 w-auto', className)}
      aria-label="ARTITECT MACHINERY"
      role="img"
    >
      <g fill="none" strokeLinecap="square" strokeLinejoin="miter">
        <rect x="2" y="6" width="28" height="28" stroke={accentColor} strokeWidth="2" fill="none" />
        <line x1="9" y1="14" x2="23" y2="14" stroke={accentBright} strokeWidth="1.4" />
        <line x1="9" y1="20" x2="23" y2="20" stroke={accentBright} strokeWidth="1.4" />
        <line x1="9" y1="26" x2="23" y2="26" stroke={accentBright} strokeWidth="1.4" />
        <line x1="16" y1="6" x2="16" y2="34" stroke={accentColor} strokeWidth="1.4" />
      </g>
      <text
        x="40"
        y="20"
        fill={inkColor}
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="600"
        fontSize="15"
        letterSpacing="2"
      >
        ARTITECT
      </text>
      <text
        x="40"
        y="33"
        fill={accentColor}
        fontFamily="Inter, sans-serif"
        fontWeight="500"
        fontSize="9"
        letterSpacing="6"
      >
        MACHINERY
      </text>
    </svg>
  )
}

export default BrandMark
