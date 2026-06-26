import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Ready to Upgrade Your Metal Folding Operations?
        </h2>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
          Get in touch with our engineering team to find the perfect folding solution for your production needs.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+18005550199"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-lg border border-white/20 transition-colors duration-200"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}
