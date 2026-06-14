import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Home Goods Retailer',
      location: 'Germany',
      product: 'Kitchenware Collection',
      challenge: 'Previous supplier delivered inconsistent quality. Defect rates exceeded 12% on the last two orders, leading to customer complaints and returns.',
      approach: 'We conducted a full audit of the existing supplier and identified gaps in their quality control process. We introduced a structured inspection protocol with defined acceptance criteria and trained factory staff on the client\'s specific requirements.',
      results: [
        'Defect rate reduced from 12% to under 2% within two production cycles',
        'Implemented in-line quality checkpoints that caught issues earlier',
        'Established a documented quality manual for ongoing reference',
      ],
      metrics: '18% cost reduction vs. previous sourcing arrangement',
      timeline: '14 weeks from initial contact to first improved shipment',
    },
    {
      client: 'North American Industrial Distributor',
      location: 'United States',
      product: 'Precision Metal Components',
      challenge: 'Needed to qualify new suppliers for a product line expansion. Had no existing relationships in China and required verified manufacturing partners with specific technical capabilities.',
      approach: 'We developed a detailed capability matrix based on the client\'s drawings and tolerances. We searched our database and conducted targeted outreach, then performed on-site audits of five shortlisted factories. We coordinated sample production and first-article inspection.',
      results: [
        'Three suppliers successfully qualified and approved',
        'All three passed first-article inspection on initial submission',
        'Established backup supplier relationships for supply security',
      ],
      metrics: 'On-time delivery rate improved to 97% across first year',
      timeline: '11 weeks from project start to approved supplier list',
    },
    {
      client: 'Australian E-commerce Brand',
      location: 'Australia',
      product: 'Private Label Home Textiles',
      challenge: 'Rapid growth required reliable sourcing for multiple new product launches. Previous attempts at direct sourcing resulted in quality issues and missed delivery windows.',
      approach: 'We provided end-to-end support across four product categories. This included supplier selection, sample coordination, production monitoring, and pre-shipment inspection. We also assisted with packaging compliance for Australian retail standards.',
      results: [
        'Four successful product launches within a single season',
        'Consistent quality across all SKUs with zero returns for defects',
        'Maintained average lead time of 6 weeks from order to shipment',
      ],
      metrics: '6-week average lead time maintained across all orders',
      timeline: 'Ongoing partnership, 18 months and counting',
    },
    {
      client: 'UK Specialty Retail Chain',
      location: 'United Kingdom',
      product: 'Seasonal Decorative Items',
      challenge: 'Tight seasonal deadlines with high aesthetic standards. Previous agent delivered late and quality varied widely between batches.',
      approach: 'We implemented a compressed timeline with weekly production updates and early-stage sample approval. We stationed inspection resources at the factory during the final two weeks to catch issues before they affected the entire order.',
      results: [
        'All containers arrived 10 days before the retail launch date',
        'Zero quality-related customer complaints during the season',
        'Supplier retained for the following year based on performance',
      ],
      metrics: '100% on-time delivery for peak season',
      timeline: '9 weeks from brief to delivery at UK warehouse',
    },
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="text-sm tracking-[2px] text-slate-400 mb-4">CASE STUDIES</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Real Projects, Real Results</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            These case studies represent actual client engagements. We focus on measurable improvements 
            rather than dramatic claims.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {cases.map((c, idx) => (
            <div key={idx} className="border-b border-slate-200 pb-16 last:border-b-0 last:pb-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <div className="text-sm text-slate-500">{c.location}</div>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mt-1">{c.client}</h2>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-500">Product</div>
                  <div className="font-medium text-slate-900">{c.product}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                <div>
                  <div className="uppercase text-xs tracking-[2px] text-slate-500 mb-2">The Challenge</div>
                  <p className="text-slate-600 leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <div className="uppercase text-xs tracking-[2px] text-slate-500 mb-2">Our Approach</div>
                  <p className="text-slate-600 leading-relaxed">{c.approach}</p>
                </div>
              </div>

              <div className="mt-8">
                <div className="uppercase text-xs tracking-[2px] text-slate-500 mb-3">Results</div>
                <ul className="grid md:grid-cols-3 gap-4 text-sm">
                  {c.results.map((r, i) => (
                    <li key={i} className="bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 text-slate-700">{r}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-6 text-sm">
                <div>
                  <span className="text-slate-500">Key Metric: </span>
                  <span className="font-medium text-slate-900">{c.metrics}</span>
                </div>
                <div>
                  <span className="text-slate-500">Timeline: </span>
                  <span className="font-medium text-slate-900">{c.timeline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Your Project Could Be Next</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">We work with companies of all sizes across many industries. If you have a sourcing challenge, let's discuss it.</p>
          <Button asChild size="lg">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
