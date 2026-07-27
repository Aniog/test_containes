import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Mail, Search, FileText, PackageCheck, Ship, Flag } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      id: "step-1",
      number: "01",
      title: "Tell Us What You Need",
      description: "Submit an inquiry with detailed product specifications, target pricing, quantities, and any specific requirements. The more details you provide, the better we can match you with the right supplier.",
      icon: Mail,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: "step-2",
      number: "02",
      title: "Supplier Matching & Quoting",
      description: "We reach out to our network of verified factories and also search for new ones. We negotiate prices, request samples if needed, and provide you with a comprehensive quote including product costs and estimated shipping.",
      icon: Search,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      id: "step-3",
      number: "03",
      title: "Sample Approval & Order Placement",
      description: "Once you approve the pricing, we order samples for your physical review. After any necessary revisions are finalized, we draft the formal purchase agreement with the factory to protect your interests, and you place the deposit.",
      icon: FileText,
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: "step-4",
      number: "04",
      title: "Production Follow-up & Quality Control",
      description: "While production is underway, our team stays in constant contact with the factory to ensure timelines are met. Before the goods leave the factory, our inspectors perform a rigorous AQL quality check and send you a detailed report.",
      icon: PackageCheck,
      color: "bg-pink-100 text-pink-600"
    },
    {
      id: "step-5",
      number: "05",
      title: "Shipping & Customs Clearance",
      description: "After you approve the inspection report and pay the balance, we arrange the most efficient logistics—sea, air, or rail. We handle all Chinese export customs and prepare the documents you need for import clearance.",
      icon: Ship,
      color: "bg-rose-100 text-rose-600"
    },
    {
      id: "step-6",
      number: "06",
      title: "Safe Delivery",
      description: "Your goods arrive safely at your warehouse, Amazon FBA center, or direct to your door. Our support doesn't end here; we are always ready to assist with your next order or any after-sales issues.",
      icon: Flag,
      color: "bg-green-100 text-green-600"
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How Our Sourcing Process Works</h1>
          <p className="text-xl text-slate-300">
            A simple, transparent, and risk-free 6-step process to source products from China reliably.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="py-24 bg-white relative">
        {/* Vertical Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 !== 0;
              return (
                <div key={step.id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow relative">
                      {/* Desktop connector arrow */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 border-t-2 border-slate-200 w-8 ${isEven ? '-left-8' : '-right-8'}`}></div>
                      
                      <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 ${isEven ? '' : 'md:ml-auto'}`}>
                        <step.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Center Number Circle */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-600 text-white rounded-full items-center justify-center text-xl font-bold border-4 border-white shadow-md">
                    {step.number}
                  </div>
                  
                  {/* Empty Spacer */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Start Step 1?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Send us your product requirements today and get a free sourcing assessment within 48 hours.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6" asChild>
            <Link to="/contact">Submit Your Inquiry</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}