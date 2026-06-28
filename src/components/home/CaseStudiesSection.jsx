import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Package, Building2 } from 'lucide-react'

const caseStudies = [
  {
    client: 'European Retail Chain',
    industry: 'Home & Furniture',
    title: 'Sourcing 15 SKUs from 4 Verified Factories',
    result: 'Reduced unit cost by 22% while improving QC pass rate to 97%',
    imgId: 'case-retail-1a2b3c',
    icon: Package,
  },
  {
    client: 'US Industrial Distributor',
    industry: 'Machinery Parts',
    title: 'End-to-End Sourcing for Custom Components',
    result: 'Cut lead time from 90 to 55 days with consistent quality',
    imgId: 'case-industrial-2b3c4d',
    icon: Building2,
  },
  {
    client: 'Australian E-commerce Brand',
    industry: 'Consumer Electronics',
    title: 'Scaling from 1,000 to 50,000 Units per Order',
    result: 'Maintained defect rate below 1% across 18 production runs',
    imgId: 'case-ecom-3c4d5e',
    icon: Package,
  },
]

export default function CaseStudiesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2 block">
              Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
              Client Case Studies
            </h2>
            <p className="text-lg text-slate-500 max-w-xl">
              Real outcomes from real sourcing projects managed for buyers worldwide.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1 text-blue-700 font-medium hover:text-blue-800 shrink-0"
          >
            View All Cases <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group bg-white rounded-lg border border-border-light overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[case-${study.client.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-title] [case-${study.client.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-industry]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                    <study.icon className="w-3 h-3" />
                    {study.industry}
                  </span>
                </div>
                <h3
                  id={`case-${study.client.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-title`}
                  className="text-base font-semibold text-slate-900 mb-2"
                >
                  {study.title}
                </h3>
                <p className="text-sm text-slate-500 mb-3">{study.client}</p>
                <p className="text-sm font-medium text-green-700 bg-green-50 rounded-md px-3 py-2">
                  {study.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
