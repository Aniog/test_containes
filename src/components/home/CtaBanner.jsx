import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-20 bg-steel relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gold rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Need a Custom Metal Folding Solution?
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
          Our engineers can design bespoke folding machines tailored to your exact specifications and production requirements.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-charcoal px-8 py-3.5 rounded font-semibold tracking-wide transition-colors duration-200"
        >
          Discuss Your Project
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
