import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Search, Shield, Eye, ClipboardCheck, Package, Truck, FileCheck, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: "Supplier Identification & Matching",
    description: "We find and match you with verified manufacturers based on your specific product requirements, quality standards, and budget.",
    features: [
      "Comprehensive supplier database",
      "Customized supplier matching",
      "Capability assessment",
      "Price negotiation support"
    ]
  },
  {
    icon: Shield,
    title: "Factory Verification & Audits",
    description: "Our on-site factory verification services ensure you work with legitimate, capable manufacturers.",
    features: [
      "Business license verification",
      "Production capacity assessment",
      "Quality management system review",
      "Financial stability check",
      "Detailed audit reports with photos"
    ]
  },
  {
    icon: Eye,
    title: "Quality Inspection",
    description: "Professional quality control inspections at any stage of production to ensure your products meet specifications.",
    features: [
      "Pre-shipment inspections",
      "During production inspections",
      "Container loading supervision",
      "AQL-based sampling",
      "Detailed photo reports"
    ]
  },
  {
    icon: ClipboardCheck,
    title: "Production Monitoring",
    description: "Regular factory visits during production to ensure timeline adherence and quality consistency.",
    features: [
      "Weekly progress updates",
      "Production milestone tracking",
      "Quality issue identification",
      "Timeline management"
    ]
  },
  {
    icon: Package,
    title: "Sample Management",
    description: "We coordinate sample requests, evaluate quality, and manage the approval process for mass production.",
    features: [
      "Sample sourcing coordination",
      "Quality evaluation",
      "Shipping arrangement",
      "Approval documentation"
    ]
  },
  {
    icon: Truck,
    title: "Shipping & Logistics",
    description: "End-to-end logistics coordination from factory to your designated delivery location.",
    features: [
      "Freight forwarding",
      "Customs clearance",
      "Documentation handling",
      "Door-to-door delivery"
    ]
  }
]

const processSteps = [
  {
    step: "01",
    title: "Requirements Analysis",
    description: "We discuss your product specifications, quality requirements, target prices, and delivery timeline."
  },
  {
    step: "02",
    title: "Supplier Search",
    description: "We identify and evaluate potential manufacturers from our verified database and market research."
  },
  {
    step: "03",
    title: "Factory Verification",
    description: "We conduct on-site audits to verify factory legitimacy, capabilities, and quality systems."
  },
  {
    step: "04",
    title: "Sample Evaluation",
    description: "We coordinate samples, evaluate quality, and facilitate your approval for mass production."
  },
  {
    step: "05",
    title: "Production Follow-up",
    description: "We monitor production progress and quality throughout the manufacturing process."
  },
  {
    step: "06",
    title: "Quality Inspection",
    description: "Final inspection ensures products meet specifications before shipment."
  },
  {
    step: "07",
    title: "Shipping & Delivery",
    description: "We coordinate logistics and ensure smooth customs clearance and delivery."
  }
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Cost Savings",
    description: "Access competitive pricing through our established supplier relationships and negotiation expertise."
  },
  {
    icon: Clock,
    title: "Time Efficiency",
    description: "Save time with our local presence and streamlined sourcing process."
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Reduce risks with verified suppliers and professional quality control."
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "Benefit from our team's deep knowledge of Chinese business practices and manufacturing."
  }
]

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Sourcing Services | China Supplier Verification, QC & Shipping | SSourcing China</title>
        <meta name="description" content="Professional China sourcing services including supplier verification, quality inspection, production monitoring, and shipping coordination." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-lg text-slate-600">
              Comprehensive China sourcing solutions to help you find verified suppliers, ensure quality, and streamline your supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
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

      {/* Process Steps */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Sourcing Process
            </h2>
            <p className="text-lg text-slate-600">
              A systematic approach to ensure successful sourcing from China
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <span className="text-4xl font-bold text-blue-100">{item.step}</span>
                <h3 className="text-lg font-semibold text-slate-900 mt-3 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-slate-600">
              Partner with a team that understands the complexities of China sourcing
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your sourcing needs. We'll help you find the right suppliers in China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services