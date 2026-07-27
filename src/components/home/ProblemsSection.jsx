import { AlertTriangle, Shield, Clock, DollarSign, CheckCircle } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    problem: 'Unreliable Suppliers',
    description: 'Many buyers struggle to verify whether a supplier is a real factory or a trading company, and whether they can deliver on quality and timeline.',
    solution: 'We conduct on-site factory audits, verify business licenses, and only work with manufacturers we have personally vetted.',
  },
  {
    icon: Shield,
    problem: 'Quality Issues',
    description: 'Without proper inspection, products may arrive with defects, wrong specifications, or substandard materials — leading to costly returns.',
    solution: 'Our QC team performs pre-production, during-production, and pre-shipment inspections with detailed photo reports.',
  },
  {
    icon: Clock,
    problem: 'Communication Barriers',
    description: 'Language differences, time zones, and cultural gaps can cause misunderstandings and delays in production.',
    solution: 'Our English-speaking team acts as your local representative, handling all communication with suppliers in China.',
  },
  {
    icon: DollarSign,
    problem: 'Hidden Costs',
    description: 'Unexpected fees for sampling, shipping, customs, and quality issues can quickly inflate your total cost.',
    solution: 'We provide transparent pricing and help you understand all costs upfront — no surprises.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Problems We Solve</h2>
          <p className="text-muted-foreground text-lg">
            Sourcing from China can be risky. We address the most common challenges that overseas buyers face.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((item) => (
            <div
              key={item.problem}
              className="bg-white rounded-xl p-6 shadow-sm border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.problem}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.description}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-700 mb-1">Our Solution</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.solution}</p>
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
