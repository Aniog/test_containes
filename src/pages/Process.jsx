import { Search, PenTool, Factory, ShieldCheck, Ship, HeadphonesIcon } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-white" />,
      title: "1. Initial Consultation",
      desc: "We discuss your product requirements, target price, quality standards, and compliance needs."
    },
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "2. Supplier Search & Shortlisting",
      desc: "Our team searches our extensive network and local platforms to find 3-5 factories that match your criteria."
    },
    {
      icon: <Factory className="h-8 w-8 text-white" />,
      title: "3. Factory Audit & Verification",
      desc: "We visit the shortlisted factories to verify their legitimacy, capacity, and working conditions."
    },
    {
      icon: <PenTool className="h-8 w-8 text-white" />,
      title: "4. Sample Development & Negotiation",
      desc: "We negotiate prices and terms, and oversee the creation of a 'Golden Sample' for your approval."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      title: "5. Production Monitoring & QC",
      desc: "We monitor the production process, and conduct strict pre-shipment inspections to ensure quality."
    },
    {
      icon: <Ship className="h-8 w-8 text-white" />,
      title: "6. Shipping & Delivery",
      desc: "We handle customs clearance, consolidation, and competitive freight forwarding to your destination."
    }
  ]

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">How It Works</h1>
          <p className="text-xl text-slate-600">
            A transparent, step-by-step process designed to eliminate risks and deliver exactly what you ordered.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line connecting steps on md+ screens */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-blue-100 -translate-x-1/2 rounded-full"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-600 items-center justify-center border-4 border-white shadow-md z-10">
                  {step.icon}
                </div>
                
                {/* Content Box */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm relative">
                    <div className="md:hidden w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
