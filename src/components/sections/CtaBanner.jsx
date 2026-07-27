import Button from '@/components/ui/Button'

export default function CtaBanner({
  title = 'Ready to source from China with confidence?',
  subtitle = 'Tell us what you need. We will respond within one business day with next steps and a free, no-obligation quote.',
}) {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="rounded-2xl bg-gradient-to-br from-primary-accent to-primary px-8 py-12 lg:px-14 lg:py-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-200">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" size="lg" variant="primary">
              Get a Free Sourcing Quote
            </Button>
            <Button to="/services" size="lg" variant="outline" className="bg-white/10 border-white/40 text-white hover:bg-white hover:text-primary">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
