import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export const galleries = [
  {
    id: 'nebulae',
    label: '星雲',
    title: 'Nebulae',
    subtitle: 'Stellar Nurseries',
    desc: 'Interstellar clouds of hydrogen, helium, and ionized gases — the birthplaces of stars.',
    count: 12,
    imgId: 'gallery-thumb-nebulae-m4n5o6',
    imgQuery: '[gallery-nebulae-desc] [gallery-nebulae-title]',
    accent: '#a78bfa',
    items: [
      { id: 'orion', title: 'Orion Nebula', sub: 'M42 · 1,344 ly', imgId: 'neb-orion-p7q8r9', imgQuery: '[orion-sub] [orion-title]' },
      { id: 'crab', title: 'Crab Nebula', sub: 'M1 · 6,500 ly', imgId: 'neb-crab-s1t2u3', imgQuery: '[crab-sub] [crab-title]' },
      { id: 'eagle', title: 'Eagle Nebula', sub: 'M16 · 7,000 ly', imgId: 'neb-eagle-v4w5x6', imgQuery: '[eagle-sub] [eagle-title]' },
      { id: 'helix', title: 'Helix Nebula', sub: 'NGC 7293 · 655 ly', imgId: 'neb-helix-y7z8a9', imgQuery: '[helix-sub] [helix-title]' },
      { id: 'ring', title: 'Ring Nebula', sub: 'M57 · 2,283 ly', imgId: 'neb-ring-b1c2d3', imgQuery: '[ring-sub] [ring-title]' },
      { id: 'lagoon', title: 'Lagoon Nebula', sub: 'M8 · 4,100 ly', imgId: 'neb-lagoon-e4f5g6', imgQuery: '[lagoon-sub] [lagoon-title]' },
    ],
  },
  {
    id: 'galaxies',
    label: '銀河',
    title: 'Galaxies',
    subtitle: 'Island Universes',
    desc: 'Gravitationally bound systems of stars, stellar remnants, gas, dust, and dark matter.',
    count: 9,
    imgId: 'gallery-thumb-galaxies-h7i8j9',
    imgQuery: '[gallery-galaxies-desc] [gallery-galaxies-title]',
    accent: '#06b6d4',
    items: [
      { id: 'andromeda', title: 'Andromeda Galaxy', sub: 'M31 · 2.537M ly', imgId: 'gal-andromeda-k1l2m3', imgQuery: '[andromeda-sub] [andromeda-title]' },
      { id: 'whirlpool', title: 'Whirlpool Galaxy', sub: 'M51 · 23M ly', imgId: 'gal-whirlpool-n4o5p6', imgQuery: '[whirlpool-sub] [whirlpool-title]' },
      { id: 'sombrero', title: 'Sombrero Galaxy', sub: 'M104 · 29.3M ly', imgId: 'gal-sombrero-q7r8s9', imgQuery: '[sombrero-sub] [sombrero-title]' },
      { id: 'triangulum', title: 'Triangulum Galaxy', sub: 'M33 · 2.73M ly', imgId: 'gal-triangulum-t1u2v3', imgQuery: '[triangulum-sub] [triangulum-title]' },
      { id: 'centaurus', title: 'Centaurus A', sub: 'NGC 5128 · 13.7M ly', imgId: 'gal-centaurus-w4x5y6', imgQuery: '[centaurus-sub] [centaurus-title]' },
      { id: 'pinwheel', title: 'Pinwheel Galaxy', sub: 'M101 · 20.9M ly', imgId: 'gal-pinwheel-z7a8b9', imgQuery: '[pinwheel-sub] [pinwheel-title]' },
    ],
  },
  {
    id: 'deep-field',
    label: '深宇宙',
    title: 'Deep Field',
    subtitle: 'The Furthest Light',
    desc: 'Long-exposure images revealing thousands of galaxies across billions of light-years.',
    count: 6,
    imgId: 'gallery-thumb-deepfield-c1d2e3',
    imgQuery: '[gallery-deepfield-desc] [gallery-deepfield-title]',
    accent: '#f59e0b',
    items: [
      { id: 'hubble-deep', title: 'Hubble Deep Field', sub: 'HDF · ~12B ly', imgId: 'df-hubble-f4g5h6', imgQuery: '[hubble-deep-sub] [hubble-deep-title]' },
      { id: 'jwst-first', title: 'JWST First Deep Field', sub: 'SMACS 0723 · 4.6B ly', imgId: 'df-jwst-i7j8k9', imgQuery: '[jwst-first-sub] [jwst-first-title]' },
      { id: 'ultra-deep', title: 'Hubble Ultra Deep Field', sub: 'HUDF · ~13.2B ly', imgId: 'df-ultra-l1m2n3', imgQuery: '[ultra-deep-sub] [ultra-deep-title]' },
      { id: 'extreme-deep', title: 'Hubble eXtreme Deep Field', sub: 'XDF · ~13.2B ly', imgId: 'df-extreme-o4p5q6', imgQuery: '[extreme-deep-sub] [extreme-deep-title]' },
      { id: 'carina', title: 'Carina Nebula (JWST)', sub: 'NGC 3372 · 7,600 ly', imgId: 'df-carina-r7s8t9', imgQuery: '[carina-sub] [carina-title]' },
      { id: 'stephan', title: "Stephan's Quintet", sub: 'HCG 92 · 290M ly', imgId: 'df-stephan-u1v2w3', imgQuery: '[stephan-sub] [stephan-title]' },
    ],
  },
]

export default function galleries_data() {
  return galleries
}
