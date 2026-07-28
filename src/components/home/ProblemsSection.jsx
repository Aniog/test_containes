import { AlertTriangle, XCircle, HelpCircle, Shield } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    problem: 'Unreliable Suppliers',
    description: 'Finding trustworthy manufacturers is difficult. Many suppliers online exaggerate their capabilities or are trading companies posing as factories.',
    solution: 'We verify every supplier with on-site visits, license checks, and production capacity assessments.',
  },
  {
    icon: XCircle,
    problem: 'Quality Issues',
    description: 'Without proper inspection, defective products can reach your warehouse — leading to returns, refunds, and damaged reputation.',
    solution: 'Our QC team conducts inspections at every stage: pre-production, during production, and pre-shipment.',
  },
  {
    icon: HelpCircle,
    problem: 'Communication Barriers',
    description: 'Language differences, time zones, and cultural gaps can lead to misunderstandings and costly mistakes.',
    solution: 'Our bilingual team acts as your local representative, ensuring clear communication with suppliers.',
  },
  {
    icon: Shield,
    problem: 'Shipping Complexity',
    description: 'International logistics involve documentation, customs, freight forwarding, and compliance — easy to get wrong.',
    solution: 'We handle shipping coordination, documentation, and customs clearance so you receive goods hassle-free.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-blue-800 font-semibold text-sm uppercase tracking-wide">Why Work With Us</span>
          <h2 className="heading-2 mt-2 mb-4">Problems We Solve for Buyers</h2>
          <p className="body-text max-w-2xl mx-auto">
            Sourcing from China comes with real challenges. We address each one with practical, proven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((item) => (
            <div key={item.problem} className="card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="heading-3 mb-2">{item.problem}</h3>
                  <p className="body-text text-sm mb-3">{item.description}</p>
                  <div className="bg-green-50 border border-green-200 rounded-md p-3">
                    <p className="text-green-800 text-sm font-medium">
                      Our approach: {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
