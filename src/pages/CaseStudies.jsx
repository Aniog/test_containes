import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingUp, Clock, DollarSign, ShieldCheck } from 'lucide-react'
import CTASection from '@/components/home/CTASection'

const caseStudies = [
  {
    category: 'Electronics',
    title: 'Sourcing PCB Assemblies for a German IoT Startup',
    challenge: 'A Berlin-based IoT startup needed a reliable PCB manufacturer capable of producing small batches with high precision. Previous attempts with Alibaba suppliers resulted in quality inconsistencies and missed deadlines.',
    solution: 'We identified three certified PCB manufacturers in Shenzhen, conducted on-site audits, and negotiated prototype pricing. We managed the sampling process and implemented in-process QC during the first production run.',
    results: [
      { icon: TrendingUp, label: 'Lead time reduced by 40%' },
      { icon: DollarSign, label: 'Unit cost reduced by 25% vs previous supplier' },
      { icon: ShieldCheck, label: 'Defect rate below 0.5% on first production run' },
      { icon: Clock, label: 'All orders delivered on or ahead of schedule' },
    ],
  },
  {
    category: 'Industrial',
    title: 'Factory Verification Saved a UK Distributor from a Bad Deal',
    challenge: 'A UK hydraulics distributor was about to sign a USD 200,000 contract with a supplier they found online. Our client asked us to verify the factory before committing.',
    solution: 'We conducted an unannounced on-site audit and discovered the factory had overstated its capacity by 300%. Their equipment was outdated and they lacked proper quality certifications. We recommended three alternative suppliers with verified capabilities.',
    results: [
      { icon: ShieldCheck, label: 'Prevented a USD 200K bad investment' },
      { icon: TrendingUp, label: 'Found a supplier with 3x actual capacity' },
      { icon: DollarSign, label: 'Negotiated 15% better pricing' },
      { icon: Clock, label: 'First delivery completed in 6 weeks' },
    ],
  },
  {
    category: 'Consumer Goods',
    title: 'QC Program Reduced Defects from 12% to Under 1.5%',
    challenge: 'A US home decor brand was experiencing 12% defect rates on their ceramic products sourced from China. Customer complaints were rising and the brand reputation was at risk.',
    solution: 'We implemented a multi-stage QC program including raw material inspection, in-process checks during firing and glazing, and a 100% final inspection before shipment. We also helped them switch to a higher-grade clay supplier.',
    results: [
      { icon: ShieldCheck, label: 'Defect rate reduced from 12% to under 1.5%' },
      { icon: DollarSign, label: 'Saved USD 80K annually in returns and replacements' },
      { icon: TrendingUp, label: 'Customer satisfaction score improved by 35%' },
      { icon: Clock, label: 'Consistent quality across 12 production runs' },
    ],
  },
  {
    category: 'Packaging',
    title: 'End-to-End Sourcing for an Australian Organic Food Brand',
    challenge: 'An Australian organic food company needed custom glass bottles, labels, and cardboard packaging that met strict organic certification standards and aesthetic requirements.',
    solution: 'We sourced three separate suppliers for bottles, labels, and boxes. We coordinated the entire supply chain, verified all certifications, conducted QC at each supplier, and consolidated shipments for container loading.',
    results: [
      { icon: DollarSign, label: '15% cost savings through consolidated shipping' },
      { icon: Clock, label: 'Full order delivered in 8 weeks' },
      { icon: ShieldCheck, label: '100% certification compliance' },
      { icon: TrendingUp, label: 'Successful retail launch across 200+ stores' },
    ],
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
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary-light font-semibold text-sm tracking-wide uppercase">Case Studies</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
              Real Results for Real Clients
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              See how we have helped businesses around the world source products from China more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs, i) => (
            <article key={i} className="border border-gray-100 rounded-xl bg-white shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <div className="aspect-[4/3] md:aspect-auto md:h-full bg-gray-100">
                    <div
                      className="w-full h-full bg-gray-200"
                      data-strk-bg-id={`case-study-${i}`}
                      data-strk-bg={`[cs-title-${i}] [cs-challenge-${i}]`}
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="600"
                    />
                  </div>
                </div>
                <div className="md:w-3/5 p-6 md:p-8">
                  <span className="inline-block text-xs font-semibold text-primary bg-primary-light px-2.5 py-1 rounded-full mb-3">
                    {cs.category}
                  </span>
                  <h2 id={`cs-title-${i}`} className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-snug">
                    {cs.title}
                  </h2>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Challenge</h3>
                    <p id={`cs-challenge-${i}`} className="text-sm text-gray-700 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="mb-5">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Solution</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{cs.solution}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {cs.results.map((result, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <result.icon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700">{result.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}