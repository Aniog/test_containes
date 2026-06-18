import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Search, FileText, Factory, ClipboardCheck, Package, Truck, CheckCircle, MessageCircle, Calendar, CreditCard } from 'lucide-react'

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Initial Consultation",
    description: "We start with a detailed discussion to understand your product requirements, quality standards, target pricing, quantity, and delivery timeline.",
    details: [
      "Product specifications review",
      "Quality requirements discussion",
      "Target price range",
      "Delivery schedule"
    ]
  },
  {
    number: "02",
    icon: Search,
    title: "Supplier Identification",
    description: "Based on your requirements, we search our verified supplier database and conduct market research to identify suitable manufacturers.",
    details: [
      "Supplier database search",
      "Capability matching",
      "Price comparison",
      "Initial supplier shortlist"
    ]
  },
  {
    number: "03",
    icon: FileText,
    title: "Factory Verification",
    description: "We conduct comprehensive on-site factory audits to verify legitimacy, assess production capacity, and evaluate quality systems.",
    details: [
      "Business license verification",
      "Production facility inspection",
      "Quality management assessment",
      "Financial stability check"
    ]
  },
  {
    number: "04",
    icon: Factory,
    title: "Sample Evaluation",
    description: "We coordinate sample production, arrange shipping, and help you evaluate samples to ensure they meet your specifications.",
    details: [
      "Sample request coordination",
      "Quality evaluation",
      "Feedback compilation",
      "Mass production approval"
    ]
  },
  {
    number: "05",
    icon: ClipboardCheck,
    title: "Production Follow-up",
    description: "During manufacturing, we conduct regular factory visits to monitor progress, identify issues, and ensure quality consistency.",
    details: [
      "Weekly progress updates",
      "Production milestone tracking",
      "Quality monitoring",
      "Issue resolution"
    ]
  },
  {
    number: "06",
    icon: Package,
    title: "Quality Inspection",
    description: "Before shipment, our QC team performs comprehensive inspections to verify products meet all specifications and quality standards.",
    details: [
      "Pre-shipment inspection",
      "AQL sampling",
      "Specification verification",
      "Packaging check"
    ]
  },
  {
    number: "07",
    icon: Truck,
    title: "Shipping & Delivery",
    description: "We coordinate the entire logistics process from factory to your designated location, including freight forwarding and customs clearance.",
    details: [
      "Freight coordination",
      "Customs documentation",
      "Container tracking",
      "Door-to-door delivery"
    ]
  }
]

const timeline = [
  { phase: "Consultation & Planning", duration: "1-2 days" },
  { phase: "Supplier Search", duration: "1-2 weeks" },
  { phase: "Factory Verification", duration: "1 week" },
  { phase: "Sample Production & Approval", duration: "2-4 weeks" },
  { phase: "Production", duration: "2-8 weeks" },
  { phase: "Inspection & Shipping", duration: "1-2 weeks" }
]

const HowItWorks = () => {
  return (
    <div>
      <Helmet>
        <title>How It Works | China Sourcing Process | SSourcing China</title>
        <meta name="description" content="Learn about our step-by-step China sourcing process. From supplier identification to shipping, we guide you through every stage." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              How It Works
            </h1>
            <p className="text-lg text-slate-600">
              Our systematic approach ensures a smooth sourcing experience from start to finish. Here's what to expect when you work with us.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 lg:items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <span className="text-4xl font-bold text-blue-100">{step.number}</span>
                      <h3 className="text-2xl font-semibold text-slate-900 mt-2">{step.title}</h3>
                      <p className="text-slate-600 mt-3">{step.description}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h4 className="font-semibold text-slate-900 mb-4">What we do:</h4>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600">{detail}</span>
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

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-lg text-slate-600">
              While timelines vary based on product complexity, here's a general overview
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center justify-between p-6 ${index !== timeline.length - 1 ? 'border-b border-slate-100' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600">
                      {index + 1}
                    </div>
                    <span className="font-medium text-slate-900">{item.phase}</span>
                  </div>
                  <span className="text-slate-500">{item.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Start Your Sourcing Journey
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to find reliable suppliers in China? Contact us today for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks