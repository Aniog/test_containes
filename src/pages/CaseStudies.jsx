import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { MapPin, ArrowRight, Check } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import Section, { SectionHeader } from '@/components/shared/Section'
import InquiryForm from '@/components/shared/InquiryForm'
import { CASE_STUDIES } from '@/content/site'

const CASE_IMAGES = {
  'us-home-goods-defect': 'ceramic dinnerware quality inspection in factory',
  'uk-eco-packaging': 'kraft mailer bags and eco-friendly retail packaging',
  'au-electronics': 'USB-C hub electronics on a production line',
  'de-beauty': 'skincare cosmetics in a clean lab environment',
}

const Hero = () => {
  const ref = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, ref.current), [])
  return (
    <section ref={ref} className="bg-white border-b border-slate-200">
      <div className="container-content py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="kicker">Case studies</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] tracking-tight">
            Selected work with importers, retailers, and brands
          </h1>
          <p className="mt-5 text-lg md:text-xl text-primary-600 leading-relaxed">
            A few examples of recent projects. Client names are kept confidential at their request, but the numbers, products, and challenges are real.
          </p>
        </div>
      </div>
    </section>
  )
}

const CaseStudyFull = () => {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref} className="space-y-12 md:space-y-20">
      {CASE_STUDIES.map((c, idx) => {
        const reverse = idx % 2 === 1
        return (
          <article
            key={c.id}
            id={c.id}
            className="bg-white border border-slate-200 rounded-xl overflow-hidden"
          >
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0`}>
              <div className={`lg:col-span-5 ${reverse ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id={`cs-${c.id}-img-2d${idx}`}
                    data-strk-img={`[${c.id}-title] [${c.id}-country]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={CASE_IMAGES[c.id]}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={`lg:col-span-7 p-6 md:p-8 lg:p-10 ${reverse ? 'lg:order-1' : ''}`}>
                <div className="flex flex-wrap items-center gap-2 text-xs text-primary-500 mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  <span id={`${c.id}-country`}>{c.country}</span>
                  <span aria-hidden>•</span>
                  <span>{c.category}</span>
                </div>
                <h2 id={`${c.id}-title`} className="text-2xl md:text-3xl font-bold text-primary tracking-tight mb-3">
                  {c.title}
                </h2>
                <p className="text-base md:text-lg text-primary-600 leading-relaxed mb-6">
                  {c.summary}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="bg-slate-50 border border-slate-200 rounded-md p-3">
                      <div className="text-lg md:text-xl font-bold text-primary">{m.value}</div>
                      <div className="text-[11px] uppercase tracking-wider text-primary-500 mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 text-sm md:text-base text-primary-700 leading-relaxed">
                  {c.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

const CaseStudies = () => (
  <>
    <Hero />

    <Section>
      <CaseStudyFull />
    </Section>

    <Section soft>
      <SectionHeader
        kicker="Working with us"
        title="The work behind the case studies"
        description="These results are not accidents. They come from a structured process and a team that is paid to be on the ground, not at a desk."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          'Written reports at every step — no vague "we are following up" updates.',
          'A single point of contact who owns your account end-to-end.',
          'Independent verification of every factory before we recommend them.',
        ].map((t) => (
          <div key={t} className="card h-full flex items-start gap-3">
            <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex-shrink-0">
              <Check className="w-3 h-3" strokeWidth={3} />
            </span>
            <p className="text-sm md:text-base text-primary-700 leading-relaxed">{t}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5">
          <p className="kicker">Become our next case study</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            Have a project in mind?
          </h2>
          <p className="mt-4 md:mt-5 text-base md:text-lg text-primary-600 leading-relaxed">
            Tell us what you need. We will reply within one business day.
          </p>
          <Link to="/contact" className="btn-primary mt-6">
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="lg:col-span-7">
          <InquiryForm sourcePage="case-studies" />
        </div>
      </div>
    </Section>
  </>
)

export default CaseStudies
