import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="bg-amber py-14 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div>
            <h2 className="text-charcoal font-bold text-2xl sm:text-3xl mb-2">
              Ready to Upgrade Your Production?
            </h2>
            <p className="text-charcoal/70 text-base max-w-xl">
              Get a customized quote for your metal folding needs. Our engineers will design the perfect solution for your workshop.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 bg-charcoal text-white font-semibold px-8 py-4 rounded hover:bg-steel transition-all duration-300 shadow-lg hover:-translate-y-0.5 flex-shrink-0 group"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
