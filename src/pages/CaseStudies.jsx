import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { TrendingUp, ShieldCheck, Clock } from 'lucide-react'

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const cases = [
    {
      id: 'case-1',
      title: 'Scaling Consumer Electronics Production',
      client: 'European Tech Startup',
      challenge: 'Client was facing a 15% defect rate with their initial supplier and struggling with communication delays.',
      solution: 'Identified a new, ISO-certified manufacturer in Shenzhen. Implemented strict DUPRO (During Production) checks and established clear quality standards translated into Chinese.',
      results: [
        { metric: 'Defect Rate', before: '15%', after: '< 1%', icon: ShieldCheck },
        { metric: 'Production Time', before: '45 days', after: '30 days', icon: Clock },
        { metric: 'Cost Savings', value: '12% per unit', icon: TrendingUp }
      ]
    },
    {
      id: 'case-2',
      title: 'Sourcing Custom Industrial Machinery Component',
      client: 'US Manufacturing Firm',
      challenge: 'Needed a highly specific CNC machined part with tight tolerances. Previous suppliers couldn\'t meet the required precision consistently.',
      solution: 'Sourced from a specialized hardware hub in Dongguan. Arranged for first-article inspection by a third-party engineering firm before mass production.',
      results: [
        { metric: 'Tolerance Achieved', value: '±0.01mm', icon: ShieldCheck },
        { metric: 'Supplier Vetted', value: '4 specialized factories', icon: Search },
        { metric: 'Cost Reduction', value: '25% vs domestic', icon: TrendingUp }
      ]
    }
  ]

  // Re-used icon from lucide that wasn't in original import
  const Search = ({className}) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>


  return (
    <div ref={containerRef} className="bg-stone-50">
      <div className="bg-stone-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="page-title" className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Client Success Stories
          </h1>
          <p id="page-subtitle" className="text-xl text-stone-300 max-w-3xl mx-auto">
            Real-world examples of how we've helped businesses overcome sourcing challenges and improve their bottom line.
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {cases.map((caseStudy) => (
          <div key={caseStudy.id} className="bg-white rounded-2xl shadow-md border border-stone-200 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2">{caseStudy.client}</div>
                <h2 id={`case-title-${caseStudy.id}`} className="text-3xl font-bold text-stone-900 mb-8">{caseStudy.title}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-stone-900 mb-2">The Challenge</h3>
                    <p className="text-stone-600 leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-900 mb-2">Our Solution</h3>
                    <p className="text-stone-600 leading-relaxed">{caseStudy.solution}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-stone-100 p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-stone-200 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-stone-900 mb-8 text-center">Key Results</h3>
                <div className="space-y-6">
                  {caseStudy.results.map((result, i) => {
                    const Icon = result.icon
                    return (
                      <div key={i} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-stone-500">{result.metric}</div>
                          {result.before ? (
                            <div className="font-bold text-stone-900">
                              <span className="line-through text-stone-400 mr-2">{result.before}</span>
                              <span className="text-green-600">{result.after}</span>
                            </div>
                          ) : (
                            <div className="font-bold text-stone-900 text-lg">{result.value}</div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            {/* Image banner for case study */}
            <div className="h-48 w-full relative">
               <img
                  alt={caseStudy.title}
                  className="object-cover w-full h-full absolute inset-0"
                  data-strk-img-id={`case-img-${caseStudy.id}`}
                  data-strk-img={`[case-title-${caseStudy.id}] manufacturing factory`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-stone-900 opacity-20"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}