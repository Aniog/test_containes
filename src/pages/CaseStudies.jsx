import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, TrendingUp, DollarSign, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    id: 'home-goods-importer',
    title: 'Home Goods Importer Cuts Defect Rate by 16 Points',
    category: 'Quality Control',
    client: 'US-based home goods retailer',
    challenge: 'The client was experiencing an 18% defect rate on ceramic products from a new supplier, leading to returns and customer complaints.',
    solution: 'We implemented a three-stage inspection process: pre-production material checks, inline production monitoring, and final pre-shipment inspection with detailed photographic reports.',
    result: 'Defect rate reduced from 18% to 2% within three production cycles. Customer returns dropped by 85%.',
    metrics: [
      { icon: TrendingUp, label: 'Defect rate', value: '18% → 2%' },
      { icon: DollarSign, label: 'Return cost saved', value: '$45K/year' },
      { icon: Clock, label: 'Time to fix', value: '3 cycles' },
    ],
  },
  {
    id: 'electronics-brand',
    title: 'Electronics Brand Cuts Sourcing Time by 35%',
    category: 'Supplier Sourcing',
    client: 'European consumer electronics brand',
    challenge: 'The client spent 3-4 months per sourcing cycle, with frequent supplier mismatches and communication delays.',
    solution: 'We built a pre-vetted supplier shortlist, introduced structured RFQ processes, and assigned a dedicated project manager for real-time communication.',
    result: 'Sourcing cycle reduced from 3-4 months to 2-3 weeks. Supplier match rate improved from 40% to 85%.',
    metrics: [
      { icon: Clock, label: 'Sourcing time', value: '3-4 mo → 2-3 wk' },
      { icon: TrendingUp, label: 'Match rate', value: '40% → 85%' },
      { icon: DollarSign, label: 'Opportunity cost saved', value: '$80K/year' },
    ],
  },
  {
    id: 'fashion-retailer',
    title: 'Fashion Retailer Saves $120K in First Year',
    category: 'Cost Optimization',
    client: 'Canadian fashion retailer',
    challenge: 'The client was paying above-market prices for apparel due to limited supplier options and lack of local negotiation support.',
    solution: 'We identified 12 alternative manufacturers, negotiated better terms, and introduced a competitive bidding process for each order.',
    result: 'Average unit cost reduced by 18%. Annual savings of $120K while maintaining quality standards.',
    metrics: [
      { icon: DollarSign, label: 'Cost reduction', value: '18%' },
      { icon: TrendingUp, label: 'Annual savings', value: '$120K' },
      { icon: CheckCircle2, label: 'Quality maintained', value: 'Yes' },
    ],
  },
  {
    id: 'industrial-parts',
    title: 'Industrial Parts Buyer Solves Quality Consistency Issues',
    category: 'Quality Control',
    client: 'German industrial equipment manufacturer',
    challenge: 'Inconsistent material specifications and dimensional tolerances were causing assembly line delays.',
    solution: 'We introduced material certification verification, first-article inspection, and statistical process control monitoring.',
    result: 'Zero quality-related production delays in 6 months. Supplier rating improved from C to A.',
    metrics: [
      { icon: CheckCircle2, label: 'Production delays', value: '0 in 6 mo' },
      { icon: TrendingUp, label: 'Supplier rating', value: 'C → A' },
      { icon: Clock, label: 'ROI timeline', value: '2 months' },
    ],
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="flex flex-col">
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 id="case-studies-page-title" className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Case Studies
            </h1>
            <p id="case-studies-page-subtitle" className="mt-4 text-lg text-slate-600">
              Real results from real buyers. See how we have helped companies reduce costs, improve quality, and streamline their China supply chain.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {caseStudies.map((cs) => (
              <article
                key={cs.id}
                id={`case-study-${cs.id}-section`}
                className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start"
              >
                <div>
                  <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                    {cs.category}
                  </span>
                  <h2 id={`case-study-${cs.id}-title`} className="mt-3 text-2xl font-bold text-slate-900">
                    {cs.title}
                  </h2>
                  <p id={`case-study-${cs.id}-client`} className="mt-2 text-sm text-slate-500">
                    Client: {cs.client}
                  </p>
                  <div className="mt-6 space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">Challenge</h3>
                      <p id={`case-study-${cs.id}-challenge`} className="mt-1 text-sm text-slate-600">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">Solution</h3>
                      <p id={`case-study-${cs.id}-solution`} className="mt-1 text-sm text-slate-600">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">Result</h3>
                      <p id={`case-study-${cs.id}-result`} className="mt-1 text-sm text-slate-600">{cs.result}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                    <h3 className="text-sm font-semibold text-slate-900">Key metrics</h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                      {cs.metrics.map((metric) => (
                        <div key={metric.label} className="rounded-lg bg-white p-4 shadow-sm">
                          <metric.icon className="h-5 w-5 text-slate-700" />
                          <p id={`case-study-${cs.id}-metric-${metric.label.toLowerCase().replace(/ /g, '-')}`} className="mt-2 text-lg font-bold text-slate-900">
                            {metric.value}
                          </p>
                          <p className="text-xs text-slate-500">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild>
                      <Link to="/contact">
                        Discuss a similar project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-slate-900 px-8 py-12 text-center sm:px-12 sm:py-16">
            <h2 id="case-studies-cta-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to write your success story?
            </h2>
            <p id="case-studies-cta-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Tell us about your project and we will show you how we can help you achieve similar results.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
