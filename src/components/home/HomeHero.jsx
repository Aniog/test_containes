import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&q=80&auto=format&fit=crop"
          alt="AI background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      {/* Dashed grid decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Dashed circle accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-white/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-dashed border-white/5 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <Badge className="mb-6 inline-flex gap-1.5 border-white/20 bg-white/5 text-white/70">
          <Sparkles className="w-3 h-3" />
          Introducing AetherAI 2.0
        </Badge>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-6">
          Build websites
          <br />
          <span className="text-white/30">with intelligence.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
          AetherAI transforms your ideas into fully functional, beautifully designed websites in minutes. No code. No friction. Just results.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/product">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold gap-2 px-8">
              Start Building Free
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/pricing">
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 px-8">
              View Pricing
            </Button>
          </Link>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-white/30 text-sm">
          <span>Trusted by 50,000+ builders</span>
          <span className="w-px h-4 bg-white/20" />
          <span>No credit card required</span>
          <span className="w-px h-4 bg-white/20" />
          <span>Deploy in seconds</span>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
