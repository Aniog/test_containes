import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const cases = [
    {
      id: "case-1",
      client: "EcoHome USA",
      industry: "Furniture / Home Goods",
      title: "Saving 35% on Outdoor Furniture Sourcing",
      challenge: "The client was purchasing from trading companies on Alibaba, paying high markups and experiencing inconsistent quality across shipments.",
      solution: "We audited 6 factories in Foshan, selected 2 true manufacturers, negotiated bulk pricing, and implemented a strict pre-shipment inspection plan.",
      result: "Reduced unit costs by 35%, eliminated defective rate from 8% down to 0.5%, and consolidated their shipments into direct FCL (Full Container Loads).",
      imgId: "case-furniture-22a"
    },
    {
      id: "case-2",
      client: "TechFit UK",
      industry: "Consumer Electronics",
      title: "Developing a Custom Smartwatch from Scratch",
      challenge: "The client wanted a smartwatch with a custom mold and specific health tracking algorithms, but struggled to communicate technical specs to Chinese software teams.",
      solution: "We act as local project managers in Shenzhen, bringing in independent engineers to verify the factory's claims, coordinating sample iterations, and testing prototypes.",
      result: "Successfully launched the product 2 months ahead of schedule. The factory met all CE/RoHS requirements, and the first batch of 5,000 units had zero technical failures.",
      imgId: "case-tech-55b"
    },
    {
      id: "case-3",
      client: "UrbanPack Australia",
      industry: "Apparel & Accessories",
      title: "Resolving a Supplier Dispute and Securing Refunds",
      challenge: "The client had transferred a 30% deposit to a backpack supplier who then delayed production by 3 months and demanded a sudden 15% price increase.",
      solution: "We physically visited the factory in Guangzhou to investigate. We discovered they had subcontracted the work. We legally pressured them, recovered the deposit, and moved the molds to a verified partner.",
      result: "Recovered $18,000 in deposited funds, secured a new, reliable supplier, and produced the goods at the original target price without further delays.",
      imgId: "case-bags-88c"
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Case Studies</h1>
          <p className="text-xl text-slate-300">
            Real examples of how we've helped global businesses overcome sourcing challenges, reduce costs, and guarantee quality.
          </p>
        </div>
      </div>

      {/* Cases List */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="space-y-16">
            {cases.map((study, index) => {
              const isEven = index % 2 === 0;
              return (
                <Card key={study.id} className="overflow-hidden border-0 shadow-lg">
                  <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Image Side */}
                    <div className="md:w-2/5 relative min-h-[300px] bg-slate-200">
                      <img
                        alt={study.title}
                        data-strk-img-id={study.imgId}
                        data-strk-img={`[title-${study.id}] ${study.industry} factory production container`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content Side */}
                    <CardContent className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center bg-white">
                      <div className="mb-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold uppercase tracking-wider">{study.client}</span>
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider">{study.industry}</span>
                      </div>
                      
                      <h2 id={`title-${study.id}`} className="text-2xl font-bold mb-6 text-slate-900">{study.title}</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-slate-900">The Challenge:</h4>
                          <p className="text-slate-600">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">Our Solution:</h4>
                          <p className="text-slate-600">{study.solution}</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-100 mt-4">
                          <h4 className="font-bold text-green-900 mb-1">The Result:</h4>
                          <p className="text-green-800">{study.result}</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Become Our Next Success Story</h2>
          <p className="text-blue-100 text-lg mb-8">
            Whether you are struggling with poor quality, high prices, or unreliable communication, our local team is here to fix it.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100 text-lg px-8 py-6" asChild>
            <Link to="/contact">Discuss Your Sourcing Needs</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}