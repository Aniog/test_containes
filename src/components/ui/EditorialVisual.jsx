import { cn } from '@/lib/utils'

const palette = {
  hero: {
    frame: 'bg-gradient-to-br from-velmora-noir via-velmora-ink to-velmora-gold/60',
    glowA: 'bg-velmora-gold/40',
    glowB: 'bg-velmora-champagne/55',
    silhouette: 'bg-velmora-ivory/22',
  },
  portrait: {
    frame: 'bg-gradient-to-br from-velmora-noir via-velmora-ink to-velmora-champagne/70',
    glowA: 'bg-velmora-gold/45',
    glowB: 'bg-velmora-ivory/40',
    silhouette: 'bg-velmora-ivory/24',
  },
  still: {
    frame: 'bg-gradient-to-br from-velmora-ivory via-velmora-champagne to-velmora-pearl',
    glowA: 'bg-velmora-gold/30',
    glowB: 'bg-velmora-ink/10',
    silhouette: 'bg-velmora-ivory/85',
  },
  gift: {
    frame: 'bg-gradient-to-br from-velmora-ink via-velmora-noir to-velmora-gold/50',
    glowA: 'bg-velmora-gold/35',
    glowB: 'bg-velmora-champagne/45',
    silhouette: 'bg-velmora-ivory/26',
  },
}

export default function EditorialVisual({ className, mood = 'portrait', accent = 'left', children }) {
  const theme = palette[mood] || palette.portrait

  return (
    <div className={cn('relative overflow-hidden rounded-[inherit]', theme.frame, className)}>
      <div className={cn('absolute -top-10 h-44 w-44 rounded-full blur-3xl', theme.glowA, accent === 'left' ? '-left-10' : 'right-4')} />
      <div className={cn('absolute bottom-6 h-36 w-36 rounded-full blur-3xl', theme.glowB, accent === 'left' ? 'right-4' : 'left-4')} />
      <div className={cn('absolute bottom-0 left-1/2 h-[78%] w-[44%] -translate-x-1/2 rounded-t-[999px] blur-sm', theme.silhouette)} />
      <div className="absolute inset-x-[18%] bottom-[18%] h-4 rounded-full bg-velmora-gold/70 blur-sm" />
      <div className="absolute inset-x-[34%] top-[30%] h-24 w-24 rounded-full border border-velmora-gold/70" />
      <div className="absolute inset-x-[24%] top-[18%] h-16 rounded-full border border-velmora-ivory/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-noir/15 via-transparent to-white/5" />
      {children}
    </div>
  )
}
