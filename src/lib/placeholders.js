const dimensionsByRatio = {
  '16x9': { width: 1600, height: 900 },
  '9x16': { width: 900, height: 1600 },
  '4x3': { width: 1200, height: 900 },
  '3x4': { width: 900, height: 1200 },
  '1x1': { width: 1200, height: 1200 },
}

function encodeSvg(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

function getPalette(mood) {
  if (mood === 'hero') {
    return {
      background: '#1f1513',
      secondary: '#3a2925',
      glow: '#d4b06f',
      glowSoft: '#f4ddaf',
      line: '#f5efe7',
    }
  }

  if (mood === 'ugc' || mood === 'story') {
    return {
      background: '#2b1f1c',
      secondary: '#5a4338',
      glow: '#c79f58',
      glowSoft: '#efd9a8',
      line: '#fffaf4',
    }
  }

  if (mood === 'journal') {
    return {
      background: '#efe4d6',
      secondary: '#ceb9a2',
      glow: '#b88945',
      glowSoft: '#fff5df',
      line: '#241917',
    }
  }

  return {
    background: '#f1e6d8',
    secondary: '#dbc7b2',
    glow: '#c79f58',
    glowSoft: '#fff5dd',
    line: '#241917',
  }
}

function getComposition({ mood, width, height, palette }) {
  const productShapes = `
    <ellipse cx="${width * 0.5}" cy="${height * 0.78}" rx="${width * 0.24}" ry="${height * 0.06}" fill="${palette.secondary}" opacity="0.44" />
    <ellipse cx="${width * 0.5}" cy="${height * 0.72}" rx="${width * 0.17}" ry="${height * 0.028}" fill="none" stroke="${palette.glow}" stroke-width="${Math.max(5, width * 0.008)}" />
    <circle cx="${width * 0.44}" cy="${height * 0.58}" r="${width * 0.058}" fill="none" stroke="${palette.glow}" stroke-width="${Math.max(4, width * 0.007)}" />
    <circle cx="${width * 0.56}" cy="${height * 0.58}" r="${width * 0.058}" fill="none" stroke="${palette.glow}" stroke-width="${Math.max(4, width * 0.007)}" />
    <path d="M ${width * 0.38} ${height * 0.36} Q ${width * 0.5} ${height * 0.2} ${width * 0.62} ${height * 0.36}" fill="none" stroke="${palette.glow}" stroke-width="${Math.max(5, width * 0.008)}" stroke-linecap="round" />
  `

  const portraitShapes = `
    <ellipse cx="${width * 0.68}" cy="${height * 0.45}" rx="${width * 0.18}" ry="${height * 0.28}" fill="${palette.secondary}" opacity="0.66" />
    <ellipse cx="${width * 0.65}" cy="${height * 0.3}" rx="${width * 0.11}" ry="${height * 0.12}" fill="${palette.glowSoft}" opacity="0.16" />
    <path d="M ${width * 0.53} ${height * 0.28} Q ${width * 0.68} ${height * 0.18} ${width * 0.79} ${height * 0.34}" fill="none" stroke="${palette.line}" stroke-opacity="0.65" stroke-width="${Math.max(5, width * 0.007)}" />
    <path d="M ${width * 0.6} ${height * 0.48} Q ${width * 0.7} ${height * 0.64} ${width * 0.76} ${height * 0.86}" fill="none" stroke="${palette.line}" stroke-opacity="0.5" stroke-width="${Math.max(4, width * 0.006)}" />
    <circle cx="${width * 0.59}" cy="${height * 0.38}" r="${width * 0.035}" fill="none" stroke="${palette.glow}" stroke-width="${Math.max(4, width * 0.006)}" />
    <path d="M ${width * 0.58} ${height * 0.55} Q ${width * 0.66} ${height * 0.6} ${width * 0.74} ${height * 0.55}" fill="none" stroke="${palette.glow}" stroke-width="${Math.max(5, width * 0.007)}" stroke-linecap="round" />
  `

  const editorialShapes = `
    <rect x="${width * 0.14}" y="${height * 0.19}" width="${width * 0.46}" height="${height * 0.6}" rx="${width * 0.04}" fill="${palette.secondary}" opacity="0.35" transform="rotate(-6 ${width * 0.37} ${height * 0.49})" />
    <rect x="${width * 0.54}" y="${height * 0.14}" width="${width * 0.18}" height="${height * 0.72}" rx="${width * 0.03}" fill="${palette.glowSoft}" opacity="0.12" transform="rotate(10 ${width * 0.63} ${height * 0.5})" />
    <path d="M ${width * 0.27} ${height * 0.55} Q ${width * 0.4} ${height * 0.33} ${width * 0.58} ${height * 0.52}" fill="none" stroke="${palette.glow}" stroke-width="${Math.max(5, width * 0.006)}" stroke-linecap="round" />
    <circle cx="${width * 0.36}" cy="${height * 0.4}" r="${width * 0.045}" fill="none" stroke="${palette.glow}" stroke-width="${Math.max(4, width * 0.005)}" />
    <circle cx="${width * 0.52}" cy="${height * 0.62}" r="${width * 0.035}" fill="${palette.glow}" opacity="0.9" />
  `

  if (mood === 'hero') return `${portraitShapes}${editorialShapes}`
  if (mood === 'ugc' || mood === 'story') return portraitShapes
  if (mood === 'journal') return editorialShapes
  return productShapes
}

export function getPlaceholderImage({
  title = 'Velmora Fine Jewelry',
  subtitle = 'Quiet luxury jewelry',
  ratio = '3x4',
  mood = 'product',
}) {
  const { width, height } = dimensionsByRatio[ratio] || dimensionsByRatio['3x4']
  const palette = getPalette(mood)
  const titleY = height * 0.82
  const subtitleY = height * 0.88
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${palette.background}" />
          <stop offset="100%" stop-color="${palette.secondary}" />
        </linearGradient>
        <radialGradient id="glowA" cx="0.25" cy="0.2" r="0.85">
          <stop offset="0%" stop-color="${palette.glowSoft}" stop-opacity="0.85" />
          <stop offset="100%" stop-color="${palette.glowSoft}" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="glowB" cx="0.78" cy="0.28" r="0.5">
          <stop offset="0%" stop-color="${palette.glow}" stop-opacity="0.32" />
          <stop offset="100%" stop-color="${palette.glow}" stop-opacity="0" />
        </radialGradient>
        <filter id="blur"><feGaussianBlur stdDeviation="18" /></filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)" />
      <circle cx="${width * 0.22}" cy="${height * 0.18}" r="${width * 0.22}" fill="url(#glowA)" filter="url(#blur)" />
      <circle cx="${width * 0.74}" cy="${height * 0.22}" r="${width * 0.16}" fill="url(#glowB)" filter="url(#blur)" />
      <circle cx="${width * 0.6}" cy="${height * 0.76}" r="${width * 0.2}" fill="${palette.glow}" opacity="0.08" filter="url(#blur)" />
      ${getComposition({ mood, width, height, palette })}
      <rect x="${width * 0.08}" y="${height * 0.73}" width="${width * 0.46}" height="${height * 0.18}" rx="${width * 0.03}" fill="rgba(255,250,244,0.08)" />
      <text x="${width * 0.12}" y="${titleY}" fill="${palette.line}" font-size="${Math.max(28, width * 0.028)}" font-family="Georgia, serif" letter-spacing="6">${title.toUpperCase()}</text>
      <text x="${width * 0.12}" y="${subtitleY}" fill="${palette.line}" fill-opacity="0.72" font-size="${Math.max(18, width * 0.016)}" font-family="Arial, sans-serif" letter-spacing="1.8">${subtitle}</text>
    </svg>
  `

  return encodeSvg(svg.replace(/\s+/g, ' ').trim())
}
