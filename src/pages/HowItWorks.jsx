import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { CheckCircle, ArrowRight, Clock, FileText, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { SectionHeader } from "@/components/ui/SectionHeader"

const steps = [
  {
    num: "01",
    title: "Submit Your Sourcing Inquiry",
    desc: "Fill out our inquiry form with your product requirements — type, specifications, target price, quantity, and any compliance needs. The more detail you provide, the faster we can match you with the right suppliers.",
    details: [
      "No commitment required at this stage",
      "We respond within 24 business hours",
      "Free initial consultation included",
    ],
    imgId: "hiw-step1-img-a1b2c3",
    titleId: "hiw-step1-title",
    descId: "hiw-step1-desc",
  },
  {
    num: "02",
    title: "Supplier Research & Shortlisting",
    desc: "Our sourcing team searches our verified supplier database and conducts targeted research to identify factories that match your requirements. We evaluate each supplier on capability, capacity, certifications, and track record.",
    details: [
      "3–5 qualified suppliers shortlisted",
      "Delivered within 3–5 business days",
      "Supplier profiles with key metrics included",
    ],
    imgId: "hiw-step2-img-d4e5f6",
    titleId: "hiw-step2-title",
    descId: "hiw-step2-desc",
  },
  {
    num: "03",
    title: "Factory Audit & Verification",
    desc: "For shortlisted suppliers, our local team conducts on-site factory visits to verify production capacity, quality systems, certifications, and working conditions. We provide a detailed audit report with photos.",
    details: [
      "In-person factory visit by our China team",
      "Capacity, quality, and compliance assessment",
      "Detailed audit report within 48 hours",
    ],
    imgId: "hiw-step3-img-g7h8i9",
    titleId: "hiw-step3-title",
    descId: "hiw-step3-desc",
  },
  {
    num: "04",
    title: "Sample Coordination & Negotiation",
    desc: "We coordinate sample production, review samples against your specifications, and provide feedback to the factory. Once you approve the sample, we negotiate pricing, payment terms, and lead times on your behalf.",
    details: [
      "Sample request and follow-up managed by us",
      "Quality review against your specifications",
      "Price and terms negotiation in Chinese",
    ],
    imgId: "hiw-step4-img-j1k2l3",
    titleId: "hiw-step4-title",
    descId: "hiw-step4-desc",
  },
  {
    num: "05",
    title: "Production Monitoring & QC",
    desc: "Once your order is placed, we monitor production progress with regular factory visits and status updates. We conduct inspections at key milestones — during production and pre-shipment — to ensure quality standards are met.",
    details: [
      "Regular factory visits and progress reports",
      "During-production and pre-shipment inspections",
      "Issues flagged and resolved before shipment",
    ],
    imgId: "hiw-step5-img-m4n5o6",
    titleId: "hiw-step5-title",
    descId: "hiw-step5-desc",
  },
  {
    num: "06",
    title: "Shipping & Delivery",
    desc: "After goods pass inspection, we coordinate with freight forwarders to arrange the most suitable shipping option. We prepare all export documentation and track your shipment until it reaches your destination.",
    details: [
      "Sea, air, and express shipping options",
      "Full export documentation support",
      "Shipment tracking and status updates",
    ],
    imgId: "hiw-step6-img-p7q8r9",
    titleId: "hiw-step6-title",
    descId: "hiw-step6-desc",
  },
]

const timeline = [
  { phase: "Inquiry & Matching", duration: "1–5 days" },
  { phase: "Factory Audit", duration: "3–7 days" },
  { phase: "Sampling", duration: "7–21 days" },
  { phase: "Production", duration: "15–45 days" },
  { phase: "Inspection", duration: "1–3 days" },
  { phase: "Shipping (Sea)", duration: "15–35 days" },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-[#1A1F2E] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-3">Our Process</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
            <p className="text-lg text-[#9AAABB] leading-relaxed">
              A transparent, step-by-step process that takes you from initial inquiry to goods delivered — with our team managing every detail in China.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={step.num}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-6xl font-black text-[#EEF2F7] mb-2 leading-none">{step.num}</div>
                  <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-[#1A1F2E] mb-4">{step.title}</h2>
                  <p id={step.descId} className="text-[#3D4A5C] leading-relaxed mb-6">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-[#3D4A5C] text-sm">
                        <CheckCircle className="w-4 h-4 text-[#27AE60] flex-shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    alt={step.title}
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Typical Timeline"
            title="How Long Does It Take?"
            subtitle="Timelines vary by product complexity and order size. Here's a typical breakdown."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {timeline.map((item, i) => (
              <div key={item.phase} className="bg-white rounded-xl border border-[#D8E0EA] p-5 text-center">
                <div className="w-8 h-8 bg-[#1A4B8C] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
                <p className="text-[#1A1F2E] font-semibold text-sm mb-1">{item.phase}</p>
                <p className="text-[#1A4B8C] font-bold text-lg">{item.duration}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#6B7A8D] text-sm mt-6">
            * Timelines are estimates. Actual duration depends on product complexity, factory availability, and shipping method.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A4B8C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-[#93C5FD] text-lg mb-8">
            Submit your sourcing inquiry today and we'll get back to you within 24 hours.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="lg">Get a Free Sourcing Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
