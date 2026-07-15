import { useId } from 'react'

const getView = (imageId = '') => {
  if (imageId.endsWith('side')) return 'side'
  if (imageId.endsWith('detail')) return 'detail'
  return 'main'
}

const Sparkles = () => (
  <>
    <circle cx="84" cy="18" r="1.6" fill="var(--velmora-porcelain)" fillOpacity="0.95" />
    <path d="M84 12v4M84 20v4M78 18h4M86 18h4" stroke="var(--velmora-porcelain)" strokeWidth="1" strokeLinecap="round" opacity="0.9" />
  </>
)

const renderArtwork = (productId, view, ids) => {
  if (productId === 'vivid-aura-jewels') {
    if (view === 'side') {
      return (
        <>
          <rect width="100" height="124" fill={`url(#${ids.dark})`} />
          <ellipse cx="50" cy="94" rx="30" ry="18" fill="var(--velmora-card)" fillOpacity="0.08" />
          <path d="M34 72c0-16 12-28 24-28" fill="none" stroke={`url(#${ids.gold})`} strokeWidth="5" strokeLinecap="round" />
          <circle cx="60" cy="46" r="4" fill="var(--velmora-porcelain)" />
          <circle cx="60" cy="46" r="7" fill="none" stroke="var(--velmora-champagne)" strokeOpacity="0.55" strokeWidth="1.5" />
          <Sparkles />
        </>
      )
    }

    if (view === 'detail') {
      return (
        <>
          <rect width="100" height="124" fill={`url(#${ids.light})`} />
          <path d="M18 96c0-30 22-50 48-50" fill="none" stroke={`url(#${ids.gold})`} strokeWidth="12" strokeLinecap="round" />
          <circle cx="68" cy="43" r="8" fill="var(--velmora-porcelain)" />
          <circle cx="68" cy="43" r="12" fill="none" stroke="var(--velmora-champagne)" strokeOpacity="0.55" strokeWidth="2" />
          <ellipse cx="24" cy="104" rx="20" ry="9" fill="var(--velmora-line)" fillOpacity="0.36" />
        </>
      )
    }

    return (
      <>
        <rect width="100" height="124" fill={`url(#${ids.light})`} />
        <circle cx="77" cy="16" r="30" fill="var(--velmora-ink)" />
        <ellipse cx="39" cy="74" rx="34" ry="45" fill={`url(#${ids.skin})`} />
        <path d="M66 26c14 16 20 31 19 56-1 16-6 30-16 42" fill="var(--velmora-ink)" />
        <path d="M60 50c6 3 9 7 9 13 0 7-4 11-10 14" fill="none" stroke="var(--velmora-line)" strokeWidth="2" strokeLinecap="round" />
        <path d="M67 66c4 0 8 3 8 8" fill="none" stroke={`url(#${ids.gold})`} strokeWidth="4" strokeLinecap="round" />
        <circle cx="75" cy="74" r="3.4" fill="var(--velmora-porcelain)" />
      </>
    )
  }

  if (productId === 'majestic-flora-nectar') {
    if (view === 'side') {
      return (
        <>
          <rect width="100" height="124" fill={`url(#${ids.dark})`} />
          <path d="M28 24c8 16 13 30 18 42 5 14 4 22-3 38" fill="none" stroke="var(--velmora-porcelain)" strokeOpacity="0.26" strokeWidth="2" strokeLinecap="round" />
          <path d="M72 24c-8 16-13 30-18 42-5 14-4 22 3 38" fill="none" stroke="var(--velmora-porcelain)" strokeOpacity="0.26" strokeWidth="2" strokeLinecap="round" />
          <circle cx="50" cy="76" r="9" fill="var(--velmora-champagne)" />
          <circle cx="43" cy="70" r="5" fill="var(--velmora-porcelain)" />
          <circle cx="57" cy="70" r="5" fill="var(--velmora-porcelain)" />
          <circle cx="43" cy="82" r="5" fill="var(--velmora-line)" />
          <circle cx="57" cy="82" r="5" fill="var(--velmora-line)" />
          <circle cx="50" cy="64" r="5" fill="var(--velmora-card)" />
        </>
      )
    }

    if (view === 'detail') {
      return (
        <>
          <rect width="100" height="124" fill={`url(#${ids.light})`} />
          <circle cx="50" cy="64" r="13" fill="var(--velmora-champagne)" />
          <circle cx="36" cy="54" r="9" fill="var(--velmora-card)" />
          <circle cx="64" cy="54" r="9" fill="var(--velmora-card)" />
          <circle cx="36" cy="74" r="9" fill="var(--velmora-line)" />
          <circle cx="64" cy="74" r="9" fill="var(--velmora-line)" />
          <circle cx="50" cy="43" r="9" fill="var(--velmora-porcelain)" />
          <path d="M50 18v25" stroke={`url(#${ids.gold})`} strokeWidth="2.5" strokeLinecap="round" />
          <Sparkles />
        </>
      )
    }

    return (
      <>
        <rect width="100" height="124" fill={`url(#${ids.light})`} />
        <ellipse cx="50" cy="104" rx="31" ry="18" fill="var(--velmora-line)" fillOpacity="0.22" />
        <path d="M24 22c5 18 17 27 26 31 9-4 21-13 26-31" fill="none" stroke={`url(#${ids.gold})`} strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="69" r="9" fill="var(--velmora-champagne)" />
        <circle cx="42" cy="62" r="5.5" fill="var(--velmora-card)" />
        <circle cx="58" cy="62" r="5.5" fill="var(--velmora-card)" />
        <circle cx="42" cy="76" r="5.5" fill="var(--velmora-line)" />
        <circle cx="58" cy="76" r="5.5" fill="var(--velmora-line)" />
        <circle cx="50" cy="53" r="5.5" fill="var(--velmora-porcelain)" />
      </>
    )
  }

  if (productId === 'golden-sphere-huggies') {
    if (view === 'side') {
      return (
        <>
          <rect width="100" height="124" fill={`url(#${ids.dark})`} />
          <circle cx="37" cy="62" r="17" fill="none" stroke={`url(#${ids.gold})`} strokeWidth="8" />
          <circle cx="63" cy="62" r="17" fill="none" stroke={`url(#${ids.gold})`} strokeWidth="8" />
          <path d="M27 50c5 3 10 4 15 4" stroke="var(--velmora-porcelain)" strokeOpacity="0.45" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M53 50c5 3 10 4 15 4" stroke="var(--velmora-porcelain)" strokeOpacity="0.45" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )
    }

    if (view === 'detail') {
      return (
        <>
          <rect width="100" height="124" fill={`url(#${ids.light})`} />
          <path d="M27 90c0-24 17-41 38-41" fill="none" stroke={`url(#${ids.gold})`} strokeWidth="16" strokeLinecap="round" />
          <path d="M34 92c0-16 11-28 25-28" fill="none" stroke="var(--velmora-porcelain)" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="33" cy="101" rx="24" ry="10" fill="var(--velmora-line)" fillOpacity="0.3" />
        </>
      )
    }

    return (
      <>
        <rect width="100" height="124" fill={`url(#${ids.light})`} />
        <circle cx="76" cy="18" r="29" fill="var(--velmora-ink)" />
        <ellipse cx="38" cy="72" rx="33" ry="45" fill={`url(#${ids.skin})`} />
        <path d="M66 24c16 18 22 34 21 60-1 17-6 28-15 40" fill="var(--velmora-ink)" />
        <path d="M61 51c7 2 10 7 10 13 0 7-4 12-10 15" fill="none" stroke="var(--velmora-line)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="72" cy="83" r="12" fill="none" stroke={`url(#${ids.gold})`} strokeWidth="6" />
        <path d="M68 74c3 2 7 3 10 3" stroke="var(--velmora-porcelain)" strokeOpacity="0.45" strokeWidth="1.4" strokeLinecap="round" />
      </>
    )
  }

  if (productId === 'amber-lace-earrings') {
    if (view === 'side') {
      return (
        <>
          <rect width="100" height="124" fill={`url(#${ids.light})`} />
          <path d="M37 34c0 6-4 10-8 10s-8-4-8-10 4-10 8-10 8 4 8 10Z" fill={`url(#${ids.gold})`} />
          <path d="M34 44 29 86 24 44" fill="none" stroke={`url(#${ids.gold})`} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M76 34c0 6-4 10-8 10s-8-4-8-10 4-10 8-10 8 4 8 10Z" fill={`url(#${ids.gold})`} />
          <path d="M73 44 68 86 63 44" fill="none" stroke={`url(#${ids.gold})`} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29 54c4 4 8 4 12 0" stroke="var(--velmora-porcelain)" strokeOpacity="0.45" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M68 54c4 4 8 4 12 0" stroke="var(--velmora-porcelain)" strokeOpacity="0.45" strokeWidth="1.3" strokeLinecap="round" />
        </>
      )
    }

    if (view === 'detail') {
      return (
        <>
          <rect width="100" height="124" fill={`url(#${ids.dark})`} />
          <path d="M50 18c8 0 14 6 14 14 0 5-3 10-7 12l-7 48-7-48c-4-2-7-7-7-12 0-8 6-14 14-14Z" fill={`url(#${ids.gold})`} />
          <path d="M43 40c5 5 9 5 14 0" stroke="var(--velmora-porcelain)" strokeOpacity="0.4" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M41 54c6 7 12 7 18 0" stroke="var(--velmora-porcelain)" strokeOpacity="0.32" strokeWidth="1.4" strokeLinecap="round" />
          <Sparkles />
        </>
      )
    }

    return (
      <>
        <rect width="100" height="124" fill={`url(#${ids.light})`} />
        <circle cx="76" cy="18" r="29" fill="var(--velmora-ink)" />
        <ellipse cx="38" cy="73" rx="33" ry="45" fill={`url(#${ids.skin})`} />
        <path d="M66 24c16 18 22 34 21 60-1 17-6 28-15 40" fill="var(--velmora-ink)" />
        <path d="M59 77c0 5 4 9 8 9s8-4 8-9-4-9-8-9-8 4-8 9Z" fill={`url(#${ids.gold})`} />
        <path d="M67 86v17" stroke={`url(#${ids.gold})`} strokeWidth="4" strokeLinecap="round" />
        <path d="M63 92c3 3 5 3 8 0" stroke="var(--velmora-porcelain)" strokeOpacity="0.45" strokeWidth="1.2" strokeLinecap="round" />
      </>
    )
  }

  if (view === 'side') {
    return (
      <>
        <rect width="100" height="124" fill={`url(#${ids.light})`} />
        <rect x="18" y="22" width="64" height="80" rx="8" fill="var(--velmora-card)" stroke="var(--velmora-line)" strokeWidth="1.5" />
        <rect x="25" y="29" width="50" height="25" rx="5" fill="var(--velmora-porcelain)" />
        <path d="M37 66c3 11 9 18 13 20 4-2 10-9 13-20" fill="none" stroke={`url(#${ids.gold})`} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="50" cy="90" r="7" fill={`url(#${ids.gold})`} />
        <circle cx="36" cy="73" r="4.5" fill={`url(#${ids.gold})`} />
        <circle cx="64" cy="73" r="4.5" fill={`url(#${ids.gold})`} />
      </>
    )
  }

  if (view === 'detail') {
    return (
      <>
        <rect width="100" height="124" fill={`url(#${ids.dark})`} />
        <rect x="16" y="18" width="68" height="88" rx="10" fill="var(--velmora-card)" />
        <path d="M37 52c3 10 9 16 13 18 4-2 10-8 13-18" fill="none" stroke={`url(#${ids.gold})`} strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="72" r="8" fill={`url(#${ids.gold})`} />
        <circle cx="35" cy="56" r="5" fill={`url(#${ids.gold})`} />
        <circle cx="65" cy="56" r="5" fill={`url(#${ids.gold})`} />
        <ellipse cx="50" cy="108" rx="20" ry="7" fill="var(--velmora-porcelain)" fillOpacity="0.22" />
      </>
    )
  }

  return (
    <>
      <rect width="100" height="124" fill={`url(#${ids.light})`} />
      <circle cx="76" cy="18" r="29" fill="var(--velmora-ink)" />
      <ellipse cx="38" cy="73" rx="33" ry="45" fill={`url(#${ids.skin})`} />
      <path d="M66 24c16 18 22 34 21 60-1 17-6 28-15 40" fill="var(--velmora-ink)" />
      <path d="M30 78c8 10 18 16 20 16s12-6 20-16" fill="none" stroke={`url(#${ids.gold})`} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="50" cy="95" r="7" fill={`url(#${ids.gold})`} />
      <circle cx="34" cy="83" r="4" fill={`url(#${ids.gold})`} />
      <circle cx="66" cy="83" r="4" fill={`url(#${ids.gold})`} />
    </>
  )
}

export const JewelryArtwork = ({ productId, image, className = '' }) => {
  const svgId = useId().replace(/:/g, '')
  const view = getView(image?.id)
  const ids = {
    dark: `${svgId}-dark`,
    light: `${svgId}-light`,
    gold: `${svgId}-gold`,
    skin: `${svgId}-skin`,
  }

  return (
    <div role="img" aria-label={image.alt} className={['relative isolate h-full w-full overflow-hidden', className].join(' ')}>
      <svg viewBox="0 0 100 124" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={ids.dark} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--velmora-ink)" />
            <stop offset="100%" stopColor="var(--velmora-line)" />
          </linearGradient>
          <linearGradient id={ids.light} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--velmora-card)" />
            <stop offset="100%" stopColor="var(--velmora-porcelain)" />
          </linearGradient>
          <linearGradient id={ids.gold} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--velmora-champagne)" />
            <stop offset="100%" stopColor="var(--velmora-champagne-deep)" />
          </linearGradient>
          <linearGradient id={ids.skin} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--velmora-porcelain)" />
            <stop offset="100%" stopColor="var(--velmora-line)" />
          </linearGradient>
        </defs>
        {renderArtwork(productId, view, ids)}
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_30%)]" />
    </div>
  )
}
