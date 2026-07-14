import { ArrowRight, Sparkles, Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection({ onScrollToForm }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-slate-200">Welcome to our platform</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Build something
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              extraordinary
            </span>
          </h1>

          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            We help businesses grow with innovative solutions. Reach out to us
            and let's discuss how we can bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              onClick={onScrollToForm}
              className="bg-blue-600 hover:bg-blue-700 text-white gap-2 px-8"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              Learn More
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-white">Trusted</h3>
                <p className="text-sm text-slate-400">By 10,000+ clients</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/20">
                <Clock className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-white">Fast Response</h3>
                <p className="text-sm text-slate-400">Within 24 hours</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-500/20">
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-white">Premium Quality</h3>
                <p className="text-sm text-slate-400">100% satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
