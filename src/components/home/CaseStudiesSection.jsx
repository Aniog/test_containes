import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    title: 'Electronics Manufacturer Finds Reliable PCB Supplier',
    summary: 'A US-based electronics company needed a verified PCB manufacturer with ISO certification. We identified 3 qualified factories, coordinated samples, and managed production for a 50,000-unit order.',
    result: 'Result: 15% cost savings, zero defect rate, delivered 5 days early.',
    imgId: 'case-study-1-a1b2c3',
  },
  {
    title: 'Retailer Avoids $200K in Defective Products',
    summary: 'During a pre-shipment inspection, our QC team discovered that 30% of a home goods order did not meet the approved sample quality. We halted shipment and negotiated a full rework with the factory.',
    result: 'Result: Saved the client from receiving defective goods and potential chargebacks.',
    imgId: 'case-study-2-d4e5f6',
  },
  {
    title: 'Startup Launches Private Label Product Line',
    summary: 'A European e-commerce startup wanted to launch a private label kitchenware line. We handled everything from supplier sourcing to packaging design coordination and Amazon FBA shipping.',
    result: 'Result: Product launched on time, 4.7-star average rating, 10,000+ units sold in first quarter.',
    imgId: 'case-study-3-g7h8i9',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="case-studies-title" className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#1a2744] mb-4">
            Case Studies
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto text-base md:text-lg">
            Real examples of how we have helped buyers succeed with China sourcing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="card flex flex-col">
              <div
                className="w-full aspect-video rounded-md mb-5 bg-[#f5f7fa] overflow-hidden"
                data-strk-bg-id={study.imgId}
                data-strk-bg={`[case-study-title-${index}] [case-studies-title]`}
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="600"
              />
              <h3 id={`case-study-title-${index}`} className="text-base font-semibold text-[#1a2744] mb-3">
                {study.title}
              </h3>
              <p className="text-[#4a5568] text-sm leading-relaxed mb-4 flex-1">{study.summary}</p>
              <div className="bg-[#f5f7fa] rounded-md p-3 mb-4">
                <p className="text-[#1a2744] text-sm font-medium">{study.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/case-studies" className="btn-secondary">
            View All Case Studies
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
