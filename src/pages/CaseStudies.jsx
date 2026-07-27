import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingDown, TrendingUp, ShieldCheck, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const cases = [
  {
    id: 'us-electronics',
    title: 'US Consumer Electronics Retailer',
    client: 'Mid-size electronics retailer, United States',
    challenge: 'The client was sourcing PCBs and electronic components from multiple trading companies, resulting in inconsistent quality, 8% defect rates, and 45-day lead times.',
    solution: 'We identified 3 direct factory suppliers in Shenzhen, conducted full factory audits, and implemented a during-production inspection program.',
    results: [
      { icon: TrendingDown, value: '8% → 1.2%', label: 'Defect Rate' },
      { icon: Clock, value: '-20 days', label: 'Lead Time' },
      { icon: TrendingUp, value: '15%', label: 'Cost Savings' },
    ],
    imgId: 'case-us-elec-t1u2v3',
    titleId: 'case-us-elec-title',
    descId: 'case-us-elec-desc',
  },
  {
    id: 'eu-fashion',
    title: 'European Sustainable Fashion Brand',
    client: 'Fashion brand with 12 seasonal collections, Germany',
    challenge: 'Needed sustainable fabric suppliers who could meet strict environmental standards while delivering consistent quality across multiple collections per year.',
    solution: 'We sourced and verified 5 fabric mills with GOTS and OEKO-TEX certifications, set up a quality monitoring system, and managed production across all collections.',
    results: [
      { icon: ShieldCheck, value: '5', label: 'Certified Mills' },
      { icon: TrendingUp, value: '12', label: 'Collections/Year' },
      { icon: TrendingDown, value: '0.5%', label: 'Return Rate' },
    ],
    imgId: 'case-eu-fashion-w4x5y6',
    titleId: 'case-eu-fashion-title',
    descId: 'case-eu-fashion-desc',
  },
  {
    id: 'au-hardware',
    title: 'Australian Hardware Distributor',
    client: 'National hardware distributor, Australia',
    challenge: 'The client was paying premium prices through intermediaries and had no visibility into factory quality systems. Needed ISO-certified manufacturers for their product range.',
    solution: 'We identified direct manufacturers in the Wenzhou hardware cluster, verified ISO certifications, and negotiated factory-direct pricing.',
    results: [
      { icon: TrendingDown, value: '35%', label: 'Cost Savings' },
      { icon: ShieldCheck, value: 'ISO 9001', label: 'Quality Cert' },
      { icon: Clock, value: '30 days', label: 'Lead Time' },
    ],
    imgId: 'case-au-hardware-z7a8b9',
    titleId: 'case-au-hardware-title',
    descId: 'case-au-hardware-desc',
  },
  {
    id: 'uk-home',
    title: 'UK Home & Kitchen Brand',
    client: 'DTC home and kitchenware brand, United Kingdom',
    challenge: 'New brand needed to source kitchenware from scratch with no existing supplier relationships. Required food-safe materials, custom packaging, and small initial MOQs.',
    solution: 'We found 4 specialized manufacturers, negotiated low MOQs for initial orders, managed pre-shipment inspections, and coordinated first shipments via sea freight.',
    results: [
      { icon: TrendingUp, value: '4', label: 'Verified Suppliers' },
      { icon: TrendingDown, value: '200 pcs', label: 'Initial MOQ' },
      { icon: ShieldCheck, value: 'FDA/LFGB', label: 'Food Safety' },
    ],
    imgId: 'case-uk-home-c1d2e3',
    titleId: 'case-uk-home-title',
    descId: 'case-uk-home-desc',
  },
]

const CaseStudiesPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="cases-page-title" className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h1>
          <p id="cases-page-desc" className="text-primary-100 max-w-2xl text-lg">
            Real examples of how we have helped buyers across different industries solve sourcing challenges and achieve measurable results.
          </p>
        </div>
      </section>

      {cases.map((c, i) => (
        <section key={c.id} className={`py-16 md:py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <h2 id={c.titleId} className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">{c.title}</h2>
                <p id={c.descId} className="text-sm text-primary-500 font-medium mb-4">{c.client}</p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mb-2">Challenge</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{c.challenge}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mb-2">Solution</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{c.solution}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mb-3">Results</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {c.results.map((r) => (
                      <div key={r.label} className="text-center p-3 rounded-md bg-primary-50">
                        <r.icon className="w-5 h-5 text-primary-500 mx-auto mb-1" />
                        <div className="text-lg font-bold text-primary-500">{r.value}</div>
                        <div className="text-xs text-neutral-500">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100">
                  <img
                    alt={c.title}
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[${c.descId}] [${c.titleId}] [cases-page-desc] [cases-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-20 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want Similar Results?</h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            Tell us about your sourcing challenge. We will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg no-underline transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudiesPage
