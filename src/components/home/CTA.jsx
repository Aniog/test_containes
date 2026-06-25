import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 lg:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          Ready to Upgrade Your Production Line?
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          Get a personalized recommendation from our engineering team. We will help you find the perfect folding solution for your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-light transition-colors no-underline text-base"
          >
            Get Your Free Quote
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20 no-underline text-base"
          >
            View All Machines
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
