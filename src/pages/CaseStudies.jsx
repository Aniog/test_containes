import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight } from "lucide-react"

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const cases = [
    {
      id: "amazon-seller-electronics",
      clientType: "Amazon FBA Seller (USA)",
      challenge: "High defect rate (8%) in smart home devices leading to negative reviews.",
      solution: "We conducted a sudden factory audit, identified poor QC processes, and negotiated a switch to a new vetted manufacturer. We implemented strict pre-shipment inspections.",
      result: "Defect rate dropped to 0.5%, sourcing costs reduced by 12%, and the product regained its 4.5-star rating on Amazon.",
      image: "smart home electronics consumer devices warehouse",
    },
    {
      id: "uk-retail-furniture",
      clientType: "Retail Furniture Chain (UK)",
      challenge: "Needed to source a new line of outdoor furniture with strict environmental compliance and specific materials within 2 months.",
      solution: "We leveraged our network to find 3 factories with the required certifications. We handled sample consolidation in China, allowing the client to approve the final design in 2 weeks.",
      result: "First container shipped within 45 days. The client saved 20% compared to their local wholesaler and met their seasonal launch deadline.",
      image: "outdoor furniture rattan patio chairs",
    },
    {
      id: "aus-startup-apparel",
      clientType: "Activewear Startup (Australia)",
      challenge: "Struggling with high MOQs (Minimum Order Quantities) from premium fabric manufacturers.",
      solution: "We found a medium-sized factory willing to group materials with larger orders. We negotiated an MOQ of 500 pieces per style instead of the standard 2000.",
      result: "The startup successfully launched their first collection without overcommitting capital to inventory, and has since scaled to order 5000+ pieces monthly.",
      image: "activewear fitness clothing manufacturing fabric",
    }
  ]

  return (
    <div className="bg-white" ref={containerRef}>
      <div className="bg-blue-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Case Studies</h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Real results for real businesses. See how we've helped companies worldwide overcome sourcing challenges and scale profitably.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {cases.map((caseStudy) => (
              <article key={caseStudy.id} className="flex flex-col items-start justify-between bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="relative w-full">
                  <img
                    data-strk-img-id={`case-study-${caseStudy.id}`}
                    data-strk-img={caseStudy.image}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={caseStudy.clientType}
                    className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-t-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl p-8">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      {caseStudy.clientType}
                    </h3>
                  </div>
                  <div className="mt-6 space-y-4 text-sm leading-6 text-gray-600">
                    <div>
                      <strong className="text-gray-900 block mb-1">The Challenge:</strong>
                      {caseStudy.challenge}
                    </div>
                    <div>
                      <strong className="text-gray-900 block mb-1">Our Solution:</strong>
                      {caseStudy.solution}
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg text-green-800 border border-green-100 border-l-4 border-l-green-600">
                      <strong className="block mb-1">The Result:</strong>
                      {caseStudy.result}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Box */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">Ready to write your own success story?</h2>
            <div className="mt-8 flex justify-center">
                <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 flex items-center">
                    Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}