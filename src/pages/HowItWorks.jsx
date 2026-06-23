import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  MessageSquare, 
  Search, 
  Shield, 
  FlaskConical, 
  Factory, 
  Truck,
  Clock,
  DollarSign,
  Star,
  Phone,
  Mail
} from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Initial Consultation",
      description: "We start by understanding your specific requirements, including product specifications, quality standards, target prices, quantity, and delivery timelines.",
      details: [
        "Product requirements discussion",
        "Quality standards clarification",
        "Target price range definition",
        "Delivery timeline establishment"
      ]
    },
    {
      number: "02",
      icon: Search,
      title: "Supplier Identification",
      description: "Based on your requirements, we search our extensive database and conduct market research to identify potential manufacturers that match your criteria.",
      details: [
        "Supplier database search",
        "Market research and analysis",
        "Initial supplier shortlisting",
        "Capability assessment"
      ]
    },
    {
      number: "03",
      icon: Shield,
      title: "Factory Verification",
      description: "We conduct comprehensive audits to verify the legitimacy, capabilities, and reliability of shortlisted factories before you make any commitment.",
      details: [
        "Business license verification",
        "Production capacity assessment",
        "Quality system evaluation",
        "Financial stability check"
      ]
    },
    {
      number: "04",
      icon: FlaskConical,
      title: "Sample Evaluation",
      description: "We coordinate with the selected factory to produce samples and conduct detailed evaluation against your specifications.",
      details: [
        "Sample request coordination",
        "Quality and specification review",
        "Feedback and refinement",
        "Final sample approval"
      ]
    },
    {
      number: "05",
      icon: Factory,
      title: "Production Monitoring",
      description: "During production, we perform regular factory visits and quality checks to ensure everything stays on track and meets your standards.",
      details: [
        "Production progress tracking",
        "Quality inspections during production",
        "Issue identification and resolution",
        "Timeline management"
      ]
    },
    {
      number: "06",
      icon: Truck,
      title: "Shipping & Delivery",
      description: "We coordinate the entire logistics process, from factory pickup to final delivery at your specified location.",
      details: [
        "Pre-shipment inspection",
        "Freight coordination",
        "Customs documentation",
        "Door-to-door delivery"
      ]
    }
  ];

  const timeline = [
    { stage: "Consultation", duration: "1-2 days" },
    { stage: "Supplier Search", duration: "1-2 weeks" },
    { stage: "Factory Verification", duration: "1-2 weeks" },
    { stage: "Sample Approval", duration: "2-4 weeks" },
    { stage: "Production", duration: "4-8 weeks" },
    { stage: "Shipping", duration: "2-4 weeks" }
  ];

  const benefits = [
    {
      title: "Risk Reduction",
      description: "Minimize risks associated with unknown suppliers through thorough verification and quality control."
    },
    {
      title: "Cost Efficiency",
      description: "Leverage our local expertise and supplier relationships to negotiate better prices."
    },
    {
      title: "Quality Assurance",
      description: "Ensure consistent product quality through inspections at every production stage."
    },
    {
      title: "Time Savings",
      description: "Save time on supplier research, communication, and logistics coordination."
    },
    {
      title: "Cultural Bridge",
      description: "Navigate language and cultural barriers with our bilingual team in China."
    },
    {
      title: "End-to-End Support",
      description: "Get comprehensive support from supplier identification to final delivery."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              How It Works
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Our systematic approach ensures smooth, reliable sourcing from China. From initial consultation to final delivery, we guide you through every step.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl font-bold text-blue-100">{step.number}</div>
                    <div>
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                        <step.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h4 className="font-medium text-slate-900 mb-4">What happens in this stage:</h4>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-lg text-slate-600">
              Estimated duration for each stage of the sourcing process
            </p>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-6 gap-4">
                {timeline.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-sm font-medium text-slate-900 mb-1">{item.stage}</div>
                      <div className="text-xs text-slate-500">{item.duration}</div>
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="hidden sm:flex justify-center mt-2">
                        <ArrowRight className="w-4 h-4 text-slate-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            * Timeline varies based on product complexity and supplier availability
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The advantages of partnering with SSourcing China for your sourcing needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Contact us today for a free consultation. We'll help you find the right suppliers in China.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white rounded-lg hover:bg-slate-100 transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="mailto:info@ssourcingchina.com"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;