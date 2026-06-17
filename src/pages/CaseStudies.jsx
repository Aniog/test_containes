import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, BarChart3, TrendingDown, Clock, ShieldCheck } from 'lucide-react'

const CaseStudies = () => {
  const cases = [
    {
      id: 'c1',
      title: 'Cost Reduction for Electronic Accessories Brand',
      client: 'US-based Tech Retailer',
      challenge: 'Client was struggling with high prices from existing middle-man suppliers and inconsistent packaging quality.',
      solution: 'Identified direct manufacturer, redesigned packaging for better protection, and implemented local QC inspections.',
      results: [
        { label: 'Cost Reduction', value: '22%', icon: TrendingDown },
        { label: 'Defect Rate', value: '< 0.3%', icon: ShieldCheck },
        { label: 'Margin Increase', value: '15%', icon: BarChart3 }
      ],
      img: 'electronic computer parts manufacturing factory'
    },
    {
      id: 'c2',
      title: 'Supply Chain Stabilisation for Home Decor Startup',
      client: 'Australian E-commerce Brand',
      challenge: 'Frequent production delays and communication barriers resulting in missed marketing launches.',
      solution: 'On-site factory management, timeline enforcement, and sample consolidation to ensure prototype accuracy.',
      results: [
        { label: 'Lead Time Cut', value: '12 Days', icon: Clock },
        { label: 'Launch Success', value: '100%', icon: Star },
        { label: 'Communication', value: 'Instant', icon: ShieldCheck }
      ],
      img: 'home decor interior warehouse products'
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sourcing <span className="text-amber-500">Case Studies</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl font-medium">Actual results delivered to our global clients through strategic sourcing and rigorous quality control.</p>
        </div>
      </section>

      {/* Case List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-32">
            {cases.map((caseItem, idx) => (
              <div key={caseItem.id} className={`flex flex-col lg:flex-row gap-16 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">{caseItem.client}</span>
                    <h2 id={`case-title-${caseItem.id}`} className="text-3xl font-extrabold text-slate-900 leading-tight">
                      {caseItem.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                         <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">The Challenge</h3>
                         <p className="text-slate-600 leading-relaxed font-medium">{caseItem.challenge}</p>
                    </div>
                    <div>
                         <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">The Solution</h3>
                         <p className="text-slate-600 leading-relaxed font-medium">{caseItem.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                    {caseItem.results.map((result, rIdx) => (
                      <div key={rIdx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center shadow-sm">
                        <div className="text-amber-600 flex justify-center mb-3">
                          <result.icon className="h-6 w-6" />
                        </div>
                        <div className="text-2xl font-black text-slate-900 mb-1">{result.value}</div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center text-slate-900 font-bold hover:text-amber-600 transition-colors"
                    >
                      Achieve similar results for my brand <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </div>
                </div>

                <div className="lg:w-1/2 w-full aspect-square bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl relative group">
                  <div 
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    data-strk-bg-id={`case-bg-${caseItem.id}`}
                    data-strk-bg={`[case-title-${caseItem.id}] China industrial logistics manufacturing`}
                    data-strk-bg-ratio="1x1"
                    data-strk-bg-width="800"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[1,2,3,4,5].map(i => <Star key={i} className="h-6 w-6 text-amber-500 fill-amber-500" />)}
          </div>
          <blockquote className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 leading-tight italic">
            "Working with SSourcing China has been a game-changer for our procurement. Their level of detail in QC reports gave us the confidence to scale our product categories faster than we ever could on our own."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">DA</div>
            <div className="text-left">
              <div className="font-bold text-slate-900">David Armstrong</div>
              <div className="text-sm text-slate-500 font-medium">Director of Procurement, Global Trends UK</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
