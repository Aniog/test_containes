import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const cases = [
    {
      client: 'HomeGoods Retailer',
      location: 'United States',
      product: 'Ceramic Dinnerware Set',
      challenge: 'High defect rates (12%) on previous orders from a different supplier. Inconsistent glaze quality and packaging damage during transit.',
      approach: 'We conducted a full factory audit of three shortlisted manufacturers. Selected a factory with better process controls and packaging standards. Implemented a two-stage inspection: in-process and pre-shipment.',
      results: [
        'Defect rate reduced to 1.8% on first production run',
        '18% reduction in landed cost vs. previous supplier',
        'Established ongoing supply relationship with quarterly orders',
      ],
      timeline: '14 weeks from inquiry to first delivery',
      volume: '8,400 units (initial order)',
    },
    {
      client: 'E-commerce Brand',
      location: 'Germany',
      product: 'Electric Kitchen Appliances',
      challenge: 'Needed to launch three new product lines within a tight seasonal window. No existing supplier relationships in China. Required CE and GS certifications.',
      approach: 'Rapid supplier search focused on factories with existing certification experience. Coordinated sample production across two factories. Managed compliance testing and documentation in parallel with production.',
      results: [
        'Three SKUs sourced and delivered in 11 weeks',
        '22% below target landed cost',
        'All products passed required certifications on first submission',
      ],
      timeline: '11 weeks from inquiry to warehouse delivery',
      volume: '2,200 units across 3 products',
    },
    {
      client: 'Hardware Distributor',
      location: 'Australia',
      product: 'Hand Tool Assortment',
      challenge: 'Previous supplier quality was inconsistent. Needed a reliable long-term partner for private label tools with annual volume of 180,000 units.',
      approach: 'Comprehensive factory verification including production capacity assessment. Negotiated volume pricing with staged production schedule. Implemented monthly quality audits.',
      results: [
        'Consistent quality across 12 months of production',
        '15% cost improvement through process optimization',
        'Factory now produces exclusively for this client on key SKUs',
      ],
      timeline: 'Ongoing relationship (18 months)',
      volume: '15,000 units per month average',
    },
    {
      client: 'Specialty Retail Chain',
      location: 'Canada',
      product: 'Outdoor Furniture Collection',
      challenge: 'First-time sourcing from China. Concerned about weather resistance claims and powder coating durability. Needed products to arrive before spring selling season.',
      approach: 'Selected factories with documented experience in outdoor products. Coordinated third-party lab testing for weather resistance. Scheduled production with buffer time for inspection and shipping.',
      results: [
        'All products passed independent weather testing',
        'On-time delivery 3 weeks before season start',
        'Zero warranty claims in first season',
      ],
      timeline: '16 weeks from inquiry to store delivery',
      volume: '4,800 units across 6 SKUs',
    },
    {
      client: 'Automotive Aftermarket',
      location: 'United Kingdom',
      product: 'Car Interior Accessories',
      challenge: 'Needed to source 12 SKUs for a new product line. Required consistent color matching across multiple factories. Tight margin requirements.',
      approach: 'Consolidated production at two factories with strong color control processes. Created physical color standards and approval samples. Implemented batch sampling at multiple production stages.',
      results: [
        'Color consistency achieved across all 12 SKUs',
        'Met aggressive target pricing',
        'Repeat order placed within 4 months',
      ],
      timeline: '13 weeks from inquiry to first shipment',
      volume: '9,600 units (initial order)',
    },
    {
      client: 'Pet Products Brand',
      location: 'Netherlands',
      product: 'Pet Grooming Tools',
      challenge: 'Needed to replace an unreliable supplier. Previous shipments had quality issues with handle durability and bristle retention. Required EU compliance documentation.',
      approach: 'Full supplier re-sourcing with emphasis on material quality verification. Implemented pull tests on samples and production batches. Coordinated REACH and safety documentation.',
      results: [
        'Zero quality complaints in first 6 months',
        'All compliance documentation delivered on time',
        '20% improvement in margin vs. previous supplier',
      ],
      timeline: '10 weeks from inquiry to delivery',
      volume: '6,500 units',
    },
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[2px] text-white/60 mb-4">CASE STUDIES</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">Real Projects, Real Results</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Selected examples of sourcing projects we have completed for clients across different industries and markets.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="space-y-16">
          {cases.map((c, idx) => {
            const caseId = `casestudy-${idx}`
            return (
              <div key={idx} className="border-b border-slate-200 pb-16 last:border-b-0 last:pb-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 mb-1">{c.location}</div>
                    <h3 className="text-2xl font-semibold text-slate-900">{c.client}</h3>
                    <p className="text-lg text-slate-600 mt-1">{c.product}</p>
                  </div>
                  <div className="text-sm text-right md:text-left md:pt-1">
                    <div className="text-slate-500">Timeline</div>
                    <div className="font-medium text-slate-900">{c.timeline}</div>
                    <div className="text-slate-500 mt-2">Volume</div>
                    <div className="font-medium text-slate-900">{c.volume}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <img 
                    className="w-full h-64 md:h-80 object-cover bg-slate-100 rounded-lg"
                    data-strk-img-id={`casestudy-img-${idx}`}
                    data-strk-img={`[${caseId}-product] [${caseId}-client] factory production quality control inspection`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={c.product}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-sm">
                  <div>
                    <div className="uppercase tracking-widest text-xs text-slate-500 mb-2">THE CHALLENGE</div>
                    <p id={`${caseId}-client`} className="text-slate-600 leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <div className="uppercase tracking-widest text-xs text-slate-500 mb-2">OUR APPROACH</div>
                    <p className="text-slate-600 leading-relaxed">{c.approach}</p>
                  </div>
                  <div>
                    <div className="uppercase tracking-widest text-xs text-slate-500 mb-2">RESULTS</div>
                    <ul className="space-y-2 text-slate-600">
                      {c.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
            <div className="bg-white border border-slate-200 rounded-lg p-7">
              <p className="text-slate-600 italic mb-4">"SSourcing China helped us completely rebuild our supply chain. The factory verification process gave us confidence we had never had before. Quality issues that used to be routine are now rare."</p>
              <div className="text-sm">
                <div className="font-medium text-slate-900">— Operations Director, Home Goods Retailer (USA)</div>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-7">
              <p className="text-slate-600 italic mb-4">"We needed to launch three new products in under 12 weeks. They delivered on time with all certifications in place. The transparency throughout the process was exactly what we needed as a first-time importer."</p>
              <div className="text-sm">
                <div className="font-medium text-slate-900">— Founder, E-commerce Brand (Germany)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Want to discuss a similar project?" 
        subtitle="Tell us about your sourcing needs and we will prepare a proposal." 
      />
    </div>
  )
}

export default CaseStudies
