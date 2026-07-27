import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, Search, Handshake, CheckSquare, Truck, MessageSquare } from 'lucide-react'

const HowItWorks = () => {
  return (
    <div className="w-full pb-20">
      <div className="bg-gray-50 py-16 lg:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h1>
          <p className="text-xl text-gray-600">
            A transparent, proven 6-step process to safely source your products from China and deliver them to your door.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 max-w-5xl">
        <div className="relative border-l border-gray-200 ml-4 md:ml-8 space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-8 md:pl-16">
              <div className="absolute -left-6 md:-left-8 top-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-600 border-4 border-white text-white shadow-sm">
                {step.icon}
              </div>
              
              <div className="pt-2">
                <span className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-1 block">Step {index + 1}</span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h2>
                <div className="bg-white border text-gray-700 border-gray-100 rounded-xl p-6 md:p-8 shadow-sm text-lg space-y-4">
                  <p>{step.description}</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to start step 1?</h2>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-md text-lg font-bold bg-blue-600 text-white hover:bg-blue-700 h-14 px-10 shadow-md transition-colors"
        >
          Submit Your Requirements
        </Link>
      </div>
    </div>
  )
}

const steps = [
  {
    title: "Project Assessment & Requirements",
    description: "Everything starts with understanding what you need. You send us your product specifications, target prices, desired order quantities, and any reference images or CAD files.",
    icon: <FileText className="w-5 h-5 md:w-8 md:h-8" />,
    details: [
      "Submit detailed product specifications.",
      "Review target pricing and MoQ constraints.",
      "We provide a free initial feasibility assessment."
    ]
  },
  {
    title: "Supplier Sourcing & Verification",
    description: "Our sourcing team identifies potential manufacturers. We filter out trading companies and verify that the remaining factories have the real capability to produce your product.",
    icon: <Search className="w-5 h-5 md:w-8 md:h-8" />,
    details: [
      "Contact multiple factories within our network and beyond.",
      "Conduct background checks on business licenses.",
      "Provide you with a comparative quote containing the top 2-3 suppliers."
    ]
  },
  {
    title: "Sample Processing",
    description: "Before any mass production begins, we order samples. We can consolidate samples from multiple factories into one box to save you international shipping costs.",
    icon: <CheckSquare className="w-5 h-5 md:w-8 md:h-8" />,
    details: [
      "Request samples from shortlisted suppliers.",
      "Perform local inspection of samples in our office.",
      "Ship the 'Golden Sample' to you for final approval."
    ]
  },
  {
    title: "Order Placement & Contract",
    description: "Once you approve the sample, we help draft a secure Purchase Order and production contract to protect your interests, including penalty clauses for delays or defects.",
    icon: <Handshake className="w-5 h-5 md:w-8 md:h-8" />,
    details: [
      "Finalize pricing and payment terms (usually 30% deposit / 70% balance).",
      "Draft bilingual manufacturing contracts.",
      "Monitor the payment process to avoid scams."
    ]
  },
  {
    title: "Production Follow-up & Quality Control",
    description: "We don't just wait for the factory to finish. We actively monitor production progress and conduct on-site Quality Control inspections according to AQL standards before you pay the balance.",
    icon: <MessageSquare className="w-5 h-5 md:w-8 md:h-8" />,
    details: [
      "Provide weekly production updates and photos.",
      "Conduct Mid-Production and Pre-Shipment Inspections.",
      "Issue a detailed QC report with photos and test results."
    ]
  },
  {
    title: "Logistics & Delivery",
    description: "After the goods pass inspection and the balance is paid, we arrange the most cost-effective shipping method to deliver the products to your designated address.",
    icon: <Truck className="w-5 h-5 md:w-8 md:h-8" />,
    details: [
      "Compare freight quotes for Sea, Air, or Rail transport.",
      "Handle export customs clearance in China.",
      "Provide tracking information until the goods arrive at your door."
    ]
  }
]

export default HowItWorks
