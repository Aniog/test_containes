import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingDown, Clock, ShieldCheck } from 'lucide-react'

const caseStudies = [
  {
    id: 'cs-german-electronics',
    title: 'Consumer Electronics Sourcing for German Retailer',
    client: 'German Consumer Electronics Brand',
    industry: 'Consumer Electronics',
    challenge: 'The client was sourcing Bluetooth speakers through a trading company and paying a 35% markup. They needed direct factory access but lacked the language skills and on-the-ground presence to vet manufacturers.',
    solution: 'We identified and audited 6 factories in Shenzhen. After sample evaluation and pricing negotiations, we shortlisted 3 qualified suppliers. We managed the entire transition from the trading company to direct factory relationships.',
    results: [
      '22% reduction in unit cost by bypassing middlemen',
      '99.2% on-time delivery rate over 12 months',
      'Zero critical defects across 50,000+ units inspected',
      'Established long-term contracts with 2 primary factories',
    ],
    imgId: 'case-german-elec-bg-a1b2c3',
  },
  {
    id: 'cs-us-furniture',
    title: 'Furniture Sourcing for US Retail Chain',
    client: 'US Home Furnishings Retailer',
    industry: 'Furniture',
    challenge: 'The client needed to expand their supplier base in China for solid wood furniture. Previous experiences with unverified suppliers led to quality issues and delayed shipments.',
    solution: 'We audited 8 factories in Foshan, evaluating wood quality, finishing capabilities, and export experience. We implemented a QC protocol with inspections at three stages: raw material, mid-production, and pre-shipment.',
    results: [
      '14 container shipments delivered with zero critical defects',
      'Negotiated 60-day payment terms (up from 30 days)',
      'Reduced defect rate from 8% to under 1%',
      'Onboarded 3 new reliable factory partners',
    ],
    imgId: 'case-us-furniture-bg-d4e5f6',
  },
  {
    id: 'cs-uk-packaging',
    title: 'Eco-Friendly Packaging for UK Beauty Brand',
    client: 'UK Natural Cosmetics Company',
    industry: 'Packaging',
    challenge: 'The client wanted custom eco-friendly packaging made from recycled materials. Local suppliers were too expensive, and they had never sourced from China before.',
    solution: 'We found 4 specialized packaging manufacturers with FSC certification. We managed mold development, material testing, and color matching. First order delivered in 45 days from PO confirmation.',
    results: [
      '45-day turnaround from order to delivery',
      '60% cost savings compared to UK suppliers',
      'FSC-certified materials verified and documented',
      'Repeat orders placed quarterly with same supplier',
    ],
    imgId: 'case-uk-packaging-bg-g7h8i9',
  },
  {
    id: 'cs-au-hardware',
    title: 'Machinery Parts for Australian Manufacturer',
    client: 'Australian Industrial Equipment Company',
    industry: 'Industrial / Hardware',
    challenge: 'The client needed precision CNC-machined components with tight tolerances. Previous suppliers in other Asian countries could not meet the quality and consistency requirements.',
    solution: 'We identified 5 CNC machining factories in Dongguan, conducted capability assessments including sample runs, and selected the top 2 candidates. We implemented statistical process control and 100% dimensional inspection.',
    results: [
      '99.8% dimensional accuracy across 100,000+ parts',
      '35% lower unit cost vs. previous supplier',
      'Established JIT delivery schedule reducing inventory costs',
      'ISO 9001 compliance verified and maintained',
    ],
    imgId: 'case-au-hardware-bg-j0k1l2',
  },
]

const metrics = [
  { icon: TrendingDown, value: '22-60%', label: 'Average Cost Savings' },
  { icon: Clock, value: '99.2%', label: 'On-Time Delivery Rate' },
  { icon: ShieldCheck, value: '0', label: 'Critical Defects (Our QC)' },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-navy py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Case Studies
          </h1>
          <p className="text-lg text-brand-gray-400 max-w-2xl mx-auto">
            Real projects, real results. See how we help buyers source smarter from China.
          </p>
        </div>
      </section>

      {/* Metrics bar */}
      <section className="bg-white border-b border-brand-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            {metrics.map((m) => (
              <div key={m.label}>
                <m.icon className="w-6 h-6 text-brand-blue mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-extrabold text-brand-navy">{m.value}</div>
                <div className="text-xs md:text-sm text-brand-gray-500 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies list */}
      <section className="py-20 md:py-28 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <article
                key={cs.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div
                    className="rounded-xl overflow-hidden"
                    data-strk-bg-id={cs.imgId}
                    data-strk-bg={`[${cs.id}-solution] [${cs.id}-title]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                  >
                    <div className="h-72 md:h-80 bg-brand-gray-200" />
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
                    {cs.industry}
                  </span>
                  <h2 id={`${cs.id}-title`} className="text-xl md:text-2xl font-bold text-brand-navy mt-2 mb-1">
                    {cs.title}
                  </h2>
                  <p className="text-sm text-brand-gray-500 mb-6">{cs.client}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold text-brand-navy">Challenge</h3>
                      <p className="text-sm text-brand-gray-600">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 id={`${cs.id}-solution`} className="text-sm font-semibold text-brand-navy">Our Solution</h3>
                      <p className="text-sm text-brand-gray-600">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="bg-white border border-brand-gray-200 rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-green-700 mb-3">Results</h3>
                    <ul className="space-y-2">
                      {cs.results.map((r, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-brand-gray-700">
                          <span className="text-green-600 font-bold mt-0.5">&bull;</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for your own success story?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Submit your sourcing requirements and become our next case study.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-blue font-semibold rounded-lg hover:bg-brand-gray-100 transition-colors"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
