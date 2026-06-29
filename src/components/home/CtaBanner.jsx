import { ArrowRight } from 'lucide-react'

const CtaBanner = () => {
  return (
    <section className="py-16 md:py-20 bg-brand-steel relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Ready to Upgrade Your Fabrication Line?
        </h2>
        <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
          Get a customized solution tailored to your production needs. Our engineers are standing by.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark font-semibold px-8 py-4 rounded-full transition-colors duration-200 text-base"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:+8655512345678"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-colors duration-200 text-base"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
