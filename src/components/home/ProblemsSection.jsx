import React from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, DollarSign, Clock, Shield, MessageCircle, FileCheck } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Scam Suppliers',
    description: 'Pay deposits and never receive goods, or receive products that don\'t match the sample quality.',
    solution: 'We verify suppliers on-site, check business licenses, and confirm factory capabilities before you commit.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Unexpected fees for tooling, samples, shipping, or MOQ adjustments that blow your budget.',
    solution: 'We provide detailed cost breakdowns upfront and monitor all expenditures throughout production.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    description: 'Missed deadlines, delayed shipments, and no visibility into production progress.',
    solution: 'Weekly factory visits and real-time progress reports keep you informed and on schedule.',
  },
  {
    icon: Shield,
    title: 'Quality Issues',
    description: 'Products arrive damaged, defective, or not matching specifications.',
    solution: 'Multi-stage inspections (pre-production, during production, pre-shipment) ensure quality compliance.',
  },
  {
    icon: MessageCircle,
    title: 'Communication Barriers',
    description: 'Language barriers and time zone differences make coordination difficult.',
    solution: 'Our bilingual team bridges the gap with clear communication in your timezone.',
  },
  {
    icon: FileCheck,
    title: 'Documentation Hassles',
    description: 'Complex paperwork for customs, certifications, and shipping that slows everything down.',
    solution: 'We handle all documentation, certifications, and compliance requirements for smooth clearance.',
  },
]

const ProblemsSection = () => {
  return (
    <section className="py-20 bg-primary text-white" id="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Problems We Solve"
          subtitle="Sourcing from China comes with challenges. We help you navigate them."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{problem.title}</h3>
              <p className="text-slate-300 text-sm mb-4">{problem.description}</p>
              <div className="pt-4 border-t border-white/20">
                <p className="text-sm">
                  <span className="text-secondary font-semibold">Our solution:</span> {problem.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Get a Free Sourcing Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection