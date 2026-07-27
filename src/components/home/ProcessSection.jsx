import { MessageSquare, Search, FileCheck, Boxes, Ship, Handshake } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Tell Us Your Needs',
    description: 'Share your product requirements, target price, quantity, and any specific standards or certifications needed.',
  },
  {
    icon: Search,
    number: '02',
    title: 'We Find Suppliers',
    description: 'Our team researches and shortlists 3-5 qualified suppliers from our verified network that match your criteria.',
  },
  {
    icon: FileCheck,
    number: '03',
    title: 'Verify & Quote',
    description: 'We verify factory credentials, request samples, and negotiate pricing to get you the best quote.',
  },
  {
    icon: Boxes,
    number: '04',
    title: 'Quality Control',
    description: 'Our inspectors visit the factory during production and before shipment to ensure quality standards are met.',
  },
  {
    icon: Ship,
    number: '05',
    title: 'Ship & Deliver',
    description: 'We coordinate freight forwarding, handle customs documentation, and track your shipment until delivery.',
  },
  {
    icon: Handshake,
    number: '06',
    title: 'Ongoing Support',
    description: 'We stay available for reorders, supplier relationship management, and continuous improvement.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            How Our Sourcing Process Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A transparent, step-by-step process designed to minimize risk and maximize results for your sourcing projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-3xl font-bold text-gray-200">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
