import React from 'react'
import { Award, Users, Building, FileCheck, Clock, Headphones } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const trustPoints = [
  {
    icon: Building,
    number: '500+',
    label: 'Verified Suppliers',
    description: 'Pre-screened factories in our network across all major manufacturing regions.',
  },
  {
    icon: FileCheck,
    number: '10,000+',
    label: 'Inspections Completed',
    description: 'Thorough quality checks at every stage of production.',
  },
  {
    icon: Users,
    number: '500+',
    label: 'Happy Clients',
    description: 'Global buyers trust us for reliable and efficient sourcing.',
  },
  {
    icon: Award,
    number: '15+',
    label: 'Years Experience',
    description: 'Deep expertise in China manufacturing and logistics.',
  },
  {
    icon: Clock,
    number: '24h',
    label: 'Response Time',
    description: 'Quick turnaround on quotes and project updates.',
  },
  {
    icon: Headphones,
    number: '100%',
    label: 'Dedicated Support',
    description: 'Personal account managers for every client.',
  },
]

const TrustSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Us"
          subtitle="Numbers that speak to our commitment and expertise"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point) => (
            <div key={point.label} className="text-center">
              <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{point.number}</div>
              <div className="text-lg font-semibold text-slate-800 mb-2">{point.label}</div>
              <p className="text-slate-600 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSection