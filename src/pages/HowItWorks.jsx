import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import ProcessStep from '@/components/sections/ProcessStep'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin with a detailed discussion of your sourcing requirements. This includes product specifications, target pricing, expected volume, quality standards, compliance needs, and timeline.",
      items: [
        "Product specifications, drawings, or samples",
        "Target price range and volume expectations",
        "Quality requirements and acceptance criteria",
        "Regulatory or certification requirements",
        "Preferred shipping terms and destination"
      ]
    },
    {
      number: "02",
      title: "Supplier Search & Screening",
      description: "We search our factory network and conduct preliminary screening to identify manufacturers capable of meeting your requirements. We typically present 3-5 shortlisted options.",
      items: [
        "Capability and capacity assessment",
        "Preliminary pricing and lead time comparison",
        "Sample request coordination",
        "Initial reference and background checks"
      ]
    },
    {
      number: "03",
      title: "Factory Verification",
      description: "We conduct on-site audits of shortlisted factories. The audit covers legal status, production capability, quality systems, and working conditions. You receive a written report with photographs.",
      items: [
        "Business license and legal verification",
        "Production facility and equipment review",
        "Quality control process evaluation",
        "Workforce and compliance assessment",
        "Reference checks with existing clients"
      ]
    },
    {
      number: "04",
      title: "Sample Evaluation",
      description: "We coordinate sample production and evaluate samples against your specifications. We provide detailed feedback and work with the factory on any required adjustments before proceeding to production.",
      items: [
        "Sample quality and specification review",
        "Dimensional and functional testing",
        "Material and finish verification",
        "Packaging and labeling assessment",
        "Cost and production timeline confirmation"
      ]
    },
    {
      number: "05",
      title: "Order Placement & Production",
      description: "We support purchase order review, deposit coordination, and production kickoff. During manufacturing, we conduct scheduled monitoring visits and provide progress reports at key milestones.",
      items: [
        "Purchase order and contract review",
        "Production schedule establishment",
        "Raw material arrival confirmation",
        "Mid-production progress reports",
        "Issue identification and resolution support"
      ]
    },
    {
      number: "06",
      title: "Quality Inspection",
      description: "Before final payment and shipment, we conduct a pre-shipment inspection using documented criteria. We provide a detailed inspection report with photographs within 24 hours of the inspection.",
      items: [
        "Visual and dimensional inspection",
        "Functional and performance testing",
        "Packaging and labeling verification",
        "Quantity and assortment check",
        "Detailed report with photos and findings"
      ]
    },
    {
      number: "07",
      title: "Shipping & Documentation",
      description: "We coordinate with freight forwarders for booking and documentation. We review commercial documents for accuracy and track the shipment until delivery at your destination.",
      items: [
        "Freight quote comparison and booking",
        "Commercial invoice and packing list review",
        "Bill of lading verification",
        "Shipment tracking and status updates",
        "Delivery confirmation and issue resolution"
      ]
    },
  ]

  const principles = [
    {
      title: "Transparency",
      text: "We share the same information we use internally. You receive written reports, photographs, and clear recommendations rather than vague assurances."
    },
    {
      title: "Verification Over Trust",
      text: "We do not rely on factory claims alone. Every recommended supplier has been visited and evaluated using documented criteria."
    },
    {
      title: "Practical Communication",
      text: "We provide regular updates in clear English during your business hours. We flag issues early and propose concrete next steps."
    },
    {
      title: "Aligned Incentives",
      text: "Our fees are service-based, not commission-based on order value. Our goal is to help you find the right supplier and avoid costly mistakes."
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="uppercase tracking-[2px] text-xs text-slate-400 mb-3">OUR METHOD</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">How It Works</h1>
          <p className="max-w-2xl text-lg text-slate-300">A structured process designed to reduce sourcing risk and improve outcomes for buyers working with Chinese manufacturers.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-2">
          {steps.map((step, idx) => (
            <ProcessStep key={idx} {...step} />
          ))}
        </div>
      </div>

      <div className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-8">Our Operating Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p, idx) => (
              <div key={idx}>
                <div className="font-medium text-lg mb-2">{p.title}</div>
                <p className="text-sm text-slate-600 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold tracking-tight mb-3">Ready to start a sourcing project?</h2>
        <p className="text-slate-600 mb-6">We provide a preliminary assessment and project quotation at no obligation.</p>
        <Button asChild size="lg">
          <Link to="/contact">Get a Free Sourcing Quote</Link>
        </Button>
      </div>

      <Footer />
    </div>
  )
}

export default HowItWorks