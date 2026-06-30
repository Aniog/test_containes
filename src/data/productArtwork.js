const encodeSvg = (svg) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

const ugcScenes = {
  ear: `
    <path d="M380 150 C465 170 505 255 480 350 C452 456 344 508 260 456 C190 412 174 316 220 246 C258 188 310 142 380 150Z" fill="#d5b79a" opacity="0.96"/>
    <path d="M348 232 C394 252 410 315 372 362 C340 402 282 386 276 334 C272 290 305 238 348 232Z" fill="none" stroke="#7b5a43" stroke-width="18" opacity="0.35"/>
    <circle cx="396" cy="372" r="30" fill="url(#gold)"/>
    <circle cx="396" cy="372" r="12" fill="#fff7e7" opacity="0.85"/>
  `,
  stack: `
    <path d="M465 88 C562 180 575 340 508 458 C445 570 278 540 228 420 C183 312 235 170 344 106 C386 82 428 76 465 88Z" fill="#caa17e" opacity="0.92"/>
    <g fill="none" stroke="url(#gold)" stroke-linecap="round">
      <ellipse cx="370" cy="330" rx="92" ry="126" stroke-width="22" transform="rotate(-12 370 330)"/>
      <ellipse cx="430" cy="346" rx="74" ry="106" stroke-width="18" transform="rotate(12 430 346)"/>
      <path d="M284 228 C330 190 394 198 430 238" stroke-width="12"/>
    </g>
  `,
  neckline: `
    <path d="M90 0 H710 C684 165 560 260 400 260 C240 260 116 165 90 0Z" fill="#caa17e" opacity="0.94"/>
    <path d="M168 112 C270 222 530 222 632 112" fill="none" stroke="#8f684b" stroke-width="14" opacity="0.28"/>
    <path d="M178 102 C280 196 520 196 622 102" fill="none" stroke="url(#gold)" stroke-width="9" stroke-linecap="round"/>
    <line x1="400" y1="202" x2="400" y2="310" stroke="url(#gold)" stroke-width="7" stroke-linecap="round"/>
    <circle cx="400" cy="350" r="50" fill="url(#gold)"/>
    <circle cx="400" cy="350" r="20" fill="#fff7e7" opacity="0.82"/>
  `,
  box: `
    <rect x="142" y="230" width="516" height="404" rx="38" fill="#f6efe4" stroke="#b4874b" stroke-width="8"/>
    <path d="M142 330 H658" stroke="#b4874b" stroke-width="5" opacity="0.42"/>
    <path d="M400 230 V634" stroke="#b4874b" stroke-width="5" opacity="0.28"/>
    <path d="M300 145 C350 202 450 202 500 145" fill="none" stroke="url(#gold)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="400" cy="388" r="50" fill="url(#gold)"/>
    <ellipse cx="308" cy="480" rx="38" ry="58" fill="none" stroke="url(#gold)" stroke-width="20"/>
    <ellipse cx="492" cy="480" rx="38" ry="58" fill="none" stroke="url(#gold)" stroke-width="20"/>
  `,
}

const artwork = {
  cuff: {
    gradients: `
      <radialGradient id="bg" cx="50%" cy="35%" r="72%"><stop offset="0%" stop-color="#fffaf0"/><stop offset="58%" stop-color="#e8d6ba"/><stop offset="100%" stop-color="#cdb18a"/></radialGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fff2b6"/><stop offset="34%" stop-color="#d7a94d"/><stop offset="66%" stop-color="#8f642f"/><stop offset="100%" stop-color="#f6d982"/></linearGradient>
    `,
    body: `
      <ellipse cx="470" cy="390" rx="210" ry="250" fill="none" stroke="url(#gold)" stroke-width="58" stroke-linecap="round" transform="rotate(-18 470 390)"/>
      <ellipse cx="492" cy="386" rx="122" ry="164" fill="none" stroke="#f8f2e8" stroke-width="38" opacity="0.86" transform="rotate(-18 492 386)"/>
      <circle cx="570" cy="250" r="33" fill="#fbf7ef" stroke="#d4a24b" stroke-width="8"/>
      <circle cx="580" cy="240" r="10" fill="#ffffff" opacity="0.92"/>
    `,
  },
  necklace: {
    gradients: `
      <radialGradient id="bg" cx="50%" cy="38%" r="76%"><stop offset="0%" stop-color="#fff8ea"/><stop offset="58%" stop-color="#ead7bd"/><stop offset="100%" stop-color="#caa983"/></radialGradient>
      <linearGradient id="gold" x1="20%" y1="0%" x2="80%" y2="100%"><stop offset="0%" stop-color="#fff0a8"/><stop offset="45%" stop-color="#bd8640"/><stop offset="100%" stop-color="#f1d17a"/></linearGradient>
    `,
    body: `
      <path d="M220 120 C330 210 470 210 580 120" fill="none" stroke="#b4874b" stroke-width="10" stroke-linecap="round" opacity="0.85"/>
      <path d="M252 132 C348 190 452 190 548 132" fill="none" stroke="#f3d98d" stroke-width="4" stroke-linecap="round" opacity="0.9"/>
      <line x1="400" y1="200" x2="400" y2="292" stroke="#b4874b" stroke-width="8" stroke-linecap="round"/>
      <g transform="translate(400 360)">
        <circle r="72" fill="url(#gold)"/>
        <path d="M0 -88 C28 -36 88 -28 88 0 C36 28 28 88 0 88 C-28 36 -88 28 -88 0 C-36 -28 -28 -88 0 -88Z" fill="#d8a64d" opacity="0.96"/>
        <circle r="34" fill="#f8f2e8" opacity="0.86"/>
        <circle cx="18" cy="-18" r="12" fill="#d294a3" opacity="0.95"/>
        <circle cx="-15" cy="14" r="10" fill="#8d6f9f" opacity="0.92"/>
      </g>
    `,
  },
  huggies: {
    gradients: `
      <radialGradient id="bg" cx="50%" cy="42%" r="70%"><stop offset="0%" stop-color="#fff9ed"/><stop offset="60%" stop-color="#e9d5b8"/><stop offset="100%" stop-color="#c8aa85"/></radialGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fff3b5"/><stop offset="42%" stop-color="#d7a44d"/><stop offset="72%" stop-color="#8b5d2c"/><stop offset="100%" stop-color="#f2d279"/></linearGradient>
    `,
    body: `
      <ellipse cx="330" cy="360" rx="92" ry="150" fill="none" stroke="url(#gold)" stroke-width="58"/>
      <ellipse cx="470" cy="360" rx="92" ry="150" fill="none" stroke="url(#gold)" stroke-width="58"/>
      <ellipse cx="330" cy="360" rx="39" ry="82" fill="none" stroke="#fff6e5" stroke-width="20" opacity="0.7"/>
      <ellipse cx="470" cy="360" rx="39" ry="82" fill="none" stroke="#fff6e5" stroke-width="20" opacity="0.7"/>
      <path d="M285 245 C306 210 354 210 375 246" fill="none" stroke="#f7dd8a" stroke-width="14" stroke-linecap="round"/>
      <path d="M425 245 C446 210 494 210 515 246" fill="none" stroke="#f7dd8a" stroke-width="14" stroke-linecap="round"/>
    `,
  },
  filigree: {
    gradients: `
      <radialGradient id="bg" cx="50%" cy="38%" r="78%"><stop offset="0%" stop-color="#fff7e9"/><stop offset="56%" stop-color="#ead3b2"/><stop offset="100%" stop-color="#b98b63"/></radialGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffeaa6"/><stop offset="38%" stop-color="#bd8241"/><stop offset="100%" stop-color="#f3d77f"/></linearGradient>
    `,
    body: `
      <g fill="none" stroke="url(#gold)" stroke-width="14" stroke-linecap="round">
        <path d="M315 190 C260 250 260 335 315 430 C370 335 370 250 315 190Z"/>
        <path d="M485 190 C430 250 430 335 485 430 C540 335 540 250 485 190Z"/>
        <path d="M280 305 C315 265 350 305 315 350 C280 305 350 305 315 390"/>
        <path d="M450 305 C485 265 520 305 485 350 C450 305 520 305 485 390"/>
      </g>
      <circle cx="315" cy="168" r="24" fill="url(#gold)"/>
      <circle cx="485" cy="168" r="24" fill="url(#gold)"/>
    `,
  },
  set: {
    gradients: `
      <radialGradient id="bg" cx="50%" cy="35%" r="78%"><stop offset="0%" stop-color="#fffaf1"/><stop offset="54%" stop-color="#ecd9bd"/><stop offset="100%" stop-color="#b69372"/></radialGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fff0ac"/><stop offset="48%" stop-color="#b9863d"/><stop offset="100%" stop-color="#f7d87f"/></linearGradient>
    `,
    body: `
      <rect x="170" y="355" width="460" height="145" rx="26" fill="#f8f2e8" stroke="#b4874b" stroke-width="8" opacity="0.88"/>
      <path d="M170 405 H630" stroke="#b4874b" stroke-width="4" opacity="0.45"/>
      <path d="M285 155 C335 205 465 205 515 155" fill="none" stroke="#b4874b" stroke-width="9" stroke-linecap="round"/>
      <circle cx="400" cy="282" r="58" fill="url(#gold)"/>
      <circle cx="400" cy="282" r="24" fill="#f8f2e8" opacity="0.82"/>
      <ellipse cx="298" cy="413" rx="42" ry="62" fill="none" stroke="url(#gold)" stroke-width="24"/>
      <ellipse cx="502" cy="413" rx="42" ry="62" fill="none" stroke="url(#gold)" stroke-width="24"/>
    `,
  },
}

export const createJewelryArtwork = (type, label, options = {}) => {
  const piece = artwork[type] || artwork.huggies
  const caption = label.toUpperCase()
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img" aria-label="${label}">
      <defs>${piece.gradients}</defs>
      <rect width="800" height="600" fill="url(#bg)"/>
      <circle cx="690" cy="100" r="130" fill="#f8f2e8" opacity="0.18"/>
      <circle cx="145" cy="510" r="170" fill="#211712" opacity="0.08"/>
      <g filter="drop-shadow(0 26px 36px rgba(33,23,18,0.22))">${piece.body}</g>
      ${options.hideCaption ? '' : `<text x="400" y="548" text-anchor="middle" font-family="Manrope, Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="8" fill="#7a552d">${caption}</text>`}
    </svg>`

  return encodeSvg(svg)
}
export const createHeroArtwork = (label = 'Velmora Fine Jewelry editorial campaign') => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-label="${label}">
      <defs>
        <radialGradient id="bg" cx="70%" cy="36%" r="76%">
          <stop offset="0%" stop-color="#d9b28b"/>
          <stop offset="50%" stop-color="#6f4631"/>
          <stop offset="100%" stop-color="#211712"/>
        </radialGradient>
        <linearGradient id="skin" x1="20%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stop-color="#e6c3a7"/>
          <stop offset="58%" stop-color="#b98768"/>
          <stop offset="100%" stop-color="#7a4f3d"/>
        </linearGradient>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fff0ac"/>
          <stop offset="42%" stop-color="#c58b3f"/>
          <stop offset="100%" stop-color="#f8d77e"/>
        </linearGradient>
        <linearGradient id="veil" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#211712" stop-opacity="0.84"/>
          <stop offset="44%" stop-color="#211712" stop-opacity="0.58"/>
          <stop offset="100%" stop-color="#211712" stop-opacity="0.12"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#bg)"/>
      <circle cx="1320" cy="130" r="270" fill="#f8f2e8" opacity="0.10"/>
      <circle cx="1040" cy="820" r="330" fill="#000" opacity="0.16"/>
      <g transform="translate(900 72)" filter="drop-shadow(0 42px 56px rgba(0,0,0,0.28))">
        <path d="M170 30 C350 72 456 230 430 440 C402 660 220 808 40 720 C-114 645 -132 420 -24 238 C40 130 88 48 170 30Z" fill="url(#skin)"/>
        <path d="M116 220 C202 260 232 374 176 456 C124 532 22 500 18 406 C15 328 58 236 116 220Z" fill="none" stroke="#6f4631" stroke-width="30" opacity="0.45"/>
        <ellipse cx="188" cy="490" rx="52" ry="78" fill="none" stroke="url(#gold)" stroke-width="28"/>
        <ellipse cx="188" cy="490" rx="21" ry="40" fill="none" stroke="#fff7e5" stroke-width="11" opacity="0.72"/>
        <path d="M86 164 C214 140 308 228 314 350" fill="none" stroke="#2a1912" stroke-width="88" stroke-linecap="round" opacity="0.72"/>
      </g>
      <g transform="translate(1080 220)" opacity="0.95" filter="drop-shadow(0 22px 34px rgba(0,0,0,0.24))">
        <path d="M-16 0 C96 110 310 110 422 0" fill="none" stroke="url(#gold)" stroke-width="10" stroke-linecap="round"/>
        <line x1="203" y1="102" x2="203" y2="198" stroke="url(#gold)" stroke-width="8" stroke-linecap="round"/>
        <circle cx="203" cy="245" r="48" fill="url(#gold)"/>
        <circle cx="203" cy="245" r="18" fill="#fff7e7" opacity="0.82"/>
      </g>
      <rect width="1600" height="900" fill="url(#veil)"/>
    </svg>`

  return encodeSvg(svg)
}



export const createEditorialArtwork = (scene = 'ear', label = 'Velmora Fine Jewelry') => {
  const body = ugcScenes[scene] || ugcScenes.ear
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 1280" role="img" aria-label="${label}">
      <defs>
        <radialGradient id="bg" cx="48%" cy="26%" r="82%">
          <stop offset="0%" stop-color="#f9ead4"/>
          <stop offset="48%" stop-color="#b88962"/>
          <stop offset="100%" stop-color="#211712"/>
        </radialGradient>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fff0ac"/>
          <stop offset="45%" stop-color="#c48a3f"/>
          <stop offset="100%" stop-color="#f8d77e"/>
        </linearGradient>
        <linearGradient id="veil" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#211712" stop-opacity="0.08"/>
          <stop offset="62%" stop-color="#211712" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="#211712" stop-opacity="0.76"/>
        </linearGradient>
      </defs>
      <rect width="720" height="1280" fill="url(#bg)"/>
      <circle cx="620" cy="155" r="188" fill="#f8f2e8" opacity="0.11"/>
      <circle cx="130" cy="980" r="260" fill="#000000" opacity="0.16"/>
      <g transform="translate(-40 250)" filter="drop-shadow(0 38px 52px rgba(33,23,18,0.34))">${body}</g>
      <rect width="720" height="1280" fill="url(#veil)"/>
    </svg>`

  return encodeSvg(svg)
}

