import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-800/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Ready to Upgrade Your
          <span className="text-amber-500"> Production Line?</span>
        </h2>
        <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Let our engineering team design the perfect folding solution for your specific needs.
          Get a free consultation and custom quote today.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-all hover:shadow-lg hover:shadow-amber-600/25"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-600 text-white font-semibold rounded-xl hover:border-slate-400 hover:bg-white/5 transition-all"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}
