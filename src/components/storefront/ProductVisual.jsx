const forms = {
  'vivid-aura-jewels': 'cuff',
  'majestic-flora-nectar': 'floral',
  'golden-sphere-huggies': 'huggies',
  'amber-lace-earrings': 'lace',
  'royal-heirloom-set': 'set',
}

export default function ProductVisual({ product, variant = 'primary', className = '' }) {
  const form = forms[product.id] || 'huggies'
  const warm = variant === 'primary'
  const positionClass = className.includes('absolute') ? '' : 'relative'

  return (
    <div
      role="img"
      aria-label={`${product.name} gold jewelry editorial placeholder`}
      className={`${positionClass} product-visual-surface ${warm ? '' : 'product-visual-surface-alt'} h-full w-full overflow-hidden ${className}`}
    >
      <div className={`absolute -left-10 -top-10 h-44 w-44 rounded-full blur-3xl ${warm ? 'bg-velmora-clay/35' : 'bg-velmora-champagne/30'}`} />
      <div className={`absolute -bottom-12 -right-8 h-52 w-52 rounded-full blur-3xl ${warm ? 'bg-velmora-champagne/25' : 'bg-velmora-porcelain/15'}`} />
      <div className="absolute inset-6 rounded-[1.5rem] border border-velmora-champagne/25" />
      <div className="absolute left-6 top-6 h-20 w-20 rounded-full border border-velmora-champagne/20" />
      <svg viewBox="0 0 260 320" className="product-visual-metal absolute inset-0 h-full w-full">
        {form === 'cuff' && <Cuff alternate={!warm} />}
        {form === 'floral' && <Floral alternate={!warm} />}
        {form === 'huggies' && <Huggies alternate={!warm} />}
        {form === 'lace' && <Lace alternate={!warm} />}
        {form === 'set' && <Set alternate={!warm} />}
      </svg>
    </div>
  )
}

function Cuff({ alternate }) {
  return <g fill="none" stroke="currentColor" strokeLinecap="round"><path d={alternate ? 'M83 185c20-58 80-81 112-34' : 'M78 172c24-62 93-76 118-21'} strokeWidth="14"/><path d="M98 181c21 24 61 26 86 2" strokeWidth="5" opacity=".65"/><circle cx="184" cy="143" r="12" fill="currentColor"/><circle cx="184" cy="143" r="5" fill="white" opacity=".55"/></g>
}

function Floral({ alternate }) {
  const x = alternate ? 132 : 128
  return <g fill="none" stroke="currentColor" strokeLinecap="round"><path d="M72 92c35 34 80 34 116 0" strokeWidth="3" opacity=".75"/><path d="M130 95c-7 34-7 67 0 99" strokeWidth="4"/><g fill="currentColor" stroke="none"><circle cx={x} cy="169" r="13"/><circle cx={x - 16} cy="154" r="11"/><circle cx={x + 16} cy="154" r="11"/><circle cx={x - 12} cy="184" r="10"/><circle cx={x + 12} cy="184" r="10"/></g><circle cx={x} cy="169" r="6" fill="white" opacity=".5"/></g>
}

function Huggies({ alternate }) {
  const shift = alternate ? 10 : 0
  return <g fill="none" stroke="currentColor"><circle cx={104 - shift} cy="158" r="39" strokeWidth="16"/><circle cx={166 + shift} cy="158" r="39" strokeWidth="16"/><path d="M86 210c18 19 64 23 88 0" strokeWidth="4" opacity=".55"/></g>
}

function Lace({ alternate }) {
  const y = alternate ? 142 : 134
  return <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d={`M92 ${y}h76l-38 92z`} strokeWidth="6"/><path d={`M104 ${y + 18}h52M113 ${y + 40}h34M130 ${y}v90M94 ${y}l36 90M166 ${y}l-36 90`} strokeWidth="3" opacity=".7"/><circle cx="92" cy={y} r="10" fill="currentColor"/><circle cx="168" cy={y} r="10" fill="currentColor"/></g>
}

function Set({ alternate }) {
  const rise = alternate ? -8 : 0
  return <g fill="none" stroke="currentColor" strokeLinecap="round"><path d="M72 96c33 45 83 45 116 0" strokeWidth="4"/><circle cx="130" cy={172 + rise} r="31" strokeWidth="8"/><circle cx="84" cy="220" r="22" strokeWidth="7"/><circle cx="176" cy="220" r="22" strokeWidth="7"/><path d="M108 270h44" strokeWidth="5" opacity=".65"/></g>
}
