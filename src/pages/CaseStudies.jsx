import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingDown, TrendingUp, DollarSign, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    id: 'case-1',
    title: 'Electronics Manufacturer Saves 23% on Unit Cost',
    subtitle: 'Consumer Electronics | USA',
    challenge:
      'A US-based electronics brand was sourcing PCB assemblies from a trading company at inflated prices. Quality was inconsistent with defect rates above 5%. They needed a direct factory relationship with reliable quality.',
    solution:
      'We audited 12 PCB assembly factories across Shenzhen and Dongguan, shortlisted 3 based on capability and pricing, and negotiated directly with factory management. We implemented a QC protocol with in-line and final inspection.',
    results: [
      { icon: TrendingDown, label: 'Unit Cost Reduction', value: '23%' },
      { icon: TrendingUp, label: 'Defect Rate', value: '<0.5%' },
      { icon: Clock, label: 'Lead Time', value: 'Reduced 30%' },
      { icon: DollarSign, label: 'Annual Savings', value: '$180K+' },
    ],
    imgId: 'case-study-electronics-1',
    testimonial: {
      quote:
        'SSourcing China transformed our supply chain. They found us a factory partner we didn\'t know existed, and the quality improvement has been remarkable.',
      name: 'David Chen',
      role: 'VP of Operations, TechWave Inc.',
    },
  },
  {
    id: 'case-2',
    title: 'Furniture Brand Scales from 1 to 15 Containers/Month',
    subtitle: 'Home Furniture | United Kingdom',
    challenge:
      'A fast-growing UK furniture brand was stuck with a single small factory that couldn\'t scale production. Quality was declining as the factory took on more orders than it could handle.',
    solution:
      'We identified two qualified mid-sized furniture factories in Foshan, managed parallel production runs, and set up a production monitoring system with weekly on-site visits. We also coordinated consolidated shipping to reduce freight costs.',
    results: [
      { icon: TrendingUp, label: 'Monthly Volume', value: '15x Growth' },
      { icon: DollarSign, label: 'Freight Savings', value: '18%' },
      { icon: Clock, label: 'On-Time Delivery', value: '98%' },
      { icon: TrendingDown, label: 'Quality Issues', value: 'Reduced 80%' },
    ],
    imgId: 'case-study-furniture-2',
    testimonial: {
      quote:
        'Without SSourcing China, we couldn\'t have scaled. They found us the right factories and managed the entire process — we just focused on selling.',
      name: 'James Whitfield',
      role: 'Founder & CEO, Oak & Elm Furniture',
    },
  },
  {
    id: 'case-3',
    title: 'Apparel Startup Launches First Collection On-Time',
    subtitle: 'Fashion Apparel | Australia',
    challenge:
      'A first-time fashion entrepreneur had a strong design concept but zero sourcing experience. She needed fabric sourcing, factory vetting, sampling, and production management — all within a tight 12-week deadline.',
    solution:
      'We sourced premium cotton fabrics from 5 textile mills, vetted 8 garment factories in Guangzhou, managed 3 rounds of sampling, and supervised production with daily check-ins during the final 2 weeks.',
    results: [
      { icon: Clock, label: 'On-Time Launch', value: 'Yes' },
      { icon: TrendingDown, label: 'Cost vs. Local', value: '60% Less' },
      { icon: TrendingUp, label: 'First Order', value: '3,000 Units' },
      { icon: TrendingUp, label: 'Reorder Rate', value: '85%' },
    ],
    imgId: 'case-study-apparel-3',
    testimonial: {
      quote:
        'As a first-timer, I was terrified of sourcing from China. SSourcing China made it feel easy. They handled everything and my collection launched perfectly.',
      name: 'Sarah Mitchell',
      role: 'Founder, Luna Apparel',
    },
  },
  {
    id: 'case-4',
    title: 'Hardware Distributor Reduces Procurement Costs by 35%',
    subtitle: 'Industrial Hardware | Germany',
    challenge:
      'A German hardware distributor was buying from European middlemen at 3-4x the factory price. They wanted to source directly but lacked the in-country presence to verify suppliers and manage quality.',
    solution:
      'We mapped the supply chain for 50+ SKUs, identified direct manufacturers in Zhejiang province, audited 6 factories, and set up a monthly QC inspection schedule. We also consolidated shipments to reduce logistics costs.',
    results: [
      { icon: TrendingDown, label: 'Cost Reduction', value: '35%' },
      { icon: TrendingUp, label: 'Supplier Base', value: '6 Factories' },
      { icon: Clock, label: 'Inspection Cycle', value: 'Monthly' },
      { icon: DollarSign, label: 'Annual Savings', value: '€250K+' },
    ],
    imgId: 'case-study-hardware-4',
    testimonial: {
      quote:
        'The cost savings alone paid for their service 10x over. But the real value is the peace of mind knowing our products are consistently meeting spec.',
      name: 'Klaus Weber',
      role: 'Procurement Director, Weber Hardware GmbH',
    },
  },
  {
    id: 'case-5',
    title: 'Medical Supply Company Achieves ISO 13485 Compliance',
    subtitle: 'Medical Devices | Canada',
    challenge:
      'A Canadian medical device company needed to source Class I medical devices from China. The supplier had to meet ISO 13485 standards and pass FDA registration requirements. Finding a compliant factory was critical.',
    solution:
      'We identified 4 ISO 13485-certified factories, conducted technical audits, managed the FDA registration documentation process, and implemented enhanced QC protocols including batch testing and sterility verification.',
    results: [
      { icon: TrendingUp, label: 'FDA Registered', value: 'Yes' },
      { icon: TrendingUp, label: 'Batch Pass Rate', value: '99.7%' },
      { icon: Clock, label: 'Time to Market', value: '5 Months' },
      { icon: TrendingDown, label: 'Cost vs. Domestic', value: '45% Less' },
    ],
    imgId: 'case-study-medical-5',
    testimonial: {
      quote:
        'Navigating medical device sourcing from China is incredibly complex. SSourcing China\'s expertise in regulatory compliance was invaluable. They delivered beyond our expectations.',
      name: 'Dr. Lisa Park',
      role: 'COO, MedNova Solutions',
    },
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-gold font-semibold text-sm tracking-wide uppercase mb-3">
            Success Stories
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Case Studies
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Real results for real buyers. See how we&apos;ve helped companies
            across industries optimize their China sourcing.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <article
                key={cs.id}
                id={`case-study-${cs.id}`}
                className="border-b border-gray-100 pb-16 last:border-b-0 last:pb-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {/* Image */}
                  <div className="lg:col-span-2">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-sm">
                      <img
                        alt={cs.title}
                        data-strk-img-id={cs.imgId}
                        data-strk-img={`[case-study-${cs.id}-title]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3">
                    <p className="text-xs text-accent-red font-semibold mb-2">
                      {cs.subtitle}
                    </p>
                    <h2
                      id={`case-study-${cs.id}-title`}
                      className="text-2xl font-bold text-gray-900 mb-4"
                    >
                      {cs.title}
                    </h2>

                    <div className="mb-5">
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">
                        Challenge
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>

                    <div className="mb-5">
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">
                        Our Solution
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                      {cs.results.map((r) => (
                        <div
                          key={r.label}
                          className="bg-navy/5 rounded-lg p-3 text-center"
                        >
                          <r.icon className="w-4 h-4 text-accent-gold mx-auto mb-1" />
                          <div className="text-lg font-bold text-navy">
                            {r.value}
                          </div>
                          <div className="text-xs text-gray-500">
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <blockquote className="border-l-4 border-accent-gold pl-4 italic text-gray-600 text-sm">
                      &ldquo;{cs.testimonial.quote}&rdquo;
                      <footer className="not-italic mt-2 text-gray-900 font-medium text-xs">
                        — {cs.testimonial.name},{' '}
                        <span className="text-gray-500">
                          {cs.testimonial.role}
                        </span>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Want to be our next success story?
            </h2>
            <p className="text-gray-300 text-lg">
              Let&apos;s discuss how we can help you achieve similar results.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-red hover:bg-red-700 text-white font-semibold rounded-lg px-8 py-3.5 transition-colors shadow-lg flex-shrink-0"
          >
            Get a Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}