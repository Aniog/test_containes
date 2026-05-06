import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HomeCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Dashed border box */}
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute inset-0 rounded-2xl border border-dashed border-white/20 pointer-events-none" />
        <div className="absolute -top-px left-16 right-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute -bottom-px left-16 right-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="text-center py-20 px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Ready to build
            <br />
            <span className="text-white/30">something great?</span>
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-lg mx-auto">
            Join 50,000+ creators who ship faster with AetherAI. Start free, no credit card needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/product">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold gap-2 px-8">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="ghost" className="text-white/60 hover:text-white px-8">
                Compare Plans
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
