import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingDown, Clock, ShieldCheck, Quote } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'
import CtaBand from '@/components/shared/CtaBand'

const caseStudies = [
  {
    id: 'kitchenware-us',
    tag: 'Home & Kitchen · United States',
    title: 'US kitchenware brand cut defect rate from 6% to under 1%',
    client: 'A Texas-based kitchenware brand selling through Amazon and regional retail chains.',
    challenge:
      'After two shipments with warped lids and inconsistent silicone seals — ordered through a B2B platform — returns were climbing and a key retail account was at risk.',
    approach: [
      'Audited their existing supplier plus three alternative factories in Guangdong',
      'Re-selected a manufacturer with in-house tooling and proper QC stations',
      'Rewrote the specification sheet with measurable tolerances and a sealed golden sample',
      'Inspected every shipment (DUPRO + pre-shipment) for 18 consecutive months',
    ],
    results: [
      { icon: TrendingDown, text: 'Defect rate reduced from 6% to 0.8% across 9 shipments' },
      { icon: ShieldCheck, text: 'Zero quality claims from the retail account since re-sourcing' },
      { icon: Clock, text: 'On-time shipment rate improved to 100% over 18 months' },
    ],
    quote: {
      text: 'The inspection reports are so detailed that our team can approve shipments without flying to China. That alone pays for the service.',
      role: 'Operations Director',
    },
    imgId: 'cs-kitchenware-2d64f1',
  },
  {
    id: 'audio-eu',
    tag: 'Consumer Electronics · Germany',
    title: 'German electronics importer launched a private-label audio line in 14 weeks',
    client: 'A Hamburg-based importer launching a private-label Bluetooth speaker range for European retail.',
    challenge:
      'They needed a factory that could meet CE and RoHS requirements, deliver retail-ready packaging in three languages, and hit a fixed spring launch date.',
    approach: [
      'Screened 30+ audio factories in Shenzhen and Dongguan; shortlisted 4 with valid test reports',
      'Coordinated 3 sample rounds including acoustic and drop testing feedback',
      'Verified CE documentation with the testing lab directly, not just factory claims',
      'Ran pre-shipment inspection and consolidated two SKUs into one 40HQ container to Hamburg',
    ],
    results: [
      { icon: Clock, text: '14 weeks from first brief to delivery at Hamburg port' },
      { icon: ShieldCheck, text: 'CE/RoHS documentation verified and accepted by EU customs' },
      { icon: TrendingDown, text: 'Landed cost 12% below the client’s original target' },
    ],
    quote: {
      text: 'They told us to walk away from a factory we had already paid a deposit to — and they were right. That honesty is why we still work together.',
      role: 'Founder',
    },
    imgId: 'cs-audio-5f18c3',
  },
  {
    id: 'furniture-au',
    tag: 'Furniture · Australia',
    title: 'Australian retailer consolidated 4 suppliers into one reliable supply chain',
    client: 'A Sydney furniture and homewares retailer buying from four factories across two provinces.',
    challenge:
      'Four suppliers meant four quality standards, four sets of documents, four partial containers — and freight costs that kept eroding margin.',
    approach: [
      'Benchmarked all four suppliers and replaced the weakest with an audited manufacturer',
      'Standardized packaging and QC checklists across the remaining factories',
      'Set up consolidated inspections covering all orders in single trips',
      'Merged cargo from three factories into shared containers with a single document package',
    ],
    results: [
      { icon: TrendingDown, text: '28% reduction in landed cost per unit' },
      { icon: ShieldCheck, text: 'One QC standard and one inspection report covering all suppliers' },
      { icon: Clock, text: 'Container utilization up from 62% to 91%' },
    ],
    quote: {
      text: 'Consolidation sounded complicated. They made it boring — which is exactly what you want from logistics.',
      role: 'Head of Buying',
    },
    imgId: 'cs-furniture-8b47e2',
  },
]

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case Studies"
            title="What working with us looks like in practice"
            description="Client names are withheld for confidentiality, but every detail below comes from real projects completed between 2023 and 2026."
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {caseStudies.map((cs, index) => (
            <article
              key={cs.id}
              className="grid gap-10 border-b border-line py-16 last:border-b-0 md:py-20 lg:grid-cols-5"
            >
              <div className="lg:col-span-2">
                <div className="overflow-hidden rounded-xl border border-line shadow-sm">
                  <img
                    alt={cs.title}
                    className="aspect-[4/3] w-full object-cover"
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[cs-${cs.id}-tag] [cs-${cs.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <figure className="mt-6 rounded-xl border border-line bg-paper p-6">
                  <Quote className="h-6 w-6 text-brand-600" />
                  <blockquote className="mt-3 text-base leading-relaxed text-ink">
                    “{cs.quote.text}”
                  </blockquote>
                  <figcaption className="mt-3 text-sm text-slate-500">
                    {cs.quote.role} · Case {String(index + 1).padStart(2, '0')}
                  </figcaption>
                </figure>
              </div>

              <div className="lg:col-span-3">
                <p id={`cs-${cs.id}-tag`} className="text-sm font-semibold text-brand-600">
                  {cs.tag}
                </p>
                <h2 id={`cs-${cs.id}-title`} className="mt-2 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                  {cs.title}
                </h2>

                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Client</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-body">{cs.client}</p>
                </div>

                <div className="mt-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Challenge</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-body">{cs.challenge}</p>
                </div>

                <div className="mt-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">What we did</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-body">
                    {cs.approach.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {cs.results.map((result) => (
                    <div key={result.text} className="rounded-lg bg-brand-50 p-4">
                      <result.icon className="h-5 w-5 text-brand-600" />
                      <p className="mt-2 text-sm font-medium leading-relaxed text-ink">
                        {result.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Your project could be next
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-body md:text-lg">
            Whether you are fixing a broken supply chain or building a new one, the
            first step is a conversation about your product and your targets.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Discuss your project <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}

export default CaseStudies
