import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'
import PageHero, { CtaBanner } from '@/components/PageHero.jsx'
import { CASE_STUDIES } from '@/data/content.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

export default function CaseStudies() {
  const ref = useStrkImages()

  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Selected sourcing, QC, and shipping projects"
        description="A snapshot of recent work across consumer electronics, home goods, beauty, and industrial hardware. We share the challenge, the actions we took, and the measurable outcome."
      />

      <section ref={ref} className="section-pad bg-white">
        <div className="container-page space-y-8">
          {CASE_STUDIES.map((cs, idx) => (
            <article
              key={cs.industry + cs.client}
              className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-12 md:gap-8 md:p-8"
            >
              <div className="md:col-span-4">
                <div
                  className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-brand-mist"
                  data-strk-img-id={`case-${idx}-img-c0ffee`}
                  data-strk-img={`[case-${idx}-product] [case-${idx}-industry] china ${cs.product.toLowerCase()} ${cs.industry.toLowerCase()}`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  alt={`${cs.industry} project: ${cs.product}`}
                />
                <div className="mt-4">
                  <span className="rounded-full bg-brand-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-accent">
                    {cs.industry}
                  </span>
                </div>
                <h3 id={`case-${idx}-product`} className="mt-3 text-xl font-semibold text-brand-ink">
                  {cs.product}
                </h3>
                <p id={`case-${idx}-industry`} className="mt-1 text-sm text-slate-500">
                  Client: {cs.client}
                </p>
              </div>

              <div className="space-y-5 md:col-span-8">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Challenge</div>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700 md:text-base">{cs.challenge}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">What we did</div>
                  <ul className="mt-2 space-y-1.5 text-sm text-slate-700 md:text-base">
                    {cs.actions.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-accent" />
                        <span className="leading-relaxed">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-md border border-emerald-100 bg-emerald-50 p-4">
                  <div className="flex items-start gap-2.5">
                    <Quote className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Outcome</div>
                      <p className="mt-1 text-sm leading-relaxed text-emerald-900 md:text-base">{cs.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-brand-mist">
        <div className="container-page">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-brand-ink md:text-3xl">
              Have a project that looks similar?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
              Send us your brief and we will reply with a sourcing plan within one business day — no commitment, no charge.
            </p>
            <div className="mt-6 flex justify-center">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
