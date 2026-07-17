const createPlaceholderSvg = (title = 'Velmora Editorial') => {
  const safeTitle = String(title)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

  return `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1500" role="img" aria-label="${safeTitle}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#201816" />
          <stop offset="45%" stop-color="#4b3a31" />
          <stop offset="100%" stop-color="#eadfce" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="38%" r="48%">
          <stop offset="0%" stop-color="#f6ead5" stop-opacity="0.9" />
          <stop offset="58%" stop-color="#d4b07d" stop-opacity="0.42" />
          <stop offset="100%" stop-color="#d4b07d" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="1500" fill="url(#bg)" />
      <rect width="1200" height="1500" fill="url(#glow)" />
      <circle cx="855" cy="410" r="170" fill="#d8b279" fill-opacity="0.16" />
      <circle cx="390" cy="1080" r="245" fill="#fff6eb" fill-opacity="0.14" />
      <path d="M330 1025C330 905 430 805 550 805s220 100 220 220-100 220-220 220-220-100-220-220Z" fill="none" stroke="#d4b07d" stroke-opacity="0.95" stroke-width="26"/>
      <path d="M652 550c0 82-66 148-148 148s-148-66-148-148 66-148 148-148 148 66 148 148Z" fill="none" stroke="#f2dfbf" stroke-opacity="0.82" stroke-width="22"/>
      <path d="M805 862c0 44-35 79-79 79s-79-35-79-79 35-79 79-79 79 35 79 79Z" fill="none" stroke="#d4b07d" stroke-width="18" stroke-opacity="0.9"/>
      <text x="96" y="1280" fill="#f8f2eb" fill-opacity="0.94" font-family="Georgia, 'Times New Roman', serif" font-size="86" letter-spacing="8">VELMORA</text>
      <text x="100" y="1342" fill="#f1e2c9" fill-opacity="0.84" font-family="Inter, Arial, sans-serif" font-size="28" letter-spacing="12">QUIET LUXURY JEWELRY</text>
      <text x="100" y="1402" fill="#fff8ee" fill-opacity="0.76" font-family="Inter, Arial, sans-serif" font-size="26">${safeTitle}</text>
    </svg>
  `)}`
}

export const SVG_PLACEHOLDER = createPlaceholderSvg()

export const getEditorialPlaceholder = (title) => createPlaceholderSvg(title)

export const buildImageQuery = (...ids) =>
  ids
    .filter(Boolean)
    .map((id) => `[${id}]`)
    .join(' ')
