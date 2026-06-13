import { useScrollAnimation } from '../lib/useScrollAnimation'

export default function CtaBanner() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative py-20 lg:py-28 bg-brand-dark overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,169,89,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,89,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div
        ref={ref}
        className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${
          isVisible ? 'animate-slide-up' : 'opacity-0'
        }`}
      >
        <p className="text-brand-accent text-xs font-medium tracking-[0.3em] uppercase mb-4">
          Partner With Us
        </p>
        <h2 className="font-heading text-3xl lg:text-5xl font-bold text-brand-surface mb-6 leading-tight">
          Your Next Precision Machine{' '}
          <span className="text-brand-accent">Starts Here</span>
        </h2>
        <p className="text-brand-surface/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you need a single sheet metal folder or a complete production line,
          our engineers will design the perfect solution for your specific requirements.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-brand-dark font-semibold rounded tracking-wide uppercase text-sm hover:bg-brand-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/20"
          >
            Request a Free Quote
          </a>
          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-brand-surface/20 text-brand-surface font-semibold rounded tracking-wide uppercase text-sm hover:border-brand-accent hover:text-brand-accent transition-all duration-300"
          >
            View All Machines
          </a>
        </div>
      </div>
    </section>
  )
}
