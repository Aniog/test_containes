import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const cases = [
    {
      id: "case-furniture",
      client: "European Furniture Retailer",
      challenge: "High defect rate (15%) and missed deadlines from their previous supplier in Guangdong.",
      solution: "We audited 5 new factories, selected top 2, and implemented strict pre-shipment inspections. We renegotiated lead times and introduced penalty clauses.",
      result: "Defect rate dropped to 1.2%, on-time delivery improved to 98%, and overall unit cost was reduced by 8%.",
      imgId: "case-furniture-img-1"
    },
    {
      id: "case-electronics",
      client: "US Consumer Electronics Brand",
      challenge: "Needed to launch a new smartwatch within 4 months, but struggling with communication barriers and slow sample iterations.",
      solution: "Assigned a dedicated bilingual project manager. We visited the factory weekly, resolving engineering queries on the spot and expediting the prototyping phase.",
      result: "Launched the product on time, passing CE/FCC certifications on the first try. Saved an estimated 6 weeks in development time.",
      imgId: "case-electronics-img-2"
    }
  ]

  return (
    <div ref={containerRef} className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 id="cases-title" className="text-4xl font-extrabold text-slate-900 mb-4">Client Success Stories</h1>
          <p id="cases-subtitle" className="text-xl text-slate-600">
            Real-world examples of how we've helped global businesses source effectively from China.
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {cases.map((c) => (
            <div key={c.id} className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto bg-slate-200">
                <img
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[client-${c.id}] [cases-subtitle]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={c.client}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div id={`client-${c.id}`} className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-2">{c.client}</div>
                
                <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">The Challenge</h3>
                <p className="text-slate-600 mb-6">{c.challenge}</p>

                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Solution</h3>
                <p className="text-slate-600 mb-6">{c.solution}</p>

                <div className="bg-white p-6 rounded-xl border border-blue-100 mt-2">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center">
                    <ArrowRight className="text-green-500 mr-2 h-5 w-5" /> The Result
                  </h3>
                  <p className="text-slate-700 font-medium">{c.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
