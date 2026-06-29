import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-20 bg-navy-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Ready to Upgrade Your Metal Forming?
        </h2>
        <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-8">
          Get a customized solution tailored to your production needs. Our engineers are standing by.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-gold hover:bg-gold-light text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 flex items-center gap-2"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:+15551234567"
            className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 rounded-full text-base transition-all duration-300"
          >
            Call Us Today
          </a>
        </div>
      </div>
    </section>
  )
}
