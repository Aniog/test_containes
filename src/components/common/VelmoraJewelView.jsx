const productPalette = {
  'vivid-aura-jewels': 'from-[#261914] via-[#6d5138] to-[#d4aa61]',
  'majestic-flora-nectar': 'from-[#211615] via-[#704a43] to-[#d6b879]',
  'golden-sphere-huggies': 'from-[#241a16] via-[#8a653d] to-[#efd08a]',
  'amber-lace-earrings': 'from-[#2a1b13] via-[#9a6337] to-[#d9a95b]',
  'royal-heirloom-set': 'from-[#271a18] via-[#71523f] to-[#f0d7a3]',
}

const variantShapes = {
  product: 'rounded-t-full rounded-b-[2rem]',
  hover: 'rounded-[2.25rem]',
  detail: 'rounded-t-full rounded-b-[3rem]',
  thumb: 'rounded-t-full rounded-b-2xl',
  cart: 'rounded-t-full rounded-b-[1.2rem]',
  reel: 'rounded-t-full rounded-b-[2rem]',
  category: 'rounded-[2rem]',
  story: 'rounded-t-full',
}

const getPalette = (id = '') => productPalette[id] || 'from-[#241813] via-[#6f5547] to-[#d6b879]'

const JewelryArt = ({
  id = '',
  label,
  variant = 'product',
  className = '',
  tone = 'gold',
}) => {
  const palette = getPalette(id)
  const shape = variantShapes[variant] || variantShapes.product
  const isSilver = tone.toLowerCase().includes('silver')
  const metalClass = isSilver ? 'bg-stone' : 'bg-gold'
  const ringClass = isSilver ? 'border-stone/80' : 'border-gold/80'
  const glowClass = isSilver ? 'bg-ivory/88' : 'bg-[#f6df9c]'

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative isolate h-full w-full overflow-hidden ${shape} bg-gradient-to-br ${palette} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(255,250,242,0.36),transparent_24%),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_42%)]" />
      <div className="absolute inset-x-[18%] top-[18%] h-[52%] rounded-t-full border border-ivory/25 bg-espresso/18 backdrop-blur-[1px]" />
      <div className={`absolute left-[27%] top-[27%] h-[34%] w-[46%] rounded-full border-[10px] ${ringClass} shadow-[0_26px_70px_rgba(0,0,0,0.28)]`} />
      <div className={`absolute left-[42%] top-[39%] h-[16%] w-[16%] rounded-full ${glowClass} shadow-[0_0_42px_rgba(246,223,156,0.8)]`} />
      <div className={`absolute bottom-[24%] left-[22%] h-px w-[58%] -rotate-12 ${metalClass}/70`} />
      <div className="absolute bottom-[18%] left-[31%] h-px w-[42%] -rotate-12 bg-ivory/45" />
      <div className="absolute right-[18%] top-[20%] h-2 w-2 rounded-full bg-ivory shadow-[0_0_28px_rgba(255,250,242,0.9)]" />
      <div className={`absolute bottom-[30%] right-[24%] h-3 w-3 rounded-full ${metalClass} shadow-[0_0_34px_rgba(207,166,90,0.75)]`} />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/24 via-transparent to-ivory/8" />
    </div>
  )
}

export default JewelryArt
