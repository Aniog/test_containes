import React from 'react'

const getShapeClass = (label = '', description = '') => {
  const text = `${label} ${description}`.toLowerCase()
  if (text.includes('necklace')) return 'left-[17%] top-[13%] h-44 w-44 rounded-full border-[9px] border-champagne/75'
  if (text.includes('huggie')) return 'left-[20%] top-[22%] h-24 w-24 rounded-full border-[12px] border-champagne/85'
  if (text.includes('set')) return 'left-[13%] top-[18%] h-36 w-36 rounded-full border-[8px] border-champagne/80'
  return 'left-[16%] top-[18%] h-28 w-28 rounded-full border-[10px] border-champagne/80'
}

export default function EditorialVisual({ label = 'Velmora', description = '', className = '', variant = 'still', showCaption = true }) {
  const worn = variant === 'worn' || variant === 'ugc'
  const hero = variant === 'hero'
  const shapeClass = getShapeClass(label, description)

  return (
    <div
      aria-hidden="true"
      className={`relative isolate overflow-hidden bg-ink ${className}`}
    >
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 bg-gradient-to-br from-espresso via-ink to-stone" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_24%,rgba(201,164,92,0.38),transparent_30%),radial-gradient(circle_at_22%_74%,rgba(248,243,236,0.16),transparent_34%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-porcelain/10" />
      <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-champagne/25" />
      <div className="absolute -bottom-20 left-1/3 h-64 w-64 rounded-full border border-porcelain/10" />

      {hero && (
        <>
          <div className="absolute right-[8%] top-[8%] h-[78%] w-[42%] rounded-full bg-sand/24 blur-sm" />
          <div className="absolute right-[29%] top-[35%] h-20 w-20 rounded-full border-[13px] border-champagne shadow-[0_0_45px_rgba(201,164,92,0.38)]" />
          <div className="absolute right-[22%] top-[56%] h-44 w-32 rounded-full border-[7px] border-champagne/75" />
          <div className="absolute left-[10%] top-[18%] h-px w-44 bg-champagne/45" />
          <div className="absolute left-[18%] top-[24%] h-px w-64 bg-porcelain/20" />
        </>
      )}

      {worn && !hero && (
        <>
          <div className="absolute right-[9%] top-[7%] h-[70%] w-[52%] rounded-full bg-sand/30 blur-sm" />
          <div className="absolute right-[17%] top-[18%] h-[22%] w-[18%] rounded-full bg-porcelain/42" />
          <div className="absolute right-[25%] top-[42%] h-16 w-16 rounded-full border-[10px] border-champagne shadow-[0_0_35px_rgba(201,164,92,0.35)]" />
          <div className="absolute left-[14%] top-[16%] h-24 w-20 rounded-full border-[6px] border-champagne/70" />
        </>
      )}

      {!worn && !hero && (
        <>
          <div className={`absolute ${shapeClass} shadow-[0_0_36px_rgba(201,164,92,0.32)]`} />
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
