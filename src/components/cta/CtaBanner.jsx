import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="bg-primary py-16 md:py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
          Start Fabricating with{' '}
          <span className="text-accent">Confidence</span>
        </h2>
        <p className="text-steel text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
          Join thousands of metal fabrication professionals who trust ARTITECT machines
          for their most demanding projects. Request a free quote today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-bold text-base rounded-lg hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Request a Free Quote
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold text-base rounded-lg hover:border-white/40 hover:bg-white/5 transition-all"
          >
            Browse Machines
          </a>
        </div>
      </div>
    </section>
  )
}
