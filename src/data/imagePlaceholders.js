const svgToDataUri = (svg) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`

const shell = ({ width, height, base = '#241c1b', overlay = '#3b2b2a', accent = '#c8a96b', glow = '#efe4d6', content }) => svgToDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${base}" />
        <stop offset="100%" stop-color="${overlay}" />
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stop-color="${glow}" stop-opacity="0.9" />
        <stop offset="100%" stop-color="${glow}" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f6e3aa" />
        <stop offset="45%" stop-color="${accent}" />
        <stop offset="100%" stop-color="#8b6a2d" />
      </linearGradient>
      <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="28" />
      </filter>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bg)" />
    <circle cx="${width * 0.72}" cy="${height * 0.22}" r="${Math.min(width, height) * 0.2}" fill="url(#glow)" filter="url(#soft)" opacity="0.7" />
    <circle cx="${width * 0.2}" cy="${height * 0.82}" r="${Math.min(width, height) * 0.16}" fill="url(#glow)" filter="url(#soft)" opacity="0.35" />
    ${content}
  </svg>
`)

const productFrame = ({ motif = 'earring', tone = '#2f2624', glow = '#efe4d6' }) =>
  shell({
    width: 900,
    height: 1125,
    overlay: tone,
    glow,
    content: `
      <rect x="88" y="96" width="724" height="936" rx="48" fill="#f6eee4" fill-opacity="0.95" />
      <rect x="118" y="126" width="664" height="876" rx="36" fill="#eadccc" fill-opacity="0.85" />
      <ellipse cx="450" cy="318" rx="170" ry="120" fill="#fff7ee" opacity="0.85" />
      ${motif === 'earring' ? `
        <ellipse cx="450" cy="458" rx="106" ry="128" fill="none" stroke="url(#metal)" stroke-width="24" />
        <ellipse cx="450" cy="458" rx="42" ry="58" fill="#f5f0ea" opacity="0.95" />
        <path d="M450 578 C432 650 394 722 348 792" stroke="url(#metal)" stroke-width="18" stroke-linecap="round" />
        <circle cx="336" cy="812" r="42" fill="url(#metal)" />
        <circle cx="544" cy="394" r="18" fill="#faf7ff" opacity="0.95" />
      ` : ''}
      ${motif === 'necklace' ? `
        <path d="M270 346 C312 476 382 536 450 536 C518 536 588 476 630 346" stroke="url(#metal)" stroke-width="20" stroke-linecap="round" />
        <path d="M450 536 L404 652 Q450 720 496 652 Z" fill="url(#metal)" />
        <circle cx="450" cy="626" r="34" fill="#fff0c1" opacity="0.9" />
        <circle cx="392" cy="420" r="14" fill="#f0bcc2" opacity="0.9" />
        <circle cx="450" cy="388" r="14" fill="#c3d7f2" opacity="0.9" />
        <circle cx="508" cy="420" r="14" fill="#d9f1d6" opacity="0.9" />
      ` : ''}
      ${motif === 'huggies' ? `
        <ellipse cx="372" cy="478" rx="84" ry="108" fill="none" stroke="url(#metal)" stroke-width="32" />
        <ellipse cx="528" cy="478" rx="84" ry="108" fill="none" stroke="url(#metal)" stroke-width="32" />
        <rect x="306" y="354" width="132" height="110" rx="54" fill="#efe2d1" opacity="0.8" />
        <rect x="462" y="354" width="132" height="110" rx="54" fill="#efe2d1" opacity="0.8" />
      ` : ''}
      ${motif === 'drop' ? `
        <circle cx="450" cy="370" r="34" fill="url(#metal)" />
        <path d="M450 404 C420 496 394 584 334 702" stroke="url(#metal)" stroke-width="16" stroke-linecap="round" />
        <path d="M450 404 C480 496 506 584 566 702" stroke="url(#metal)" stroke-width="16" stroke-linecap="round" />
        <path d="M334 702 Q450 778 566 702" fill="none" stroke="url(#metal)" stroke-width="18" stroke-linecap="round" />
        <circle cx="334" cy="702" r="18" fill="url(#metal)" />
        <circle cx="566" cy="702" r="18" fill="url(#metal)" />
      ` : ''}
      ${motif === 'gift' ? `
        <rect x="286" y="398" width="328" height="260" rx="28" fill="#fff7ee" stroke="url(#metal)" stroke-width="14" />
        <path d="M450 398 V658" stroke="url(#metal)" stroke-width="12" />
        <path d="M286 528 H614" stroke="url(#metal)" stroke-width="12" />
        <path d="M450 358 C404 306 356 326 356 368 C356 404 404 418 450 446" fill="none" stroke="url(#metal)" stroke-width="16" stroke-linecap="round" />
        <path d="M450 358 C496 306 544 326 544 368 C544 404 496 418 450 446" fill="none" stroke="url(#metal)" stroke-width="16" stroke-linecap="round" />
        <circle cx="366" cy="738" r="46" fill="none" stroke="url(#metal)" stroke-width="20" />
        <path d="M540 708 C540 744 522 774 492 806" stroke="url(#metal)" stroke-width="22" stroke-linecap="round" />
      ` : ''}
    `,
  })

const portraitFrame = ({ theme = 'hero' }) =>
  shell({
    width: 900,
    height: 1125,
    overlay: theme === 'hero' ? '#362827' : '#5f4a3f',
    glow: theme === 'hero' ? '#f1ddc2' : '#f7efe7',
    content: `
      <path d="M608 156 C712 228 748 374 740 540 C732 706 662 876 490 948 C370 1000 196 930 152 782 C110 642 176 502 310 434 C392 392 448 340 454 262 C460 188 538 114 608 156 Z" fill="#dbc7b1" opacity="0.92" />
      <path d="M388 332 C438 344 476 384 476 440 C476 510 424 576 346 606" fill="none" stroke="#9a7d5b" stroke-width="18" stroke-linecap="round" opacity="0.55" />
      <path d="M476 468 C530 474 572 516 572 572 C572 680 488 786 370 828" fill="none" stroke="url(#metal)" stroke-width="16" stroke-linecap="round" opacity="0.92" />
      <circle cx="352" cy="620" r="56" fill="none" stroke="url(#metal)" stroke-width="20" />
      <circle cx="532" cy="614" r="22" fill="url(#metal)" />
      <path d="M472 472 C520 572 562 662 616 798" stroke="url(#metal)" stroke-width="14" stroke-linecap="round" opacity="0.82" />
      <circle cx="626" cy="826" r="36" fill="url(#metal)" />
    `,
  })

const wideFrame = () =>
  shell({
    width: 1600,
    height: 980,
    overlay: '#3f302f',
    glow: '#f0dbc0',
    content: `
      <path d="M1060 138 C1278 198 1438 420 1410 638 C1380 870 1200 980 916 980 C694 980 428 860 342 650 C242 406 402 208 620 162 C834 116 930 102 1060 138 Z" fill="#d4bfaa" opacity="0.82" />
      <path d="M734 244 C824 334 884 452 906 600 C930 754 900 876 832 980" fill="none" stroke="#977a63" stroke-width="26" stroke-linecap="round" opacity="0.45" />
      <path d="M1028 224 C1150 354 1224 540 1242 768" fill="none" stroke="url(#metal)" stroke-width="22" stroke-linecap="round" opacity="0.86" />
      <ellipse cx="758" cy="500" rx="92" ry="126" fill="none" stroke="url(#metal)" stroke-width="26" />
      <path d="M882 536 C960 594 1018 684 1084 824" stroke="url(#metal)" stroke-width="18" stroke-linecap="round" opacity="0.82" />
      <circle cx="1114" cy="874" r="44" fill="url(#metal)" />
    `,
  })

const reelFrame = ({ tone = '#241c1b', accentShape = 'stack' }) =>
  shell({
    width: 720,
    height: 1280,
    overlay: tone,
    glow: '#f2e0c9',
    content: `
      <rect x="100" y="110" width="520" height="1060" rx="46" fill="#cdb59c" opacity="0.88" />
      <path d="M312 236 C356 276 380 330 380 402 C380 486 342 564 274 622" fill="none" stroke="#8f7159" stroke-width="16" stroke-linecap="round" opacity="0.55" />
      ${accentShape === 'stack' ? `
        <circle cx="282" cy="486" r="48" fill="none" stroke="url(#metal)" stroke-width="18" />
        <circle cx="342" cy="556" r="30" fill="none" stroke="url(#metal)" stroke-width="14" />
        <circle cx="404" cy="620" r="22" fill="url(#metal)" />
      ` : ''}
      ${accentShape === 'neck' ? `
        <path d="M214 470 C284 606 362 676 452 676 C522 676 570 618 602 534" fill="none" stroke="url(#metal)" stroke-width="18" stroke-linecap="round" />
        <path d="M452 676 L418 778 Q452 818 486 778 Z" fill="url(#metal)" />
      ` : ''}
      ${accentShape === 'drops' ? `
        <path d="M360 444 C328 532 298 612 250 718" stroke="url(#metal)" stroke-width="14" stroke-linecap="round" />
        <path d="M360 444 C392 532 422 612 470 718" stroke="url(#metal)" stroke-width="14" stroke-linecap="round" />
        <circle cx="242" cy="742" r="22" fill="url(#metal)" />
        <circle cx="478" cy="742" r="22" fill="url(#metal)" />
      ` : ''}
      ${accentShape === 'city' ? `
        <ellipse cx="320" cy="528" rx="54" ry="70" fill="none" stroke="url(#metal)" stroke-width="18" />
        <ellipse cx="412" cy="528" rx="40" ry="54" fill="none" stroke="url(#metal)" stroke-width="14" />
        <circle cx="500" cy="618" r="18" fill="url(#metal)" />
      ` : ''}
    `,
  })

export const heroBackgroundImage = wideFrame()
export const heroPortraitImage = portraitFrame({ theme: 'hero' })
export const storyImage = portraitFrame({ theme: 'story' })

export const categoryImages = {
  earrings: productFrame({ motif: 'drop', tone: '#3b2c2a' }),
  necklaces: productFrame({ motif: 'necklace', tone: '#5a483f' }),
  huggies: productFrame({ motif: 'huggies', tone: '#342827' }),
}

export const ugcImages = {
  'ugc-1': reelFrame({ tone: '#281f1e', accentShape: 'stack' }),
  'ugc-2': reelFrame({ tone: '#55433a', accentShape: 'neck' }),
  'ugc-3': reelFrame({ tone: '#3a2a29', accentShape: 'drops' }),
  'ugc-4': reelFrame({ tone: '#2f2423', accentShape: 'city' }),
}

export const productImages = {
  'vivid-aura-jewels': {
    primary: productFrame({ motif: 'earring', tone: '#332727' }),
    secondary: productFrame({ motif: 'earring', tone: '#5d4a45', glow: '#f7efe8' }),
    gallery: [
      productFrame({ motif: 'earring', tone: '#332727' }),
      productFrame({ motif: 'earring', tone: '#4b3734' }),
      portraitFrame({ theme: 'hero' }),
    ],
  },
  'majestic-flora-nectar': {
    primary: productFrame({ motif: 'necklace', tone: '#4a3935' }),
    secondary: productFrame({ motif: 'necklace', tone: '#6c574f', glow: '#f8efe5' }),
    gallery: [
      productFrame({ motif: 'necklace', tone: '#4a3935' }),
      productFrame({ motif: 'necklace', tone: '#5f4b44' }),
      portraitFrame({ theme: 'story' }),
    ],
  },
  'golden-sphere-huggies': {
    primary: productFrame({ motif: 'huggies', tone: '#2f2423' }),
    secondary: productFrame({ motif: 'huggies', tone: '#51403b', glow: '#fff4e8' }),
    gallery: [
      productFrame({ motif: 'huggies', tone: '#2f2423' }),
      productFrame({ motif: 'huggies', tone: '#43312e' }),
      portraitFrame({ theme: 'hero' }),
    ],
  },
  'amber-lace-earrings': {
    primary: productFrame({ motif: 'drop', tone: '#3d2e2d' }),
    secondary: productFrame({ motif: 'drop', tone: '#6a554d', glow: '#faf1e8' }),
    gallery: [
      productFrame({ motif: 'drop', tone: '#3d2e2d' }),
      productFrame({ motif: 'drop', tone: '#594640' }),
      portraitFrame({ theme: 'story' }),
    ],
  },
  'royal-heirloom-set': {
    primary: productFrame({ motif: 'gift', tone: '#3a2c2a' }),
    secondary: productFrame({ motif: 'gift', tone: '#5d4843', glow: '#faf2ea' }),
    gallery: [
      productFrame({ motif: 'gift', tone: '#3a2c2a' }),
      productFrame({ motif: 'gift', tone: '#55423d' }),
      portraitFrame({ theme: 'hero' }),
    ],
  },
}

export const getProductImageSet = (productId) => productImages[productId] ?? null
export const getProductCardImage = (productId, variant = 'primary') =>
  productImages[productId]?.[variant] ?? heroPortraitImage
export const getProductGallery = (productId) =>
  productImages[productId]?.gallery ?? []

