import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ArrowRight, TrendingUp, DollarSign, Clock, Shield, CheckCircle2, Star
} from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'US Retailer Reduces Electronics Costs by 30%',
    client: 'Pacific Imports Inc.',
    location: 'California, USA',
    industry: 'Consumer Electronics',
    challenge: 'Pacific Imports was sourcing Bluetooth speakers from a trading company with inconsistent quality and rising costs. They needed a direct factory relationship but lacked the resources to verify suppliers in China.',
    solution: 'We conducted a comprehensive supplier search across Guangdong province, verified 5 factories with on-site audits, and negotiated pricing directly with the factory owner. We also implemented a multi-stage QC process.',
    results: [
      '30% reduction in unit cost',
      '2-week improvement in lead time',
      'Zero quality defects in first 3 shipments',
      'Direct factory relationship established',
    ],
    testimonial: 'SSourcing China transformed our supply chain. Their factory verification process saved us from a costly supplier failure, and the cost savings have been substantial.',
    testimonialName: 'Michael Chen',
    testimonialTitle: 'Operations Director, Pacific Imports',
    imgId: 'case-study-pacific-electronics-v1w2x3',
    duration: '8 weeks',
    orderSize: '5,000 units',
  },
  {
    id: 2,
    title: 'EU Brand Successfully Launches Private Label Home Products',
    client: 'EuroTrade GmbH',
    location: 'Munich, Germany',
    industry: 'Home & Garden',
    challenge: 'EuroTrade wanted to launch a private label line of kitchen products but had no experience sourcing from China. They needed help with product development, supplier selection, and quality management.',
    solution: 'We managed the entire process from product design consultation to production. This included finding a factory specializing in stainless steel kitchenware, arranging prototypes, and conducting 3 rounds of quality inspections.',
    results: [
      'Product line launched in 12 weeks',
      '4 SKUs successfully produced',
      'CE certification obtained',
      'Reorder placed within 3 months',
    ],
    testimonial: 'The team at SSourcing China made our private label launch smooth and stress-free. Their attention to detail during quality inspections gave us complete confidence in our products.',
    testimonialName: 'Sarah Müller',
    testimonialTitle: 'CEO, EuroTrade GmbH',
    imgId: 'case-study-eurotrade-home-p4q5r6',
    duration: '12 weeks',
    orderSize: '10,000 units',
  },
  {
    id: 3,
    title: 'Australian Importer Scales Apparel Operations 200%',
    client: 'Outback Fashion Co.',
    location: 'Sydney, Australia',
    industry: 'Apparel & Textiles',
    challenge: 'Outback Fashion was working with a single supplier who couldn\'t keep up with growing demand. They needed to diversify their supplier base while maintaining consistent quality across multiple factories.',
    solution: 'We onboarded 4 new suppliers across Jiangsu and Zhejiang provinces, established unified quality standards, and implemented a centralized QC process to ensure consistency across all suppliers.',
    results: [
      '200% increase in order volume',
      '4 new qualified suppliers added',
      'Consistent quality across all suppliers',
      'Lead time reduced by 25%',
    ],
    testimonial: 'Scaling production while maintaining quality seemed impossible until we worked with SSourcing China. They found us suppliers we never would have discovered on our own.',
    testimonialName: 'David Park',
    testimonialTitle: 'Founder, Outback Fashion Co.',
    imgId: 'case-study-outback-apparel-s7t8u9',
    duration: '16 weeks',
    orderSize: '50,000 units',
  },
  {
    id: 4,
    title: 'Canadian Startup Launches First Product in 10 Weeks',
    client: 'GreenTech Solutions',
    location: 'Toronto, Canada',
    industry: 'Eco-Friendly Products',
    challenge: 'A first-time importer with a limited budget needed to source biodegradable packaging products from China. They had no experience with international sourcing and needed guidance through every step.',
    solution: 'We provided end-to-end support including supplier identification, sample evaluation, production monitoring, and shipping coordination. We also helped negotiate favorable payment terms for a first-time buyer.',
    results: [
      'First order delivered in 10 weeks',
      'MOQ negotiated down to 1,000 units',
      'Product passed all regulatory testing',
      'Second order placed within 60 days',
    ],
    testimonial: 'As a first-time importer, I was nervous about sourcing from China. SSourcing China guided me through every step and made the process incredibly smooth.',
    testimonialName: 'Emily Zhang',
    testimonialTitle: 'Founder, GreenTech Solutions',
    imgId: 'case-study-greentech-eco-v0w1x2',
    duration: '10 weeks',
    orderSize: '1,000 units',
  },
]

const stats = [
  { icon: DollarSign, value: '$2.5M+', label: 'Client Savings Generated' },
  { icon: TrendingUp, value: '500+', label: 'Successful Projects' },
  { icon: Clock, value: '98%', label: 'On-Time Delivery Rate' },
  { icon: Shield, value: '99.2%', label: 'Quality Pass Rate' },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-500 to-brand-900 py-20 md:py-28">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto">
            Real stories from real clients. See how we have helped businesses of all sizes streamline their China sourcing operations.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-brand-500" />
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-brand-500 mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-wide">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <article key={study.id} className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="grid lg:grid-cols-2">
                  <div className="h-64 lg:h-auto overflow-hidden">
                    <img
                      data-strk-img-id={study.imgId}
                      data-strk-img={`[case-${study.id}-industry] china manufacturing factory`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <span id={`case-${study.id}-industry`} className="sr-only">{study.industry}</span>
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-sm font-semibold">
                        {study.industry}
                      </span>
                      <span className="px-3 py-1 bg-accent-50 text-accent-600 rounded-full text-sm font-semibold">
                        {study.duration}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-2">{study.title}</h2>
                    <p className="text-neutral-500 text-sm mb-6">{study.client} — {study.location}</p>

                    <div className="mb-6">
                      <h3 className="font-semibold text-neutral-900 mb-2">Challenge</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-neutral-900 mb-2">Solution</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-neutral-900 mb-3">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-center gap-2 text-sm text-neutral-700">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-neutral-600 text-sm italic mb-3">"{study.testimonial}"</p>
                      <div>
                        <div className="font-semibold text-neutral-900 text-sm">{study.testimonialName}</div>
                        <div className="text-neutral-500 text-xs">{study.testimonialTitle}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-500">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-brand-100 max-w-2xl mx-auto mb-8">
            Tell us about your sourcing needs and we will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-500 font-bold rounded-lg hover:bg-neutral-100 transition-all shadow-lg text-lg"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
