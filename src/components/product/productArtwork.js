const gold = '#C7A35B'
const softGold = '#E7CF95'
const pearl = '#F8F0E3'
const ink = '#241B18'
const espresso = '#33251F'
const clay = '#8B604E'

const encodeSvg = (svg) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

const svgShell = (children, variant = 'main') => {
  const glowOpacity = variant === 'hover' ? '0.58' : '0.38'
  const bgTone = variant === 'hover' ? espresso : ink

  return encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1500" role="img">
      <defs>
        <radialGradient id="warmGlow" cx="50%" cy="34%" r="58%">
          <stop offset="0%" stop-color="#F6DFC0" stop-opacity="${glowOpacity}"/>
          <stop offset="48%" stop-color="#7C5545" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="${bgTone}" stop-opacity="1"/>
        </radialGradient>
        <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#FFF2BF"/>
          <stop offset="24%" stop-color="${softGold}"/>
          <stop offset="52%" stop-color="${gold}"/>
          <stop offset="78%" stop-color="#8E6735"/>
          <stop offset="100%" stop-color="#F7E2A3"/>
        </linearGradient>
        <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="24" stdDeviation="24" flood-color="#000000" flood-opacity="0.32"/>
        </filter>
        <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="12" stdDeviation="15" flood-color="#000000" flood-opacity="0.22"/>
        </filter>
      </defs>
      <rect width="1200" height="1500" fill="url(#warmGlow)"/>
      <circle cx="210" cy="290" r="260" fill="#F6DFC0" opacity="0.08"/>
      <circle cx="1050" cy="1110" r="330" fill="#C7A35B" opacity="0.07"/>
      <path d="M132 1242 C356 1158 560 1156 770 1231 C909 1281 1021 1286 1110 1256" fill="none" stroke="${pearl}" stroke-opacity="0.08" stroke-width="2"/>
      ${children}
      <text x="600" y="1372" text-anchor="middle" fill="${pearl}" opacity="0.72" font-family="Manrope, Arial, sans-serif" font-size="22" letter-spacing="10">VELMORA</text>
    </svg>
  `)
}

const stone = (cx, cy, r = 22, fill = '#F8F0E3') =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" opacity="0.95" filter="url(#softShadow)"/>
   <circle cx="${cx - r * 0.28}" cy="${cy - r * 0.34}" r="${r * 0.24}" fill="#FFFFFF" opacity="0.9"/>`

const line = (d, width = 22) =>
  `<path d="${d}" fill="none" stroke="url(#metal)" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" filter="url(#shadow)"/>`

const art = {
  'vivid-aura-jewels': {
    main: () => svgShell(`
      <ellipse cx="602" cy="744" rx="250" ry="340" fill="#F8EFE0" opacity="0.13"/>
      ${line('M688 392 C482 436 386 648 444 824 C491 967 646 1014 754 944 C861 875 885 730 823 637', 34)}
      ${line('M672 500 C540 548 490 668 523 783 C552 887 656 906 720 840', 20)}
      ${stone(793, 621, 30)}
      ${stone(748, 585, 16, '#F4D9AA')}
      <path d="M367 1140 C524 1088 691 1088 858 1142" fill="none" stroke="${pearl}" stroke-opacity="0.18" stroke-width="2"/>
    `),
    hover: () => svgShell(`
      <path d="M388 356 C286 537 288 779 393 963 C473 1104 600 1170 728 1120" fill="none" stroke="#F8EFE0" stroke-opacity="0.18" stroke-width="70" stroke-linecap="round"/>
      ${line('M698 364 C497 420 414 637 482 803 C538 940 695 962 786 862 C865 776 854 647 778 568', 30)}
      ${line('M675 504 C561 552 527 671 574 765 C611 839 690 840 740 780', 16)}
      ${stone(795, 561, 28)}
      ${stone(828, 608, 13, '#F4D9AA')}
    `, 'hover'),
  },
  'majestic-flora-nectar': {
    main: () => svgShell(`
      ${line('M308 525 C446 416 754 416 892 525', 15)}
      ${line('M600 528 C600 625 600 706 600 793', 12)}
      <g filter="url(#shadow)">
        <circle cx="600" cy="834" r="84" fill="url(#metal)"/>
        <circle cx="540" cy="789" r="45" fill="#DFA1A6"/>
        <circle cx="662" cy="789" r="45" fill="#AFC2A1"/>
        <circle cx="548" cy="876" r="45" fill="#C7A6D5"/>
        <circle cx="652" cy="876" r="45" fill="#F1C86F"/>
        <circle cx="600" cy="835" r="34" fill="#F8F0E3"/>
      </g>
      ${stone(426, 470, 13, '#F4D9AA')}${stone(774, 470, 13, '#F4D9AA')}
    `),
    hover: () => svgShell(`
      ${line('M286 505 C430 622 770 622 914 505', 13)}
      <g filter="url(#shadow)">
        <path d="M600 642 C645 704 717 731 694 811 C669 898 531 898 506 811 C483 731 555 704 600 642Z" fill="url(#metal)"/>
        <ellipse cx="544" cy="780" rx="45" ry="72" fill="#C7A6D5" transform="rotate(-24 544 780)"/>
        <ellipse cx="656" cy="780" rx="45" ry="72" fill="#DFA1A6" transform="rotate(24 656 780)"/>
        <ellipse cx="600" cy="830" rx="38" ry="62" fill="#AFC2A1"/>
        <circle cx="600" cy="780" r="26" fill="#F8F0E3"/>
      </g>
    `, 'hover'),
  },
  'golden-sphere-huggies': {
    main: () => svgShell(`
      <g filter="url(#shadow)">
        <path d="M450 545 C348 644 346 848 450 948 C534 1028 668 1028 750 948 C852 848 852 644 750 545" fill="none" stroke="url(#metal)" stroke-width="90" stroke-linecap="round"/>
        <path d="M490 565 C420 648 421 827 493 904 C556 970 647 970 709 904 C783 827 781 648 711 565" fill="none" stroke="${ink}" stroke-opacity="0.5" stroke-width="42" stroke-linecap="round"/>
        <circle cx="414" cy="581" r="68" fill="url(#metal)"/>
        <circle cx="786" cy="581" r="68" fill="url(#metal)"/>
      </g>
    `),
    hover: () => svgShell(`
      <g filter="url(#shadow)">
        <circle cx="455" cy="760" r="178" fill="url(#metal)"/>
        <circle cx="745" cy="760" r="178" fill="url(#metal)"/>
        <circle cx="455" cy="760" r="88" fill="${ink}" opacity="0.48"/>
        <circle cx="745" cy="760" r="88" fill="${ink}" opacity="0.48"/>
        <circle cx="394" cy="698" r="34" fill="#FFF2BF" opacity="0.72"/>
        <circle cx="684" cy="698" r="34" fill="#FFF2BF" opacity="0.72"/>
      </g>
    `, 'hover'),
  },
  'amber-lace-earrings': {
    main: () => svgShell(`
      <g filter="url(#shadow)">
        ${line('M480 400 C420 503 426 587 480 654', 24)}
        ${line('M720 400 C780 503 774 587 720 654', 24)}
        <path d="M422 682 L538 682 L600 1046 L476 1164 L352 1046 Z" fill="none" stroke="url(#metal)" stroke-width="28" stroke-linejoin="round"/>
        <path d="M662 682 L778 682 L848 1046 L724 1164 L600 1046 Z" fill="none" stroke="url(#metal)" stroke-width="28" stroke-linejoin="round"/>
        <path d="M395 784 L555 784 M387 884 L572 884 M377 984 L590 984 M642 784 L802 784 M626 884 L811 884 M610 984 L823 984" stroke="${softGold}" stroke-width="12" stroke-linecap="round" opacity="0.88"/>
        <circle cx="480" cy="675" r="32" fill="url(#metal)"/><circle cx="720" cy="675" r="32" fill="url(#metal)"/>
      </g>
    `),
    hover: () => svgShell(`
      <g filter="url(#shadow)">
        <path d="M600 362 C474 526 427 728 494 918 C525 1006 563 1075 600 1126 C637 1075 675 1006 706 918 C773 728 726 526 600 362Z" fill="none" stroke="url(#metal)" stroke-width="34"/>
        <path d="M505 705 C550 655 650 655 695 705 M481 818 C536 760 664 760 719 818 M505 934 C550 885 650 885 695 934" fill="none" stroke="${softGold}" stroke-width="14" stroke-linecap="round"/>
        ${stone(600, 596, 21, '#F4D9AA')}
      </g>
    `, 'hover'),
  },
  'royal-heirloom-set': {
    main: () => svgShell(`
      <rect x="318" y="478" width="564" height="528" rx="44" fill="${clay}" opacity="0.62" filter="url(#shadow)"/>
      <rect x="358" y="534" width="484" height="396" rx="32" fill="#F8F0E3" opacity="0.16"/>
      ${line('M444 654 C522 590 678 590 756 654', 13)}
      <g filter="url(#shadow)">
        <circle cx="600" cy="756" r="70" fill="url(#metal)"/>
        ${stone(600, 756, 28)}
        <circle cx="486" cy="866" r="54" fill="url(#metal)"/>
        <circle cx="714" cy="866" r="54" fill="url(#metal)"/>
      </g>
    `),
    hover: () => svgShell(`
      <rect x="286" y="510" width="628" height="472" rx="40" fill="#F8F0E3" opacity="0.14" filter="url(#shadow)"/>
      <path d="M286 640 H914" stroke="${softGold}" stroke-width="10" opacity="0.75"/>
      <path d="M600 510 V982" stroke="${softGold}" stroke-width="10" opacity="0.75"/>
      ${line('M434 760 C510 696 690 696 766 760', 12)}
      ${stone(600, 846, 42, '#F8F0E3')}${stone(502, 846, 30, '#F4D9AA')}${stone(698, 846, 30, '#F4D9AA')}
    `, 'hover'),
  },
}

export const getProductArtwork = (product, variant = 'main') => {
  const renderer = art[product?.id]?.[variant] || art[product?.id]?.main || art['vivid-aura-jewels'].main
  return renderer()
}
