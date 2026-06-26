import { ArrowRight, Phone } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 21px)`
      }} />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl lg:text-5xl font-bold text-brand-900 mb-4">
          Ready to Upgrade Your Metal Fabrication?
        </h2>
        <p className="text-brand-900/70 text-lg max-w-2xl mx-auto mb-8">
          Get a custom quote for an ARTITECT double folding machine tailored to your production requirements.
          Our engineers are standing by.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-900 text-white font-semibold rounded-sm hover:bg-brand-800 transition-all group"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:+12165550187"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-brand-900/30 text-brand-900 font-semibold rounded-sm hover:bg-brand-900/10 transition-all"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
