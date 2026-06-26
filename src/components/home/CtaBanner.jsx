import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Upgrade Your Workshop?
        </h2>
        <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers worldwide who trust ARTITECT for
          their metal folding needs. Get a custom quote today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center gap-2 text-base"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="border-2 border-white/30 hover:border-gold-500 text-white hover:text-gold-500 font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-base"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}
