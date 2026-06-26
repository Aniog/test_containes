import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics-startup',
    title: 'Electronics Startup Cuts Defect Rate by 85%',
    client: 'US Consumer Electronics Brand',
    industry: 'Electronics',
    challenge: 'A US-based startup was struggling with a 22% defect rate from their Chinese supplier. Products arrived with inconsistent soldering, wrong components, and poor assembly quality. Returns were costing $120K annually and damaging their brand reputation.',
    solution: 'We conducted a root cause analysis, identified that the original supplier was a trading company subcontracting to an unverified workshop. We sourced two verified factories with proper QC systems, arranged sample testing, and implemented a three-stage inspection protocol (PPI, DPI, PSI).',
    result: 'Defect rate dropped from 22% to 3% within the first production run. Annual returns cost reduced by $120K. The client expanded their product line with confidence.',
    tag: 'Electronics',
  },
  {
    id: 'furniture-brand',
    title: 'Furniture Brand Scales Production 3x',
    client: 'European Furniture Retailer',
    industry: 'Furniture',
    challenge: 'A European retailer needed to triple their order volume for their expanding store network. Their existing single factory could not handle the increased volume, and they worried about quality consistency across multiple suppliers.',
    solution: 'We sourced two additional factories with matching capabilities, conducted parallel verification visits, and created a unified quality standard document. We coordinated production schedules across all three factories and conducted inspections at each location.',
    result: 'On-time delivery for 3x volume with consistent quality across all three factories. The client opened 12 new stores in the following year.',
    tag: 'Furniture',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts Importer Avoids $200K Loss',
    client: 'Middle East Auto Distributor',
    industry: 'Auto Parts',
    challenge: 'A Middle East distributor ordered a large shipment of brake components. The supplier provided good samples, but the client had no way to verify mass production quality.',
    solution: 'During our pre-shipment inspection, we discovered critical dimensional errors in 40% of the order. The brake pads did not meet the specified thickness tolerances. We immediately halted shipment, documented the issues with photos and measurements, and negotiated with the factory to remake the defective parts at their cost.',
    result: 'Client received correct parts after rework, avoiding a $200K loss from defective stock that could have caused safety issues and legal liability.',
    tag: 'Auto Parts',
  },
  {
    id: 'textile-brand',
    title: 'Textile Brand Ensures Compliance for EU Market',
    client: 'Nordic Fashion Brand',
    industry: 'Textiles',
    challenge: 'A Nordic fashion brand needed to ensure their Chinese suppliers complied with EU REACH regulations for chemical substances in textiles. Previous shipments had failed lab tests for restricted substances.',
    solution: 'We identified suppliers with OEKO-TEX and GOTS certifications, arranged pre-production fabric testing at accredited labs, and implemented a chemical management protocol. We also verified that dyeing and finishing processes met EU standards.',
    result: 'All subsequent shipments passed EU customs and lab testing. The brand avoided costly recalls and maintained their sustainability commitments.',
    tag: 'Textiles',
  },
  {
    id: 'packaging-company',
    title: 'Packaging Company Reduces Lead Time by 40%',
    client: 'Australian Packaging Company',
    industry: 'Packaging',
    challenge: 'An Australian company was experiencing 90-day lead times from their Chinese packaging supplier, causing frequent stockouts and lost sales opportunities.',
    solution: 'We found a closer supplier with faster production capabilities, negotiated buffer stock arrangements, and set up a reorder system with pre-approved designs. We also consolidated shipments to reduce logistics time.',
    result: 'Lead time reduced from 90 days to 54 days. Stockouts eliminated, and the client increased order frequency with confidence.',
    tag: 'Packaging',
  },
]

export default function CaseStudies() {
  return (
    <div>
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Case Studies
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Real results from real clients. See how we have helped businesses source better from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs) => (
              <article key={cs.id} className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-50 px-6 md:px-8 py-5 border-b border-slate-200">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {cs.tag}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-primary">{cs.title}</h2>
                  <p className="text-slate-500 text-sm mt-1">{cs.client}</p>
                </div>
                <div className="px-6 md:px-8 py-6 space-y-5">
                  <div>
                    <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">Challenge</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Our Solution</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-2">Result</h3>
                    <p className="text-green-800 text-sm leading-relaxed font-medium">{cs.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Want Results Like These?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Tell us about your sourcing challenge. We will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
