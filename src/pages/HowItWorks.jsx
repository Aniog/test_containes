import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { ArrowRight, FileText, Search, ClipboardList, Truck, MessageCircle } from "lucide-react"

const steps = [
  {
    num: "01",
    title: "Submit Your Request",
    desc: "Fill out our inquiry form with your product details, target price, quantity, and any specific requirements. The more detail you provide, the better we can match you.",
    icon: FileText,
    details: [
      "Product name and specifications",
      "Target price range and MOQ",
      "Packaging and labeling requirements",
      "Certifications needed (CE, FDA, etc.)",
    ],
  },
  {
    num: "02",
    title: "We Source & Verify",
    desc: "Our team identifies 3–5 qualified suppliers and conducts factory verification on your behalf. You receive a comparison report with pricing, lead times, and audit results.",
    icon: Search,
    details: [
      "Factory capability assessment",
      "On-site or remote verification",
      "Quotation comparison matrix",
      "Sample coordination",
    ],
  },
  {
    num: "03",
    title: "You Review & Confirm",
    desc: "Review the supplier options and choose the best fit. We help you negotiate terms, structure the contract, and set up a secure payment process.",
    icon: ClipboardList,
    details: [
      "Contract term review",
      "Price negotiation support",
      "Payment term structuring",
      "Order confirmation and deposit",
    ],
  },
  {
    num: "04",
    title: "Production & QC",
    desc: "We monitor production, conduct quality inspections, and provide weekly updates. Any issues are flagged and resolved before shipment.",
    icon: MessageCircle,
    details: [
      "Weekly production reports",
      "Inline and pre-shipment inspections",
      "Defect tracking and rework coordination",
      "Packaging and labeling verification",
    ],
  },
  {
    num: "05",
    title: "Shipping & Delivery",
    desc: "We coordinate freight booking, prepare export documentation, and track your shipment until it reaches your warehouse.",
    icon: Truck,
    details: [
      "Freight forwarding and booking",
      "Customs documentation",
      "Delivery tracking",
      "Post-delivery support",
    ],
  },
]

export default function HowItWorks() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#f0f4f8] via-white to-[#f6f8fb] py-16 md:py-24">
        <div className="container-main text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Process
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-text-primary">
            How It Works
          </h1>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            A transparent 5-step process designed to minimize risk and keep you in control at every stage.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="relative flex gap-6 md:gap-10">
                <div className="hidden md:flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow">
                    <step.icon className="h-6 w-6" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="mt-4 h-full w-0.5 bg-primary/20" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-primary">{step.num}</span>
                    <h3 className="text-xl font-semibold text-text-primary">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-text-secondary leading-relaxed">{step.desc}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {step.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container-main text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-text-primary">Ready to Start?</h2>
          <p className="mt-4 text-text-secondary">
            Submit your inquiry today and receive an initial assessment within 24 hours.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link to="/contact">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
