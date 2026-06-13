import { Link } from 'react-router-dom'
import {
  MessageCircle, Search, Package, Factory, Eye, Truck,
  ArrowRight, CheckCircle2, Clock, FileText, PhoneCall, Globe
} from 'lucide-react'
import CTABanner from '../components/CTABanner'

const steps = [
  {
    icon: MessageCircle,
    num: '01',
    title: 'Submit Your Requirements',
    desc: 'Start by telling us what you need. Share product specifications, target pricing, order quantity, quality standards, and delivery timeline through our simple inquiry form.',
    details: ['Free initial consultation', 'No commitment required', 'Confidential handling of all information', 'Response within 24 hours'],
  },
  {
    icon: Search,
    num: '02',
    title: 'Supplier Research & Matching',
    desc: 'Our sourcing team identifies and shortlists qualified suppliers from our verified factory network. We collect competitive quotes and present you with the best options.',
    details: ['Multiple supplier comparison', 'Price benchmarking against market rates', 'Initial factory capability assessment', '3-5 business day turnaround'],
  },
  {
    icon: Package,
    num: '03',
    title: 'Sample Coordination & Approval',
    desc: 'We coordinate product samples from shortlisted suppliers, document specifications, and manage the revision process until you are satisfied with the quality.',
    details: ['Samples from multiple suppliers', 'Detailed specification documentation', 'Revision management and tracking', 'Quality comparison reports'],
  },
  {
    icon: Factory,
    num: '04',
    title: 'Order Placement & Production',
    desc: 'Once you approve samples and pricing, we place the order with your chosen supplier. We establish clear milestones and begin monitoring production from day one.',
    details: ['Clear contract and terms', 'Milestone-based production schedule', 'Weekly status updates', 'Issue escalation and resolution'],
  },
  {
    icon: Eye,
    num: '05',
    title: 'Quality Inspection',
    desc: 'Our QC team conducts inspections at critical stages of production using AQL standards. We check materials, in-process goods, and finished products before they leave the factory.',
    details: ['Pre-production inspection', 'During-production (DUPRO) check', 'Pre-shipment inspection (PSI)', 'Detailed photo reports'],
  },
  {
    icon: Truck,
    num: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate all logistics including packaging, freight forwarding, customs documentation, and door-to-door delivery to ensure your products arrive safely and on time.',
    details: ['Sea, air, and rail freight options', 'Customs clearance handled', 'Cargo insurance coordination', 'Door-to-door delivery tracking'],
  },
]

const timeline = [
  { week: 'Week 1', activity: 'Requirements gathering and supplier research' },
  { week: 'Week 2-3', activity: 'Supplier shortlisting, quotes, and sample ordering' },
  { week: 'Week 3-5', activity: 'Sample review, revisions, and approval' },
  { week: 'Week 5-6', activity: 'Order placement and production planning' },
  { week: 'Week 6-12', activity: 'Production monitoring and quality inspections' },
  { week: 'Week 12-14', activity: 'Final inspection, shipping, and delivery' },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F172A] to-[#1B4D8E] py-20 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm text-blue-200 font-medium mb-4">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">How It Works</h1>
          <p className="text-lg text-gray-300 max-w-[600px] mx-auto">
            A clear, structured process from initial inquiry to product delivery. Here is exactly how we help you source from China.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-6 md:gap-8 items-start">
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-14 h-14 bg-[#1B4D8E] text-white rounded-full flex items-center justify-center text-lg font-extrabold shadow-lg">
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-full min-h-[40px] bg-[#1B4D8E]/20 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="w-6 h-6 text-[#F59E0B]" />
                    <h3 className="text-xl font-bold text-[#0F172A]">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map(d => (
                      <div key={d} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">Typical Timeline</h2>
            <p className="text-lg text-gray-500">A general overview of how long each phase takes</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {timeline.map((item, i) => (
              <div key={item.week} className={`flex items-center gap-6 px-6 py-5 ${i < timeline.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <div className="w-24 shrink-0">
                  <span className="text-sm font-bold text-[#1B4D8E]">{item.week}</span>
                </div>
                <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                <span className="text-sm text-gray-600">{item.activity}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-4">
            Timelines are approximate and vary depending on product complexity and order size.
          </p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">Our Commitment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: 'Local Expertise', desc: 'Our team is based in Shenzhen with deep knowledge of Chinese manufacturing, language, and business culture.' },
              { icon: FileText, title: 'Full Transparency', desc: 'Detailed reports at every stage, from supplier research to final shipping. No hidden costs or surprises.' },
              { icon: PhoneCall, title: 'Dedicated Support', desc: 'A dedicated account manager for your project with responsive communication in your time zone.' },
            ].map(item => (
              <div key={item.title} className="text-center p-8 rounded-xl bg-[#F8FAFC] border border-gray-100">
                <item.icon className="w-10 h-10 text-[#1B4D8E] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Start Sourcing?" subtitle="Submit your product requirements and receive competitive quotes within 3-5 business days." />
    </div>
  )
}
