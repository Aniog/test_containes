import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

const CaseStudies = () => {
  const caseStudies = [
    {
      client: 'European Retail Chain',
      location: 'Germany',
      industry: 'Home Goods Retail',
      product: 'Kitchen Appliances',
      challenge: 'The client needed to expand their private label kitchen appliance range but had limited supplier options that met EU safety and quality standards. Previous attempts to source directly resulted in quality issues and delivery delays.',
      approach: 'We conducted a targeted search for manufacturers with existing CE certification capability and relevant production experience. We verified three factories through on-site audits, coordinated sample production, and established a quality inspection protocol based on the client\'s specifications.',
      results: [
        'Identified and verified 3 qualified manufacturers',
        '12 SKUs developed and approved for production',
        '18% cost reduction versus previous European sourcing',
        'Defect rate reduced to under 1.5% through inspection protocol',
        'First production run of 4,200 units delivered on schedule',
      ],
      timeline: '14 weeks from initial discussion to first delivery',
      scope: 'Full sourcing support including supplier identification, verification, sampling, production monitoring, and pre-shipment inspection.',
    },
    {
      client: 'US E-commerce Brand',
      location: 'California, USA',
      industry: 'Consumer Electronics',
      product: 'Mobile Phone Accessories',
      challenge: 'Rapid growth created demand for consistent supply of phone cases, cables, and chargers. The client had worked with several suppliers but experienced quality variation and communication difficulties. Defect rates exceeded 8% on some shipments.',
      approach: 'We assessed existing suppliers and identified two factories with better process control. We implemented a structured QC program with defined acceptance criteria and trained factory staff on the client\'s requirements. We also established a pre-shipment inspection process.',
      results: [
        'Established ongoing supply relationship with 2 factories',
        'Monthly order volume stabilized at 8,000-12,000 units',
        'Defect rate reduced from 8% to under 1%',
        'Lead time improved from 6 weeks to 4 weeks average',
        'Consistent quality enabled expansion to 3 additional SKUs',
      ],
      timeline: 'Ongoing relationship, 18 months to date',
      scope: 'Supplier assessment, QC program implementation, ongoing production monitoring, and pre-shipment inspection for repeat orders.',
    },
    {
      client: 'Australian Distributor',
      location: 'Sydney, Australia',
      industry: 'Industrial Safety Equipment',
      product: 'Personal Protective Equipment',
      challenge: 'The client identified a potential supplier for safety helmets and protective eyewear but needed verification that the factory could meet Australian safety standards and produce consistent quality at scale. No prior import experience from China.',
      approach: 'We conducted a full factory verification including quality system review and capability assessment. We coordinated sample production with required testing, supported documentation for regulatory compliance, and managed the first production run with staged inspections.',
      results: [
        'Factory verified for capability and quality systems',
        'EN and AS/NZS certification requirements confirmed and met',
        'First production run of 15,000 units completed successfully',
        'All required export documentation prepared and verified',
        'Client established direct relationship for future orders',
      ],
      timeline: '11 weeks from engagement to delivery at Australian warehouse',
      scope: 'Factory verification, sample coordination, compliance documentation support, production monitoring, and pre-shipment inspection.',
    },
    {
      client: 'Canadian Hardware Importer',
      location: 'Ontario, Canada',
      industry: 'Tools & Hardware',
      product: 'Hand Tools and Fasteners',
      challenge: 'The client wanted to consolidate sourcing from multiple small suppliers into fewer, more reliable manufacturers. Quality was inconsistent across suppliers, and administrative overhead was high.',
      approach: 'We analyzed the product range and identified opportunities to consolidate. We sourced manufacturers capable of producing multiple product lines, verified their capabilities, and coordinated a phased transition from existing suppliers.',
      results: [
        'Reduced active supplier count from 11 to 4',
        'Negotiated improved pricing through volume consolidation',
        'Standardized quality specifications across product lines',
        'Implemented consistent inspection criteria',
        'Simplified logistics with consolidated shipments',
      ],
      timeline: '6 months for full transition across product categories',
      scope: 'Supplier consolidation strategy, factory verification, sample approval, production coordination, and ongoing quality management.',
    },
    {
      client: 'UK Promotional Products Company',
      location: 'Manchester, UK',
      industry: 'Promotional Merchandise',
      product: 'Custom Branded Drinkware and Textiles',
      challenge: 'Seasonal demand spikes created challenges with lead times and quality consistency. The client needed reliable capacity for custom-branded products with tight turnaround requirements.',
      approach: 'We identified factories with proven capacity for custom work and shorter production cycles. We established pre-approved sample libraries for common decoration methods and implemented a rush order protocol with dedicated production slots.',
      results: [
        'Established 2 primary suppliers for core product categories',
        'Reduced average lead time from 5 weeks to 3 weeks',
        'Implemented pre-production sample approval process',
        'Created capacity reservation for peak season orders',
        'Maintained quality standards during high-volume periods',
      ],
      timeline: 'Ongoing relationship, 2 years to date',
      scope: 'Supplier development, sample library management, production scheduling, and quality oversight for seasonal order cycles.',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0A2540] text-white py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-[36px] font-semibold mb-4">Case Studies</h1>
            <p className="text-lg text-[#94A3B8]">
              Examples of sourcing projects we have completed. Each project is different, 
              and we adapt our approach based on client needs and product requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className="text-sm text-[#2563EB] font-medium mb-1">{study.industry}</div>
                      <h3 className="text-xl font-semibold text-[#0A2540] mb-1">{study.client}</h3>
                      <div className="text-sm text-[#64748B] mb-4">{study.location}</div>
                      
                      <div className="mb-4">
                        <div className="text-xs uppercase tracking-wide text-[#64748B] mb-1">Product</div>
                        <div className="text-sm font-medium text-[#0A2540]">{study.product}</div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-xs uppercase tracking-wide text-[#64748B] mb-1">Timeline</div>
                        <div className="text-sm text-[#475569]">{study.timeline}</div>
                      </div>

                      <div>
                        <div className="text-xs uppercase tracking-wide text-[#64748B] mb-1">Scope</div>
                        <div className="text-sm text-[#475569]">{study.scope}</div>
                      </div>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <div className="text-sm font-semibold text-[#0A2540] mb-2">Challenge</div>
                        <p className="text-sm text-[#475569]">{study.challenge}</p>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-[#0A2540] mb-2">Approach</div>
                        <p className="text-sm text-[#475569]">{study.approach}</p>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-[#0A2540] mb-2">Results</div>
                        <ul className="space-y-1.5">
                          {study.results.map((result, i) => (
                            <li key={i} className="text-sm text-[#475569] flex items-start gap-2">
                              <span className="text-[#059669] mt-1">•</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm text-[#475569]">
              Client names and specific product details may be withheld for confidentiality. 
              Results vary based on product complexity, order volume, and market conditions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-[#0A2540] mb-3">Have a similar sourcing need?</h2>
          <p className="text-[#475569] mb-6">We can discuss your requirements and provide relevant examples from our experience.</p>
          <Button asChild size="lg">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
