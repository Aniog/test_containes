import { Badge } from '@/components/ui/badge'
import { Cpu } from 'lucide-react'

export default function ProductHero() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80&auto=format&fit=crop"
          alt="AI workspace"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* Dashed grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <Badge className="mb-6 inline-flex gap-1.5 border-white/20 bg-white/5 text-white/70">
          <Cpu className="w-3 h-3" />
          AI Capabilities
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
          The intelligence
          <br />
          <span className="text-white/30">behind your site.</span>
        </h1>
        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          AetherAI uses a suite of specialized models to understand your brand, generate content, and produce pixel-perfect designs — all working in concert.
        </p>
      </div>
    </section>
  )
}
