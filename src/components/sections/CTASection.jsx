import CTAButton from '../common/CTAButton'

export default function CTASection() {
  return (
    <section className="bg-sky-700 py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white/80">Ready to discuss your project?</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">Send a sourcing brief and get practical next steps.</h2>
        </div>
        <CTAButton className="shrink-0" />
      </div>
    </section>
  )
}
