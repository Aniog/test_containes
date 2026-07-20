const visualThemes = {
  'vivid-aura-jewels': 'cuff',
  'majestic-flora-nectar': 'necklace',
  'golden-sphere-huggies': 'huggies',
  'amber-lace-earrings': 'drops',
  'royal-heirloom-set': 'set',
}

const goldGradient = 'from-velmora-champagne via-velmora-gold to-velmora-espresso'

function Sparkle({ className }) {
  return <span className={`absolute rounded-full bg-velmora-champagne shadow-gold ${className}`} />
}

function Arc({ className }) {
  return <span className={`absolute rounded-full border-[10px] border-transparent bg-gradient-to-br ${goldGradient} ${className}`} />
}

function Pendant({ className }) {
  return <span className={`absolute rounded-full bg-gradient-to-br ${goldGradient} shadow-gold ${className}`} />
}

export default function JewelryVisual({ product, variant = 'primary', className = '' }) {
  const theme = visualThemes[product.id] || visualThemes['golden-sphere-huggies']
  const isWorn = variant === 'worn'
  const isPackaging = variant === 'packaging'

  return (
    <div className={`relative isolate h-full w-full overflow-hidden bg-velmora-espresso ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(216,184,117,0.32),transparent_28%),radial-gradient(circle_at_75%_70%,rgba(247,241,232,0.12),transparent_30%)]" />
      <div className="absolute inset-x-8 bottom-8 top-10 rounded-t-full border border-velmora-ivory/10 bg-velmora-ink/35" />
      {isWorn && <div className="absolute left-1/2 top-10 h-[88%] w-44 -translate-x-1/2 rounded-t-full bg-gradient-to-b from-velmora-taupe via-velmora-espresso to-velmora-ink opacity-70 blur-[1px]" />}
      {isPackaging && <div className="absolute left-1/2 top-1/2 h-44 w-60 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] border border-velmora-champagne/40 bg-velmora-porcelain/90 shadow-luxury" />}

      {theme === 'necklace' && (
        <>
          <div className="absolute left-1/2 top-[20%] h-52 w-52 -translate-x-1/2 rounded-full border border-velmora-champagne/70" />
          <Pendant className="left-1/2 top-[58%] h-16 w-12 -translate-x-1/2" />
          <Sparkle className="left-[47%] top-[62%] h-2 w-2" />
          <Sparkle className="left-[54%] top-[58%] h-1.5 w-1.5" />
        </>
      )}

      {theme === 'cuff' && (
        <>
          <Arc className="left-1/2 top-[35%] h-36 w-28 -translate-x-1/2 border-l-0" />
          <Sparkle className="left-[57%] top-[44%] h-4 w-4" />
          <Sparkle className="left-[61%] top-[50%] h-2 w-2" />
        </>
      )}

      {theme === 'huggies' && (
        <>
          <Arc className="left-[35%] top-[34%] h-28 w-20 border-t-[16px]" />
          <Arc className="right-[35%] top-[34%] h-28 w-20 border-t-[16px]" />
          <Pendant className="left-[39%] top-[53%] h-10 w-10" />
          <Pendant className="right-[39%] top-[53%] h-10 w-10" />
        </>
      )}

      {theme === 'drops' && (
        <>
          <Pendant className="left-[35%] top-[31%] h-12 w-12" />
          <Pendant className="right-[35%] top-[31%] h-12 w-12" />
          <Pendant className="left-[32%] top-[48%] h-24 w-16 rounded-b-full" />
          <Pendant className="right-[32%] top-[48%] h-24 w-16 rounded-b-full" />
          <div className="absolute left-[36%] top-[54%] h-16 w-px bg-velmora-champagne/70" />
          <div className="absolute right-[42%] top-[54%] h-16 w-px bg-velmora-champagne/70" />
        </>
      )}

      {theme === 'set' && (
        <>
          <div className="absolute left-1/2 top-[22%] h-48 w-48 -translate-x-1/2 rounded-full border border-velmora-champagne/70" />
          <Pendant className="left-1/2 top-[55%] h-14 w-11 -translate-x-1/2" />
          <Pendant className="left-[31%] top-[40%] h-12 w-12" />
          <Pendant className="right-[31%] top-[40%] h-12 w-12" />
        </>
      )}

      <Sparkle className="left-[18%] top-[22%] h-1.5 w-1.5" />
      <Sparkle className="right-[22%] top-[30%] h-2 w-2" />
      <Sparkle className="bottom-[22%] left-[24%] h-2.5 w-2.5" />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/60 via-transparent to-transparent" />
    </div>
  )
}
