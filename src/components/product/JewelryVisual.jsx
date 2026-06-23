import React from 'react'

const getFrame = (label = '', description = '') => {
  const text = `${label} ${description}`.toLowerCase()

  if (text.includes('necklace')) {
    return 'rounded-full border-[9px] h-44 w-44 left-[17%] top-[13%]'
  }

  if (text.includes('huggie')) {
    return 'rounded-full border-[12px] h-24 w-24 left-[20%] top-[22%]'
  }

  if (text.includes('set')) {
    return 'rounded-full border-[8px] h-36 w-36 left-[13%] top-[18%]'
  }

  return 'rounded-full border-[10px] h-28 w-28 left-[16%] top-[18%]'
}

export default function JewelryVisual({ label = 'Velmora', description = '', className = '', variant = 'still', showCaption = true }) {
  const isWorn = variant === 'worn' || variant === 'ugc'
  const isHero = variant === 'hero'
  const frameClass = getFrame(label, description)
  const backgroundClass = isHero
    ? 'bg-hero-visual'
    : isWorn
      ? 'bg-worn-visual'
      : 'bg-still-visual'

  return (
    <div aria-hidden="true" className={`relative isolate overflow-hidden ${backgroundClass} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-porcelain/10" />
      <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-champagne/25" />
      <div className="absolute -bottom-20 left-1/3 h-64 w-64 rounded-full border border-porcelain/10" />

      {isHero && (
        <>
          <div className="absolute right-[8%] top-[8%] h-[78%] w-[42%] rounded-full bg-sand/25 blur-sm" />
          <div className="absolute right-[29%] top-[35%] h-20 w-20 rounded-full border-[13px] border-champagne shadow-[0_0_45px_rgba(201,164,92,0.38)]" />
          <div className="absolute right-[22%] top-[56%] h-44 w-32 rounded-full border-[7px] border-champagne/75" />
          <div className="absolute left-[10%] top-[18%] h-px w-44 bg-champagne/45" />
          <div className="absolute left-[18%] top-[24%] h-px w-64 bg-porcelain/20" />
        </>
      )}

      {isWorn && !isHero && (
        <>
          <div className="absolute right-[9%] top-[7%] h-[70%] w-[52%] rounded-full bg-sand/30 blur-sm" />
          <div className="absolute right-[17%] top-[18%] h-[22%] w-[18%] rounded-full bg-porcelain/40" />
          <div className="absolute right-[25%] top-[42%] h-16 w-16 rounded-full border-[10px] border-champagne shadow-[0_0_35px_rgba(201,164,92,0.35)]" />
          <div className="absolute left-[14%] top-[16%] h-24 w-20 rounded-full border-[6px] border-champagne/70" />
        </>
      )}

      {!isWorn && !isHero && (
        <>
          <div className={`absolute border-champagne/80 shadow-[0_0_36px_rgba(201,164,92,0.32)] ${frameClass}`} />
          <div className="absolute right-[16%] top-[22%] h-7 w-7 rounded-full bg-champagne shadow-[0_0_25px_rgba(201,164,92,0.55)]" />
          <div className="absolute bottom-[19%] right-[21%] h-32 w-32 rounded-full border border-champagne/45" />
          <div className="absolute bottom-[28%] left-[18%] h-px w-56 bg-porcelain/18" />
        </>
      )}

      {showCaption && (
        <div aria-hidden="true" className="absolute bottom-5 left-5 right-5 border-t border-porcelain/18 pt-4">
          <p className="font-serif text-2xl leading-none text-porcelain/90">{label}</p>
          {description && <p className="mt-2 line-clamp-2 text-xs uppercase tracking-[0.18em] text-champagne/85">{description}</p>}
        </div>
      )}
    </div>
  )
}
