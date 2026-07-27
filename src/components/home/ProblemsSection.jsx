import SectionHeader from '../shared/SectionHeader'
import {
  AlertTriangle, DollarSign, Globe, Shield, Clock, MessageCircle
} from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    problem: 'Unreliable Suppliers',
    solution: 'We verify every supplier with on-site factory visits, license checks, and production audits before you place an order.',
  },
  {
    icon: DollarSign,
    problem: 'Hidden Costs & Overpricing',
    solution: 'We negotiate directly with factories and provide transparent cost breakdowns — no middleman markups or surprise fees.',
  },
  {
    icon: Globe,
    problem: 'Language & Cultural Barriers',
    solution: 'Our bilingual team handles all communication in Mandarin and English, eliminating miscommunication and delays.',
  },
  {
    icon: Shield,
    problem: 'Quality Issues & Defects',
    solution: 'Multi-stage QC inspections catch defects before shipping. We check samples, in-line production, and finished goods.',
  },
  {
    icon: Clock,
    problem: 'Production Delays',
    solution: 'We track every production milestone and escalate immediately when timelines slip, keeping your supply chain on schedule.',
  },
  {
    icon: MessageCircle,
    problem: 'No Visibility Into the Process',
    solution: 'Regular photo/video updates, inspection reports, and a dedicated project manager keep you informed every step of the way.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="section-padding bg-steel-50">
      <div className="container-wide mx-auto">
        <SectionHeader
          tag="Why SSourcing"
          title="Problems We Solve"
          subtitle="Sourcing from China comes with real challenges. We have built our process specifically to address each one."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.problem} className="card-base card-hover">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="heading-card text-base pt-1.5">{item.problem}</h3>
                </div>
                <p className="text-body text-sm pl-14">{item.solution}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
