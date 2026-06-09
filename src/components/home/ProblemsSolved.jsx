import React from 'react'
import { XCircle, CheckCircle2 } from 'lucide-react'
const problems = [
  {
    bad: 'Language barriers lead to product misunderstandings.',
    good: 'Native speakers manage all communication & specs.'
  },
  {
    bad: 'Hidden commissions from factories inflate your costs.',
    good: 'Transparent flat-fee or low-commission models.'
  },
  {
    bad: 'Unreliable quality causes costly returns.',
    good: 'Professional on-site inspections before shipment.'
  },
  {
    bad: 'Complex logistics and custom hurdles.',
    good: 'End-to-end logistics & documentation support.'
  }
]
export default function ProblemsSolved() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Sourcing Without the Headaches</h2>
          <p className="mt-4 text-xl text-slate-600">We solve the most common challenges global buyers face in China.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-6 p-6 bg-secondary/50 rounded-xl border border-slate-100">
              <div className="flex-1 space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-slate-500 line-through text-sm">{item.bad}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-slate-900 font-medium">{item.good}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
EOF && cat > src/pages/Home.jsx <<EOF
import React from 'react'
import Hero from '@/components/home/Hero'
import ServicesOverview from '@/components/home/ServicesOverview'
import Process from '@/components/home/Process'
import KeyProducts from '@/components/home/KeyProducts'
import TrustPoints from '@/components/home/TrustPoints'
import ProblemsSolved from '@/components/home/ProblemsSolved'
import FAQ from '@/components/home/FAQ'
import InquiryForm from '@/components/home/InquiryForm'
export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Process />
      <TrustPoints />
      <KeyProducts />
      <ProblemsSolved />
      <FAQ />
      <InquiryForm />
    </>
  )
}
