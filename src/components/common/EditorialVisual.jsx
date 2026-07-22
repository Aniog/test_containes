import { cn } from '@/lib/utils'

const palettes = {
  light: 'from-velmora-ivory via-velmora-champagne to-velmora-mist text-velmora-burnished',
  dark: 'from-velmora-espresso via-velmora-cacao to-velmora-burnished text-velmora-gold',
  warm: 'from-velmora-champagne via-velmora-ivory to-velmora-gold/30 text-velmora-burnished',
}

function Motif({ type }) {
  if (type === 'model') {
    return (
      <>
        <path d="M226 78c-45 15-70 53-64 100 4 32 23 54 51 66M222 111c22 25 24 56 6 88M142 306c36-35 79-47 128-36M184 214c-21 47-41 78-72 104" />
        <path d="M229 178a22 22 0 1 0 1 0M236 179a42 42 0 1 0 1 0M173 294c23 22 62 26 91 8" />
      </>
    )
  }

  if (type === 'necklace') {
    return <path d="M90 82c28 80 64 120 110 120s82-40 110-120M200 203v42M176 276c0-13 11-24 24-24s24 11 24 24-11 24-24 24-24-11-24-24Z" />
  }

  if (type === 'huggies') {
    return <path d="M146 170a45 45 0 1 0 1 0M254 170a45 45 0 1 0 1 0M127 118c13-12 39-12 52 0M235 118c13-12 39-12 52 0" />
  }

  if (type === 'gift') {
    return <path d="M115 156h170v130H115zM115 196h170M200 156v130M146 128c24-18 48-8 54 28M254 128c-24-18-48-8-54 28" />
  }

  if (type === 'workshop') {
    return <path d="M92 240h216M120 188h160M146 136h108M128 242l-24 54M272 242l24 54M172 112c18-15 38-15 56 0M162 300c20 18 56 18 76 0" />
  }

  return <path d="M200 86c-58 20-93 73-80 130 12 50 58 83 111 72M218 126c-35 16-55 49-47 82 7 28 32 47 64 47M246 91h1M252 91a14 14 0 1 1-28 0 14 14 0 0 1 28 0Z" />
}

export default function EditorialVisual({ type = 'earrings', palette = 'light', label, className, children }) {
  return (
    <div className={cn('relative h-full w-full overflow-hidden bg-gradient-to-br', palettes[palette], className)} role={label ? 'img' : undefined} aria-label={label}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.55),transparent_34%)]" />
      <div className="absolute inset-5 border border-current/20" />
      <div className="absolute -right-14 top-10 h-48 w-48 rounded-full border border-current/20" />
      <div className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-current/10 blur-3xl" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 m-auto h-2/3 w-2/3 fill-none stroke-current stroke-[8]" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <Motif type={type} />
      </svg>
      {children}
    </div>
  )
}
