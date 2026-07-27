import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (ImageHelper && ImageHelper.loadImages && strkImgConfig) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full pb-20">
      <div className="bg-gray-50 py-16 lg:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 id="page-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Client Case Studies</h1>
          <p id="page-desc" className="text-xl text-gray-600">
            Real examples of how we've helped international buyers reduce costs, improve quality, and scale their businesses by sourcing effectively from China.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        {cases.map((cs, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 relative h-64 md:h-auto">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cs.clientType}
                className="w-full h-full object-cover"
                data-strk-img-id={`case-study-img-${index}`}
                data-strk-img={`[case-title-${index}] [case-industry-${index}] [page-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
              />
            </div>
            
            <div className="md:w-3/5 p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-4">
                <span id={`case-industry-${index}`} className="text-sm font-bold tracking-wider text-blue-600 uppercase">
                  {cs.industry}
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-sm text-gray-500">{cs.clientType}</span>
              </div>
              
              <h2 id={`case-title-${index}`} className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {cs.title}
              </h2>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900">The Challenge:</h4>
                  <p className="text-gray-600">{cs.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Our Solution:</h4>
                  <p className="text-gray-600">{cs.solution}</p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Key Results:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cs.results.map((res, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-full text-blue-600 shadow-sm">
                        {res.icon}
                      </div>
                      <span className="font-medium text-gray-900">{res.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 mt-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to be our next success story?</h2>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-md text-lg font-bold bg-blue-600 text-white hover:bg-blue-700 h-14 px-10 shadow-md transition-colors"
        >
          Discuss Your Project With Us
        </Link>
      </div>
    </div>
  )
}

const cases = [
  {
    industry: "Consumer Electronics",
    clientType: "US E-commerce Brand",
    title: "Reducing Defect Rate from 12% to 0.5% for Smart Home Devices",
    challenge: "The client was experiencing a high return rate on Amazon due to inconsistent battery performance and poor assembly quality from their existing Alibaba supplier.",
    solution: "We audited 5 new factories, selected a certified manufacturer, implemented strict incoming materials inspection (IQC) for the batteries, and enforced a 100% pre-shipment functional test.",
    results: [
      { text: "Defect rate dropped to <0.5%", icon: <TrendingUp className="w-5 h-5" /> },
      { text: "Saved $45,000 in annual returns", icon: <DollarSign className="w-5 h-5" /> }
    ]
  },
  {
    industry: "Outdoor Furniture",
    clientType: "Australian Wholesaler",
    title: "Consolidating 4 Suppliers to Save 20% on Freight",
    challenge: "The buyer was sourcing patio chairs, tables, and cushions from 4 different factories, resulting in LCL shipping nightmares and mismatched color tones.",
    solution: "We aggregated the orders through one primary manufacturer who subcontracted the textiles. We managed the quality centrally and consolidated all items into FCL (Full Container Load) shipments.",
    results: [
      { text: "20% reduction in shipping costs", icon: <DollarSign className="w-5 h-5" /> },
      { text: "Lead time reduced by 3 weeks", icon: <Clock className="w-5 h-5" /> }
    ]
  },
  {
    industry: "Apparel",
    clientType: "UK Boutique Fashion Label",
    title: "Navigating Minimum Order Quantities (MoQ) for Custom Designs",
    challenge: "The client wanted to launch a new activewear line but couldn't meet the 2,000 pcs/color MoQ demanded by most quality factories without risking overstock.",
    solution: "We leveraged our relationship with a mid-sized, high-quality garment factory in Zhejiang to negotiate a trial run of 500 pcs/color by utilizing available market stock fabrics.",
    results: [
      { text: "Successfully launched with 75% lower risk", icon: <TrendingUp className="w-5 h-5" /> },
      { text: "Scaled to 5,000 pcs/color within 8 months", icon: <Clock className="w-5 h-5" /> }
    ]
  }
]

export default CaseStudies
