import CTAButton from './CTAButton.jsx'

const PageHero = ({ eyebrow, title, description, imageId, heroId = 'page-hero', visualHint = 'factory quality inspection production line warehouse shipping logistics sourcing China', children }) => {
  const eyebrowId = `${heroId}-eyebrow`
  const titleId = `${heroId}-title`
  const descriptionId = `${heroId}-description`
  const visualId = `${heroId}-visual`

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p id={eyebrowId} className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
            {eyebrow}
          </p>
          <h1 id={titleId} className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p id={descriptionId} className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {description}
          </p>
          <p id={visualId} className="sr-only">{visualHint}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton />
            <CTAButton to="/services" variant="secondary">View Services</CTAButton>
          </div>
          {children && <div className="mt-8">{children}</div>}
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
          <img
            className="h-[360px] w-full object-cover sm:h-[430px]"
            data-strk-img-id={imageId}
            data-strk-img={`[${visualId}] [${descriptionId}] [${titleId}] [${eyebrowId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="SSourcing China sourcing and quality control support"
          />
        </div>
      </div>
    </section>
  )
}

export default PageHero
