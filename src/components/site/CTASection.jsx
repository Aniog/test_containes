import CTAButton from '@/components/site/CTAButton'

const CTASection = () => {
  return (
    <section className="bg-slate-950 py-16 md:py-20">
      <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-slate-800 bg-slate-900 px-6 py-10 text-center shadow-sm sm:px-8 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
          Start with a practical conversation
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Tell us what you need to source from China
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
          Share your product, target quantity, quality expectations, and sourcing
          challenges. We will review the request and reply with realistic next
          steps.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTAButton arrow className="w-full sm:w-auto" to="/contact">
            Get a Free Sourcing Quote
          </CTAButton>
          <CTAButton className="w-full sm:w-auto" to="/how-it-works" variant="secondary">
            See the sourcing process
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

export default CTASection
