import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const cases = [
    {
      title: "Cost Optimization for European Furniture Brand",
      challenge: "High production costs in Europe leading to low margins.",
      solution: "Identified 3 high-end factories in Foshan, China. Managed production and QC.",
      result: "35% reduction in production costs while maintaining luxury standards.",
      img: "High end furniture warehouse China factory",
      id: "cs-1"
    },
    {
      title: "Quality Stabilization for US Electronics Startup",
      challenge: "Consistent defects from previous Alibaba supplier.",
      solution: "Switched to a tier-2 specialized manufacturer. Implemented 100% inspection policy.",
      result: "Defect rate dropped from 4.2% to 0.1%. Successful market launch.",
      img: "Electronics QC testing lab China",
      id: "cs-2"
    },
    {
      title: "Custom Packaging for Australian Cosmetics Line",
      challenge: "Specific sustainable material requirements unavailable locally.",
      solution: "Found specialized eco-packing factory in Shanghai. Developed custom tooling.",
      result: "Perfect eco-friendly packaging delivered within budget and schedule.",
      img: "Eco friendly cosmetics packaging production",
      id: "cs-3"
    }
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            See how we've helped businesses worldwide optimize their supply chain and grow their margins.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {cases.map((cs, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <h2 className="text-3xl font-bold text-primary">{cs.title}</h2>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-700 mb-2">The Challenge</h4>
                    <p className="text-slate-600 italic">"{cs.challenge}"</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-700 mb-2">Our Solution</h4>
                    <p className="text-slate-600">{cs.solution}</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100 flex items-start space-x-3">
                    <CheckCircle className="text-green-600 w-6 h-6 shrink-0" />
                    <div>
                      <h4 className="font-bold text-green-800">The Result</h4>
                      <p className="text-green-700 font-bold text-lg">{cs.result}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                  <img 
                    alt={cs.title} 
                    data-strk-img-id={`cs-img-${i}`}
                    data-strk-img={cs.img}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
