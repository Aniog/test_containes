import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Search, ClipboardCheck, FileCheck, Package, Truck, FileSearch } from "lucide-react"
import Button from "@/components/ui/button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const phases = [
  {
    icon: Search,
    step: "1",
    title: "Discovery & Briefing",
    subtitle: "Understanding your needs",
    items: [
      "Initial consultation to understand your product requirements",
      "Target price, quality standards, and quantity assessment",
      "Timeline and budget discussion",
      "Sourcing strategy proposal and agreement",
      "NDA and IP protection arrangements"
    ],
    imageIndex: 0
  },
  {
    icon: FileSearch,
    step: "2",
    title: "Supplier Research & Matching",
    subtitle: "Finding the right partners",
    items: [
      "Comprehensive search across our supplier network",
      "Capability and capacity pre-screening",
      "Shortlist of 3-5 qualified suppliers",
      "Supplier profiles with detailed background information",
      "Preliminary pricing and MOQ negotiation"
    ],
    imageIndex: 1
  },
  {
    icon: ClipboardCheck,
    step: "3",
    title: "Factory Audit & Sample Verification",
    subtitle: "Validating quality firsthand",
    items: [
      "On-site factory audit with detailed reporting",
      "Production capability and equipment verification",
      "Sample production coordination and review",
      "Quality standards alignment check",
      "Final supplier selection with your approval"
    ],
    imageIndex: 2
  },
  {
    icon: FileCheck,
    step: "4",
    title: "Order Placement & Production",
    subtitle: "Managing the manufacturing process",
    items: [
      "Contract and terms negotiation support",
      "Purchase order management",
      "Production schedule establishment",
      "Regular progress monitoring and reporting",
      "Raw material quality verification"
    ],
    imageIndex: 3
  },
  {
    icon: Package,
    step: "5",
    title: "Quality Control & Inspection",
    subtitle: "Ensuring product quality",
    items: [
      "During-production inspection (DUPRO)",
      "Pre-shipment inspection (PSI) with AQL standards",
      "Packaging and labeling verification",
      "Defect identification and remediation coordination",
      "Final quality approval before shipment"
    ],
    imageIndex: 4
  },
  {
    icon: Truck,
    step: "6",
    title: "Shipping & Delivery",
    subtitle: "Getting your products to you",
    items: [
      "Freight booking and container loading",
      "Export documentation and customs clearance",
      "Cargo insurance arrangement",
      "Real-time shipment tracking",
      "Delivery confirmation and post-delivery support"
    ],
    imageIndex: 5
  }
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-300 font-semibold text-sm uppercase tracking-widest mb-4">How It Works</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Our Sourcing Process
            </h1>
            <p className="text-lg text-surface-300 leading-relaxed">
              A transparent, structured approach that takes you from product concept to delivered goods with full visibility at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20">
            {phases.map((phase, i) => (
              <div key={phase.step} className="relative">
                {/* Connector line */}
                {i < phases.length - 1 && (
                  <div className="hidden md:block absolute left-6 top-12 bottom-0 w-0.5 bg-surface-200" />
                )}

                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{phase.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <phase.icon className="w-5 h-5 text-brand-500" />
                      <p className="text-sm text-brand-500 font-semibold uppercase tracking-wider">{phase.subtitle}</p>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">{phase.title}</h2>

                    {/* Image placeholder */}
                    <div
                      data-strk-bg-id={`process-img-${i}`}
                      data-strk-bg={`[process-title-${i}]`}
                      data-strk-bg-ratio="16x9"
                      data-strk-bg-width="800"
                      className="w-full h-48 md:h-56 rounded-xl bg-brand-100 mb-6"
                    />

                    <ul className="grid sm:grid-cols-2 gap-3">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-surface-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0 mt-2" />
                          <span>{item}</span>
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
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-brand-300 mb-8">
            Contact us today and we'll guide you through the process step by step.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg">
              Get a Free Sourcing Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}