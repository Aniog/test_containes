import React, { useEffect, useRef } from 'react'
import SectionHeading from '@/components/shared/SectionHeading'
import CTA from '@/components/shared/CTA'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    document.title = 'Case Studies | Real Sourcing Projects | SSourcing China'
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    return cleanup
  }, [])

  const cases = [
    {
      id: 'cs1',
      client: 'Kitchen Appliance Brand',
      location: 'Germany',
      category: 'Home & Kitchen',
      challenge: 'High defect rates (8%) on first production run from a new supplier. Previous inspection reports did not match actual delivered quality.',
      approach: 'We conducted a full factory audit, identified gaps in their QC process, and implemented a three-stage inspection protocol. We also worked with the supplier to improve their in-house checks.',
      results: [
        'Defect rate reduced to 1.2% on subsequent orders',
        'Supplier now passes pre-shipment inspection consistently',
        'Client expanded to 4 additional SKUs with same supplier',
      ],
      timeline: '14 weeks from initial audit to first improved shipment',
    },
    {
      id: 'cs2',
      client: 'Industrial Equipment Importer',
      location: 'Australia',
      category: 'Industrial Equipment',
      challenge: 'Needed to qualify suppliers for a new product line within a tight 8-week window. Had no existing China supplier relationships.',
      approach: 'We searched our database and local networks, shortlisted 7 factories, and conducted on-site audits on 4. We coordinated samples and negotiated terms in parallel.',
      results: [
        '3 qualified suppliers approved within 6 weeks',
        'First production order placed at 12% below target cost',
        'Client established direct relationship with primary supplier',
      ],
      timeline: '6 weeks to supplier approval, 18 weeks to first delivery',
    },
    {
      id: 'cs3',
      client: 'Consumer Electronics Retailer',
      location: 'United Kingdom',
      category: 'Electronics',
      challenge: 'Lead times were consistently 3-4 weeks longer than promised. Communication delays caused missed seasonal deadlines.',
      approach: 'We implemented weekly production tracking with photo evidence, established escalation protocols, and worked with the factory to adjust their scheduling process.',
      results: [
        'Average lead time reduced by 22%',
        'On-time delivery improved from 64% to 91%',
        'Client now uses the same process with 2 additional suppliers',
      ],
      timeline: 'Ongoing relationship, improvements visible within 2 production cycles',
    },
    {
      id: 'cs4',
      client: 'Workwear Manufacturer',
      location: 'Canada',
      category: 'Apparel & Textiles',
      challenge: 'Inconsistent sizing and fabric quality across batches. Multiple returns from end customers.',
      approach: 'We established a pre-production sample approval process, defined measurable quality standards, and conducted in-line inspections during cutting and sewing.',
      results: [
        'Returns due to sizing dropped from 4.8% to 0.9%',
        'Fabric quality issues identified before bulk production',
        'Supplier adopted our QC checklist for other clients',
      ],
      timeline: '10 weeks for first improved production run',
    },
    {
      id: 'cs5',
      client: 'Automotive Aftermarket Distributor',
      location: 'United States',
      category: 'Automotive Parts',
      challenge: 'Needed to verify IATF 16949 certification claims and production capability for safety-critical components.',
      approach: 'We conducted a detailed audit including document verification, process capability studies, and traceability checks. We also reviewed their calibration and training records.',
      results: [
        '2 of 3 suppliers verified as IATF compliant',
        'One supplier disqualified due to documentation gaps',
        'Client avoided potential liability and quality issues',
      ],
      timeline: '4 weeks for full audit cycle',
    },
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="casestudies-hero-bg"
          data-strk-bg="China factory quality control inspection team"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Case Studies</h1>
          <p className="text-lg text-slate-600">Real projects with measurable outcomes. We share these to illustrate our process and the types of challenges we address.</p>
        </div>
      </section>

      <section className="section max-w-5xl mx-auto px-6">
        <div className="space-y-16">
          {cases.map((cs, idx) => (
            <div key={idx} className="border-b border-slate-200 pb-16 last:border-0 last:pb-0">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-medium px-3 py-1 bg-slate-100 rounded">{cs.category}</span>
                <span className="text-xs text-slate-500">{cs.location}</span>
              </div>
              
              <h2 id={`case-${cs.id}-title`} className="text-2xl font-semibold mb-2">{cs.client}</h2>
              <p className="text-sm text-slate-500 mb-6">{cs.timeline}</p>
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  data-strk-img-id={`case-${cs.id}`}
                  data-strk-img={`case-${cs.id}-title case-${cs.id}-category China factory production quality`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  alt={cs.client}
                  className="w-full h-56 object-cover"
                />
                <div id={`case-${cs.id}-category`} className="sr-only">{cs.category}</div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-xs font-medium text-slate-500 mb-2">THE CHALLENGE</div>
                  <p className="text-sm text-slate-700">{cs.challenge}</p>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 mb-2">OUR APPROACH</div>
                  <p className="text-sm text-slate-700">{cs.approach}</p>
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 mb-2">RESULTS</div>
                  <ul className="space-y-1.5 text-sm">
                    {cs.results.map((r, rIdx) => (
                      <li key={rIdx} className="flex gap-2">
                        <span className="text-emerald-600">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-slate-50 border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading title="What These Cases Have in Common" />
          <div className="grid md:grid-cols-3 gap-6 text-left text-sm">
            <div className="bg-white p-5 rounded border border-slate-200">
              <div className="font-medium mb-2">Clear specifications</div>
              <p className="text-slate-600">Clients who could articulate their requirements achieved better outcomes.</p>
            </div>
            <div className="bg-white p-5 rounded border border-slate-200">
              <div className="font-medium mb-2">Realistic timelines</div>
              <p className="text-slate-600">Projects with adequate time for verification and sampling had fewer issues.</p>
            </div>
            <div className="bg-white p-5 rounded border border-slate-200">
              <div className="font-medium mb-2">Active client involvement</div>
              <p className="text-slate-600">Buyers who reviewed reports promptly and made decisions quickly saw faster results.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Interested in a similar outcome?</h2>
        <p className="text-slate-600 mb-6">Every project is different. We will assess your specific situation before committing to a timeline or approach.</p>
        <a href="/contact" className="inline-block px-6 py-3 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800">Get a Free Sourcing Quote</a>
      </section>

      <CTA />
    </div>
  )
}

export default CaseStudies
