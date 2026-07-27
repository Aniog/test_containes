import CTAButton from '@/components/layout/CTAButton'

export default function CTABand({
  title = 'Ready to source from China with confidence?',
  description = 'Get a free sourcing quote. Tell us about your product and we will shortlist vetted suppliers — no obligation to proceed.',
}) {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
            {description}
          </p>
          <CTAButton className="px-8 py-3.5 text-base" />
        </div>
      </div>
    </section>
  )
}
