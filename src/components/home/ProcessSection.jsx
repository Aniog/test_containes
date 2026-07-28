import { MessageSquare, Search, Building2, ClipboardCheck, Package, Ship } from 'lucide-react'

const steps = [
  { icon: MessageSquare, step: '01', title: 'Submit Your Request', description: 'Tell us what you need — product details, quantity, target price, and timeline.' },
  { icon: Search, step: '02', title: 'Supplier Matching', description: 'We research and shortlist verified manufacturers that match your requirements.' },
  { icon: Building2, step: '03', title: 'Factory Verification', description: 'We visit factories to confirm credentials, capacity, and quality systems.' },
  { icon: ClipboardCheck, step: '04', title: 'Sample & Order', description: 'We coordinate samples, negotiate terms, and manage your production order.' },
  { icon: Package, step: '05', title: 'Quality Inspection', description: 'Our inspectors check your goods before shipment to ensure they meet your standards.' },
  { icon: Ship, step: '06', title: 'Shipping & Delivery', description: 'We arrange freight, handle documentation, and track your shipment to destination.' },
]

export default function ProcessSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-blue-800 font-semibold text-sm uppercase tracking-wide">Our Process</span>
          <h2 className="heading-2 mt-2 mb-4">How We Source for You</h2>
          <p className="body-text max-w-2xl mx-auto">
            A clear, step-by-step process that keeps you informed and in control at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item) => (
            <div key={item.step} className="relative">
              <div className="card">
                <span className="text-5xl font-bold text-blue-100 absolute top-4 right-4">{item.step}</span>
                <div className="relative">
                  <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="heading-3 mb-2">{item.title}</h3>
                  <p className="body-text text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
