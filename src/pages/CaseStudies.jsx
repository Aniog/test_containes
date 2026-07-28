import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const caseStudies = [
    {
      id: 'kitchenware-us',
      title: 'US Retailer Scales Private Label Kitchenware',
      client: 'Mid-size US home goods retailer',
      challenge: 'The client wanted to launch a private label kitchenware line but had no existing supplier relationships in China. Previous attempts to source directly resulted in quality issues and missed delivery dates.',
      approach: 'We conducted a category-specific supplier search, shortlisted five factories, and performed on-site audits. We coordinated sample development across three suppliers and supported the client through specification refinement.',
      results: [
        'Selected two qualified suppliers for different product groups',
        'Reduced incoming defect rate from 8% to under 1%',
        'Established consistent 45-day lead time from order to port',
        'First 8 SKUs delivered on schedule for retail launch',
      ],
      quote: 'SSourcing China gave us visibility we never had before. We finally know what is happening at the factory level.',
      quoteAuthor: 'VP of Product, US Retailer',
    },
    {
      id: 'auto-eu',
      title: 'European Distributor Sources Automotive Components',
      client: 'European automotive aftermarket distributor',
      challenge: 'The client needed to qualify new Tier-2 suppliers for brake and suspension components while maintaining strict quality and traceability requirements.',
      approach: 'We identified candidate suppliers through industry networks, conducted detailed capability audits, and implemented a multi-stage sample approval process. We also supported documentation for IATF-aligned quality records.',
      results: [
        'Three new suppliers qualified and approved',
        'Average lead time improved by six weeks vs. previous sources',
        'All first production batches passed incoming inspection',
        'Client established direct reorder process with two suppliers',
      ],
      quote: 'The audit reports and production updates gave our quality team the confidence to move forward.',
      quoteAuthor: 'Supply Chain Director, European Distributor',
    },
    {
      id: 'electronics-au',
      title: 'Australian Brand Launches Consumer Electronics Line',
      client: 'Australian consumer electronics startup',
      challenge: 'The client had a new Bluetooth audio product line ready for production but lacked experience managing overseas manufacturing and needed support through first production run.',
      approach: 'We helped refine the bill of materials, identified three capable assembly partners, coordinated tooling review, and managed pre-production and pre-shipment inspections. We also assisted with export documentation and freight coordination.',
      results: [
        'First production run of 10,000 units completed on schedule',
        'All units passed client QC and Australian compliance checks',
        'Freight consolidated and delivered within planned window',
        'Supplier relationship established for ongoing production',
      ],
      quote: 'We could not have delivered our first order without their hands-on support.',
      quoteAuthor: 'Founder, Australian Electronics Brand',
    },
    {
      id: 'textiles-uk',
      title: 'UK Fashion Brand Establishes Reliable Apparel Supply',
      client: 'UK mid-market fashion brand',
      challenge: 'The brand experienced repeated quality and delivery issues with existing suppliers and needed to rebuild its supply base for core jersey and woven categories.',
      approach: 'We performed a full supply base review, identified new factories with better process control, and implemented inline and final inspection protocols. We also supported size set and production sample approval processes.',
      results: [
        'Four new factories qualified across two product categories',
        'On-time delivery improved from 62% to 94%',
        'Quality claims reduced by over 70%',
        'Client now sources 80% of volume through vetted suppliers',
      ],
      quote: 'The difference in reliability has been night and day.',
      quoteAuthor: 'Head of Sourcing, UK Fashion Brand',
    },
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">Case Studies</h1>
            <p className="text-xl text-slate-300">
              Real projects with measurable outcomes for international B2B buyers.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="space-y-16">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <div className="sticky top-24">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-2">{study.title}</h2>
                  <p className="text-teal-600 font-medium mb-4">{study.client}</p>
                  <div className="relative h-64 rounded-xl overflow-hidden bg-slate-100 mb-6">
                    <img
                      data-strk-img-id={`casestudy-${study.id}`}
                      data-strk-img={`[${study.title}] [Case Studies] factory production quality control inspection`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">The Challenge</h3>
                    <p className="text-slate-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Our Approach</h3>
                    <p className="text-slate-600">{study.approach}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 text-slate-700">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-teal-600">
                    <p className="italic text-slate-700 mb-2">"{study.quote}"</p>
                    <p className="text-sm text-slate-600">— {study.quoteAuthor}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Ready to Discuss Your Project?</h2>
          <p className="text-lg text-slate-600 mb-8">We can share additional examples relevant to your industry and product category.</p>
          <Button asChild size="lg">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
