import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: 'industrial-pump',
    title: 'Precision Pump Components for German Manufacturer',
    industry: 'Industrial Machinery',
    location: 'Germany',
    summary: 'A German industrial pump manufacturer needed reliable Chinese suppliers for cast iron pump housings with tight dimensional tolerances.',
    challenge: 'The client had previously sourced from China but faced quality issues: inconsistent casting quality, dimensional variations, and poor surface finish. They needed a supplier who could consistently meet DIN standards.',
    approach: 'We identified and audited 8 foundries across Zhejiang and Jiangsu. After rigorous evaluation, we shortlisted 3 ISO 9001-certified factories with CNC machining capability. We implemented a multi-stage QC protocol: material certification check, in-process dimensional inspection, and pre-shipment CMM measurement.',
    results: [
      'Reduced defect rate from 12% to under 2%',
      'Achieved consistent dimensional tolerance of ±0.05mm',
      'Established 3-year stable supply relationship',
      'Annual order value: $800,000+',
    ],
    imgId: 'case-detail-pump-p3q4r5',
  },
  {
    id: 'led-lighting',
    title: 'LED Panel Lights for US Retail Chain',
    industry: 'Electronics & Lighting',
    location: 'United States',
    summary: 'A US retailer expanding into LED lighting needed a reliable supplier for UL-certified LED panel lights with competitive pricing for large-volume orders.',
    challenge: 'The client needed UL certification, competitive pricing, and the ability to deliver 50,000 units within 12 weeks. Previous attempts to source directly resulted in certification delays and quality inconsistencies.',
    approach: 'We vetted 5 LED manufacturers in Guangdong with UL certification experience. We negotiated a competitive price (18% below initial quotes), arranged UL file transfer, and established a production schedule with weekly QC checkpoints. We conducted in-process and pre-shipment inspections.',
    results: [
      '18% cost reduction vs. initial quotes',
      'All 50,000 units delivered on schedule',
      'UL certification approved without issues',
      'Ongoing relationship with quarterly orders',
    ],
    imgId: 'case-detail-led-s6t7u8',
  },
  {
    id: 'furniture-hardware',
    title: 'Custom Furniture Hardware for Scandinavian Brand',
    industry: 'Furniture & Hardware',
    location: 'Sweden',
    summary: 'A Scandinavian furniture brand needed custom zinc alloy handles and hinges matching their exact design specifications for a new product line.',
    challenge: 'The designs required precise die-casting with complex surface finishing (brushed nickel and matte black). The client needed consistent quality across 100,000+ units per year with strict lead time requirements.',
    approach: 'We sourced 2 specialized zinc alloy die-casting factories in Dongguan. We managed the entire tooling development process, including mold design review, sampling, and finishing trials. We established a QC protocol covering material composition, dimensional accuracy, and surface finish quality.',
    results: [
      'Tooling delivered in 6 weeks',
      'Consistent quality over 3+ years of production',
      'Zero critical defects across 300,000+ units',
      'Annual cost savings of 25% vs. previous European supplier',
    ],
    imgId: 'case-detail-furniture-v9w0x1',
  },
  {
    id: 'silicone-medical',
    title: 'Medical-Grade Silicone Components for European Healthcare',
    industry: 'Medical & Healthcare',
    location: 'Netherlands',
    summary: 'A European medical device company needed ISO 13485-certified suppliers for medical-grade silicone components used in respiratory devices.',
    challenge: 'Strict regulatory requirements (ISO 13485, biocompatibility testing). The client needed FDA-registered facilities with cleanroom production capability. Low defect tolerance was critical.',
    approach: 'We identified 3 ISO 13485-certified silicone manufacturers with cleanroom facilities. We conducted comprehensive audits covering quality systems, material traceability, and cleanroom protocols. We coordinated biocompatibility testing and FDA registration verification.',
    results: [
      'Identified 2 fully compliant suppliers',
      'All regulatory documentation verified',
      'First production batch: 0.1% defect rate',
      'Established ongoing supply for 5 product lines',
    ],
    imgId: 'case-detail-medical-y2z3a4',
  },
  {
    id: 'stainless-steel',
    title: 'Stainless Steel Kitchenware for Australian Brand',
    industry: 'Home & Kitchen',
    location: 'Australia',
    summary: 'An Australian kitchenware brand wanted to launch a premium stainless steel cookware line sourced from China with strict quality and food-safety standards.',
    challenge: 'The products required food-grade 304 stainless steel, multi-layer construction, and polished mirror finish. The client needed FDA and LFGB compliance for food contact materials.',
    approach: 'We sourced 4 specialized stainless steel cookware manufacturers in Guangdong. We verified material certifications, conducted factory audits, and coordinated third-party lab testing for food safety compliance. We managed sampling rounds and production ramp-up.',
    results: [
      'Launched 12 SKU product line on schedule',
      'All products passed FDA and LFGB testing',
      '25% lower landed cost vs. previous supplier',
      'Consistent quality across 3 production runs',
    ],
    imgId: 'case-detail-kitchenware-b5c6d7',
  },
  {
    id: 'packaging',
    title: 'Custom Packaging for European Cosmetics Brand',
    industry: 'Packaging & Printing',
    location: 'France',
    summary: 'A French cosmetics brand needed luxury custom packaging for a new skincare line, including rigid boxes with magnetic closures, foil stamping, and embossing.',
    challenge: 'High-end finishing requirements with tight color consistency. The client needed packaging that matched their premium brand positioning. Short lead time of 8 weeks for 30,000 units.',
    approach: 'We identified 3 premium packaging manufacturers in Shenzhen and Dongguan. We coordinated sampling, color matching, and finishing trials. We implemented inline QC during production to catch issues early.',
    results: [
      'Delivered 30,000 units on time',
      'Color consistency within Delta E < 2',
      '40% cost savings vs. European packaging suppliers',
      'Now the primary packaging supplier for 3 product lines',
    ],
    imgId: 'case-detail-packaging-e8f9g0',
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
      <section className="bg-brand-900 py-16 md:py-20">
        <div className="section-container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Real examples of how we help international buyers source successfully from China.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/7] bg-neutral-100 overflow-hidden">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[cs-${cs.id}-industry] [cs-${cs.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-brand-500 bg-brand-50 px-2.5 py-1 rounded-full" id={`cs-${cs.id}-industry`}>
                      {cs.industry}
                    </span>
                    <span className="text-xs text-neutral-400">{cs.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3" id={`cs-${cs.id}-title`}>
                    {cs.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-4 leading-relaxed">{cs.summary}</p>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-accent-600">Challenge: </span>
                      <span className="text-neutral-500">{cs.challenge}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-brand-600">Approach: </span>
                      <span className="text-neutral-500">{cs.approach}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-neutral-100">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Key Results</p>
                    <ul className="space-y-1">
                      {cs.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                          <span className="text-brand-500 font-bold mt-0.5">&bull;</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-50">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Ready to Become Our Next Case Study?</h2>
          <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
            Submit your sourcing requirements and let us show you how we can help your business.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-3.5 inline-flex items-center gap-2">
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}