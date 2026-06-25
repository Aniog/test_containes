import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import CTASection from '@/components/shared/CTASection'

const caseStudies = [
  {
    id: 'electronics-usa',
    client: 'Electronics Retailer',
    location: 'United States',
    category: 'Consumer Electronics',
    challenge: 'The client needed to source Bluetooth speakers at a competitive price while meeting FCC certification requirements. Previous suppliers had quality inconsistencies and missed delivery deadlines.',
    solution: 'We identified 8 potential manufacturers, shortlisted 3 after factory audits, and managed sample development. After selecting the best supplier, we monitored production and conducted pre-shipment inspection.',
    results: ['22% cost reduction vs. previous supplier', 'FCC certification passed on first attempt', '100% on-time delivery for 3 consecutive orders', 'Defect rate reduced from 4.2% to 0.3%'],
  },
  {
    id: 'furniture-germany',
    client: 'Furniture Brand',
    location: 'Germany',
    category: 'Home Furniture',
    challenge: 'A German furniture brand needed to source custom solid wood tables that met EU timber regulations (EUTR) and REACH compliance. They had no existing contacts in China and were concerned about material authenticity.',
    solution: 'We sourced from Guangdong furniture clusters, conducted factory audits with focus on material traceability, managed FSC-certified wood sourcing, and coordinated third-party lab testing for REACH compliance.',
    results: ['Passed all EU compliance tests on first shipment', 'Established long-term supplier relationship', '35% savings compared to European manufacturing', 'Consistent quality across 6 production runs'],
  },
  {
    id: 'fashion-australia',
    client: 'Fashion Label',
    location: 'Australia',
    category: 'Apparel & Textiles',
    challenge: 'A growing Australian fashion brand needed to scale from small-batch local production (500 units) to larger volumes (10,000+ units) without compromising on fabric quality or construction standards.',
    solution: 'We identified garment factories in Guangzhou specializing in mid-to-premium womenswear, managed fabric sourcing separately for better quality control, and implemented size-grading verification at each production stage.',
    results: ['Scaled from 500 to 10,000 units successfully', 'Maintained consistent quality across all sizes', '40% cost reduction per unit at scale', 'Repeat orders every season for 2+ years'],
  },
  {
    id: 'medical-uk',
    client: 'Medical Supplies Distributor',
    location: 'United Kingdom',
    category: 'Medical Devices',
    challenge: 'The client needed to source disposable medical supplies (examination gloves, face masks) with CE marking and ISO 13485 certification during a period of high demand and supply chain disruption.',
    solution: 'We leveraged our network to identify ISO-certified manufacturers with available capacity, conducted expedited factory audits, verified CE documentation authenticity, and managed accelerated production timelines.',
    results: ['Secured reliable supply within 3 weeks', 'All products passed CE verification', 'Maintained supply through peak demand period', 'Established backup supplier for redundancy'],
  },
  {
    id: 'packaging-canada',
    client: 'E-commerce Brand',
    location: 'Canada',
    category: 'Custom Packaging',
    challenge: 'A fast-growing DTC brand needed custom eco-friendly packaging (boxes, tissue paper, stickers) that aligned with their brand identity while keeping costs manageable at 5,000+ units/month.',
    solution: 'We sourced from packaging specialists in Dongguan, managed artwork adaptation for print production, conducted color-matching verification, and set up a recurring order system with quality checks.',
    results: ['50% cost savings vs. domestic packaging suppliers', 'Consistent color matching across all materials', 'Reliable monthly supply chain established', 'FSC-certified materials sourced successfully'],
  },
  {
    id: 'industrial-brazil',
    client: 'Industrial Equipment Importer',
    location: 'Brazil',
    category: 'Industrial Machinery',
    challenge: 'The client needed to source CNC machine components and replacement parts from China but had concerns about precision tolerances, material grades, and after-sales technical support.',
    solution: 'We identified specialized precision machining factories in Jiangsu, conducted technical audits with engineering focus, managed sample testing with CMM measurement reports, and negotiated warranty terms.',
    results: ['All parts within specified tolerances (±0.01mm)', 'Material certificates verified for each batch', 'Technical support agreement established', '30% cost reduction vs. previous European supplier'],
  },
]

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="cases-hero-bg-j4k5l6"
          data-strk-bg="[cases-hero-desc]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Case Studies
          </h1>
          <p id="cases-hero-desc" className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Real sourcing projects we've managed for international buyers. See how we solve challenges and deliver results.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study) => (
              <article key={study.id} className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex flex-wrap items-center gap-4">
                  <span className="text-xs font-medium text-blue-800 bg-blue-50 px-2 py-1 rounded">{study.category}</span>
                  <span className="text-sm text-slate-600">{study.client} — {study.location}</span>
                </div>
                <div className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Challenge</h3>
                      <p className="text-slate-700 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Our Solution</h3>
                      <p className="text-slate-700 leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-start gap-2 text-slate-700">
                            <span className="w-2 h-2 bg-green-500 rounded-full shrink-0 mt-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Have a Similar Project?" subtitle="Tell us about your sourcing needs and we'll show you how we can help." />
    </div>
  )
}

export default CaseStudies
