import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import ProcessStep from '@/components/sections/ProcessStep'
import { 
  FileText, Search, Factory, CheckCircle, Truck, 
  MessageSquare, Camera, ClipboardCheck 
} from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Submit Your Requirements",
      description: "Complete our inquiry form or contact us directly with your product specifications, target price range, quantity, quality requirements, and timeline.",
      items: [
        "Product description and specifications",
        "Target price and quantity",
        "Required certifications or standards",
        "Packaging and labeling requirements",
        "Delivery destination and timeline"
      ]
    },
    {
      number: "02",
      title: "Receive Supplier Shortlist",
      description: "Within 3-5 business days, we provide a curated shortlist of 3-5 verified suppliers with pricing, capabilities, and our assessment of each.",
      items: [
        "Supplier profiles and contact details",
        "Quoted pricing and MOQ",
        "Production capacity and lead times",
        "Our risk assessment and recommendation",
        "Next steps for each supplier"
      ]
    },
    {
      number: "03",
      title: "Factory Verification & Sampling",
      description: "We conduct on-site verification of your preferred suppliers and coordinate samples for your approval before any production begins.",
      items: [
        "On-site factory audit with photos",
        "Sample development coordination",
        "Sample review and feedback loop",
        "Contract and terms negotiation support",
        "Final supplier selection"
      ]
    },
    {
      number: "04",
      title: "Production & Quality Control",
      description: "We monitor production milestones, coordinate quality inspections at key stages, and keep you informed with regular updates and documentation.",
      items: [
        "Production schedule confirmation",
        "Pre-production sample approval",
        "During-production inspection",
        "Pre-shipment inspection (AQL)",
        "Photo and video progress reports"
      ]
    },
    {
      number: "05",
      title: "Shipping & Delivery",
      description: "We coordinate logistics, prepare documentation, and track your shipment until it reaches your warehouse or specified delivery location.",
      items: [
        "Freight booking and rate negotiation",
        "Export documentation preparation",
        "Customs clearance coordination",
        "Real-time shipment tracking",
        "Delivery confirmation and follow-up"
      ]
    }
  ]

  const deliverables = [
    { icon: FileText, title: "Written Reports", desc: "Detailed audit and inspection reports with photos and findings" },
    { icon: Camera, title: "Photo & Video Evidence", desc: "Factory conditions, production progress, and product samples documented" },
    { icon: ClipboardCheck, title: "Quality Records", desc: "Inspection checklists, test results, and compliance documentation" },
    { icon: MessageSquare, title: "Regular Updates", desc: "Weekly progress reports and immediate escalation of any issues" }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold tracking-wider text-blue-300 mb-3">OUR PROCESS</div>
            <h1 className="text-white mb-6">How Our Sourcing Process Works</h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              A structured, transparent approach designed to reduce risk, maintain quality, and keep you informed at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section container">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="section-heading mb-4">The 5-Step Sourcing Process</h2>
            <p className="text-slate-600">Each step includes clear deliverables and checkpoints. You approve before we proceed to the next stage.</p>
          </div>

          <div className="space-y-2">
            {steps.map((step, index) => (
              <ProcessStep 
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                items={step.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="section-heading">What You Receive</h2>
            <p className="section-subheading mx-auto">Every engagement includes comprehensive documentation and regular communication.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {deliverables.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="b2b-card p-6 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center mb-8">Typical Timeline</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start p-4 bg-white border border-slate-200 rounded-lg">
              <div className="font-mono text-sm text-accent font-semibold w-24 flex-shrink-0">Days 1-3</div>
              <div>
                <div className="font-medium">Initial Consultation & Requirements</div>
                <div className="text-sm text-slate-600">We discuss your needs, clarify specifications, and confirm scope and timeline.</div>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-white border border-slate-200 rounded-lg">
              <div className="font-mono text-sm text-accent font-semibold w-24 flex-shrink-0">Days 3-8</div>
              <div>
                <div className="font-medium">Supplier Research & Shortlist</div>
                <div className="text-sm text-slate-600">We research, screen, and present 3-5 qualified suppliers with pricing and capabilities.</div>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-white border border-slate-200 rounded-lg">
              <div className="font-mono text-sm text-accent font-semibold w-24 flex-shrink-0">Weeks 2-4</div>
              <div>
                <div className="font-medium">Verification & Sampling</div>
                <div className="text-sm text-slate-600">Factory audits, sample development, and your approval before production.</div>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-white border border-slate-200 rounded-lg">
              <div className="font-mono text-sm text-accent font-semibold w-24 flex-shrink-0">Production</div>
              <div>
                <div className="font-medium">Production & Quality Control</div>
                <div className="text-sm text-slate-600">Ongoing monitoring, inspections at key stages, and regular progress updates.</div>
              </div>
            </div>
            <div className="flex gap-4 items-start p-4 bg-white border border-slate-200 rounded-lg">
              <div className="font-mono text-sm text-accent font-semibold w-24 flex-shrink-0">Final Stage</div>
              <div>
                <div className="font-medium">Shipping & Delivery</div>
                <div className="text-sm text-slate-600">Logistics coordination, documentation, and tracking until goods reach your warehouse.</div>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-6 text-center">Timelines vary by product complexity, order volume, and current factory capacity. We provide a realistic schedule after understanding your requirements.</p>
        </div>
      </section>

      {/* Communication */}
      <section className="section bg-slate-50 border-t border-slate-200">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading mb-4">Communication & Transparency</h2>
            <p className="text-slate-600 mb-8">You are kept informed throughout the process. We respond during your business hours and escalate issues immediately.</p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <div className="font-medium mb-2">Weekly Reports</div>
                <p className="text-sm text-slate-600">Structured updates on progress, issues, and upcoming milestones.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <div className="font-medium mb-2">Immediate Escalation</div>
                <p className="text-sm text-slate-600">Any quality, timeline, or capacity issues are flagged the same day.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <div className="font-medium mb-2">Direct Access</div>
                <p className="text-sm text-slate-600">You have direct contact with your dedicated sourcing manager.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section container text-center">
        <h2 className="section-heading mb-4">Ready to start?</h2>
        <p className="text-slate-600 mb-6 max-w-md mx-auto">Submit your requirements and we'll provide a preliminary assessment and timeline within 24 hours.</p>
        <Link to="/contact">
          <Button variant="primary" size="lg">Get a Free Sourcing Quote</Button>
        </Link>
      </section>
    </div>
  )
}

export default HowItWorks
