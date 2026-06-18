import { AlertTriangle, Clock, DollarSign, Search, ShieldOff, FileX } from 'lucide-react'
import SectionHeader from '../shared/SectionHeader'

const problems = [
  {
    icon: ShieldOff,
    problem: 'Unreliable Suppliers',
    solution: 'We audit every factory before recommending them — checking licenses, capacity, and track record.',
  },
  {
    icon: AlertTriangle,
    problem: 'Poor Product Quality',
    solution: 'Our QC inspectors check goods before shipment, so defective products never reach your warehouse.',
  },
  {
    icon: Clock,
    problem: 'Missed Deadlines',
    solution: 'We follow up with factories weekly and flag delays early, keeping your production on schedule.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying for Products',
    solution: 'We negotiate directly with factories in Chinese, leveraging our relationships to get you fair prices.',
  },
  {
    icon: Search,
    problem: 'No Visibility into Production',
    solution: 'Regular factory visits and photo/video updates keep you informed at every production stage.',
  },
  {
    icon: FileX,
    problem: 'Customs & Shipping Confusion',
    solution: 'We handle all freight, documentation, and customs clearance so your goods arrive without delays.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#1A3C6E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why Work With Us"
          title="Common Sourcing Problems We Solve"
          subtitle="Importing from China comes with real risks. Here's how we protect your business at every step."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, problem, solution }) => (
            <div key={problem} className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors duration-200">
              <div className="w-10 h-10 bg-[#C0392B]/20 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-[#C0392B]" />
              </div>
              <h3 className="text-white font-semibold mb-2">{problem}</h3>
              <p className="text-[#CBD5E0] text-sm leading-relaxed">{solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
