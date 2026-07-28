import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const PageHero = ({
  eyebrow,
  title,
  description,
  titleId,
  descriptionId,
  visualId,
  visualBadge = 'Factory verification and sourcing support in China',
  visualNote,
  chips,
  primaryCta,
  secondaryCta,
}) => {
  const visualBadgeId = `${visualId}-badge`
  const visualNoteId = `${visualId}-note`
  const visualCards = [
    {
      key: 'factory',
      title: 'Factory verification',
      note: 'Review supplier legitimacy, capability, and production fit before moving forward.',
      imageId: `${visualId}-factory-img`,
    },
    {
      key: 'quality',
      title: 'Quality inspection',
      note: 'Keep product specifications, workmanship, and shipment readiness visible before cargo release.',
      imageId: `${visualId}-quality-img`,
    },
    {
      key: 'shipping',
      title: 'Shipping coordination',
      note: 'Align packing details, documents, and handover timing with the supplier and forwarder.',
      imageId: `${visualId}-shipping-img`,
    },
  ]

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              {eyebrow}
            </p>
            <div className="space-y-4">
              <h1
                id={titleId}
                className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
              >
                {title}
              </h1>
              <p
                id={descriptionId}
                className="max-w-3xl text-lg leading-8 text-slate-600"
              >
                {description}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to={primaryCta.to}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              {primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to={secondaryCta.to}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              {secondaryCta.label}
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 shadow-xl">
          <div className="space-y-6 p-6 text-white md:p-8">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span
                  id={visualBadgeId}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white"
                >
                  {visualBadge}
                </span>
                <span className="text-sm font-medium text-blue-100">China-based B2B sourcing workflow</span>
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-blue-100">
                Why buyers use us
              </p>
              <p id={visualNoteId} className="mt-3 max-w-xl text-base leading-7 text-slate-100">
                {visualNote}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {visualCards.map((card) => {
                const cardTitleId = `${visualId}-${card.key}-title`
                const cardNoteId = `${visualId}-${card.key}-note`

                return (
                  <article
                    key={card.key}
                    className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm"
                  >
                    <img
                      alt={card.title}
                      className="h-36 w-full object-cover"
                      data-strk-img-id={card.imageId}
                      data-strk-img={`[${cardNoteId}] [${cardTitleId}] [${visualBadgeId}] [${titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="space-y-2 p-4">
                      <p id={cardTitleId} className="text-base font-semibold text-white">
                        {card.title}
                      </p>
                      <p id={cardNoteId} className="text-sm leading-6 text-slate-200">
                        {card.note}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHero
