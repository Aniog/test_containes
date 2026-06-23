import { ClipboardCheck, Search, Handshake, Box, CheckCircle, Plane } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      name: '1. Tell Us What You Need',
      description: 'Submit an inquiry with your product specifications, target price, quality requirements, and order volume. The more details you provide, the better we can match you with the right supplier.',
      icon: ClipboardCheck,
    },
    {
      name: '2. We Source & Shortlist',
      description: 'Our team leverages our extensive network to find 3-5 suitable manufacturers. We verify their credentials, assess their capabilities, and get preliminary quotes.',
      icon: Search,
    },
    {
      name: '3. Sample Evaluation',
      description: 'We collect samples from the shortlisted factories, inspect them locally, and consolidate them into one package to send to you. This saves you significant international shipping costs.',
      icon: Box,
    },
    {
      name: '4. Negotiation & Contracting',
      description: 'Once you approve a sample, we negotiate the final price, minimum order quantity (MOQ), and lead times. We then draft a legally binding contract in both English and Chinese.',
      icon: Handshake,
    },
    {
      name: '5. Production & Quality Control',
      description: 'As mass production begins, we monitor the progress. We conduct regular inspections (pre-production, in-line, and pre-shipment) to ensure everything meets your standards before balance payment.',
      icon: CheckCircle,
    },
    {
      name: '6. Shipping & Delivery',
      description: 'After final inspection approval, we arrange logistics. Whether you need sea freight, air freight, or express courier to Amazon FBA or your warehouse, we handle the customs and delivery.',
      icon: Plane,
    },
  ]

  return (
    <div className="bg-white">
      <div className="bg-blue-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">How It Works</h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              A transparent, proven 6-step process to source products safely and efficiently from China.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {steps.map((step, index) => (
                <div key={step.name} className="flex flex-col relative pl-16">
                  <dt className="text-xl font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    {step.name.substring(3)} {/* Remove the "1. " part as we have the number icon */}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{step.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}