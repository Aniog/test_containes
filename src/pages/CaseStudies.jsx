import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, Building2, Zap, TrendingUp, CheckCircle2 } from 'lucide-react'

const cases = [
  {
    client: 'European Retail Chain',
    location: 'Germany / Netherlands',
    industry: 'Home & Furniture',
    title: 'Sourcing 15 SKUs from 4 Verified Factories',
    challenge:
      'A mid-size European retailer needed to diversify away from a single supplier for 15 home goods SKUs. They had experienced quality inconsistencies and long lead times.',
    approach: [
      'Mapped the full BOM and identified 4 specialized factories (2 in Guangdong, 2 in Zhejiang)',
      'Conducted on-site audits at all 4 factories within 2 weeks',
      'Negotiated consolidated shipping to reduce freight cost per unit',
      'Implemented AQL 2.5 pre-shipment inspections on every SKU',
    ],
    result:
      'Reduced average unit cost by 22%, improved QC pass rate from 84% to 97%, and cut average lead time from 75 to 58 days.',
    metrics: [
      { label: 'Cost Reduction', value: '22%' },
      { label: 'QC Pass Rate', value: '97%' },
      { label: 'Lead Time', value: '58 days' },
    ],
    imgId: 'cases-retail-1a2b3c',
    icon: Package,
  },
  {
    client: 'US Industrial Distributor',
    location: 'United States',
    industry: 'Machinery Parts',
    title: 'End-to-End Sourcing for Custom Components',
    challenge:
      'A US distributor of industrial machinery needed custom aluminum castings with tight tolerances. Previous attempts with direct Alibaba sourcing resulted in defective first articles.',
    approach: [
      'Identified 3 die-casting specialists with ISO 9001 and experience in similar alloys',
      'Managed first article inspection (FAI) with detailed CMM measurement reports',
      'Coordinated mold revisions directly with factory engineers',
      'Set up periodic production audits after PPAP approval',
    ],
    result:
      'First article approved on the second iteration. Cut total lead time from 90 to 55 days. Zero quality complaints in the first 12 months of production.',
    metrics: [
      { label: 'Lead Time Cut', value: '35 days' },
      { label: 'FAI Pass', value: '2nd try' },
      { label: 'Defect Rate', value: '<0.5%' },
    ],
    imgId: 'cases-industrial-2b3c4d',
    icon: Building2,
  },
  {
    client: 'Australian E-commerce Brand',
    location: 'Australia',
    industry: 'Consumer Electronics',
    title: 'Scaling from 1,000 to 50,000 Units per Order',
    challenge:
      'A growing e-commerce brand needed to scale production of a private-label electronic accessory while maintaining quality and meeting seasonal demand spikes.',
    approach: [
      'Audited and upgraded to a larger factory with dedicated SMT lines',
      'Introduced incoming material inspection and in-process checkpoints',
      'Implemented barcode-based lot tracking for traceability',
      'Negotiated volume pricing tiers and safety stock agreements',
    ],
    result:
      'Scaled smoothly across 18 production runs. Maintained defect rate below 1% even at peak volumes. Helped secure a 15% price reduction at the 30K unit tier.',
    metrics: [
      { label: 'Max Volume', value: '50K units' },
      { label: 'Defect Rate', value: '<1%' },
      { label: 'Price Drop', value: '15%' },
    ],
    imgId: 'cases-ecom-3c4d5e',
    icon: Zap,
  },
  {
    client: 'UK Packaging Startup',
    location: 'United Kingdom',
    industry: 'Packaging Materials',
    title: 'Sustainable Custom Packaging at Startup Scale',
    challenge:
      'A UK startup selling premium food products needed eco-friendly custom packaging with low MOQs. Most factories refused orders under 10,000 units.',
    approach: [
      'Identified 2 specialized sustainable packaging factories willing to work at 3,000 unit MOQ',
      'Coordinated material sourcing for FSC-certified kraft and soy-based inks',
      'Managed color matching and structural prototyping over 4 sample rounds',
      'Consolidated shipments with a 3PL partner to reduce landed cost',
    ],
    result:
      'Launched with fully custom packaging at a viable per-unit cost. Reduced packaging cost by 18% after reaching the 10K unit tier in month 6.',
    metrics: [
      { label: 'Starting MOQ', value: '3,000' },
      { label: 'Cost Reduction', value: '18%' },
      { label: 'Sample Rounds', value: '4' },
    ],
    imgId: 'cases-packaging-4d5e6f',
    icon: TrendingUp,
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 block">
            Results
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Client Case Studies
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Real projects. Real outcomes. Here is how we have helped buyers across different industries source successfully from China.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {cases.map((study, index) => (
            <div
              key={study.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                index % 2 === 1 ? '' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="aspect-[16/10] rounded-lg overflow-hidden border border-border-light">
                  <img
                    data-strk-img-id={study.imgId}
                    data-strk-img={`[cases-${study.client.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-title] [cases-${study.client.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-industry]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {study.metrics.map((m) => (
                    <div key={m.label} className="bg-blue-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-blue-700">{m.value}</div>
                      <div className="text-xs text-blue-600">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                    <study.icon className="w-3.5 h-3.5" />
                    {study.industry}
                  </span>
                  <span className="text-xs text-slate-400">{study.location}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  {study.title}
                </h2>
                <p className="text-sm text-slate-500 mb-1">
                  <strong className="text-slate-700">Client:</strong> {study.client}
                </p>

                <div className="mt-5 space-y-5">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800 mb-2">Challenge</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800 mb-2">Our Approach</h3>
                    <ul className="space-y-1.5">
                      {study.approach.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-green-800 mb-1">Result</h3>
                    <p className="text-sm text-green-700 leading-relaxed">{study.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-blue-100 mb-8">
            Every project is different, but our process is proven. Let us discuss your specific sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition-colors"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
