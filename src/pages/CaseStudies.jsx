import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const caseStudies = [
  {
    id: 'us-electronics',
    title: 'US Electronics Retailer — Supplier Switch Saves 30%',
    tag: 'Electronics',
    challenge: 'A US-based electronics retailer was sourcing through a trading company that added significant markup. They had no direct relationship with the factory and limited visibility on actual production costs.',
    solution: 'We identified the actual factory producing their products, conducted a full factory audit, and negotiated direct purchasing terms. We also set up a quality inspection process for ongoing orders.',
    result: '30% reduction in unit costs, improved quality consistency, and a direct factory relationship for future orders.',
    titleId: 'cs-us-electronics-title',
    challengeId: 'cs-us-electronics-challenge',
    solutionId: 'cs-us-electronics-solution',
    imgId: 'cs-us-electronics-img-c3d4',
  },
  {
    id: 'eu-home-garden',
    title: 'EU Home & Garden Brand — From Sample to 50K Units',
    tag: 'Home & Garden',
    challenge: 'A European home & garden brand needed custom-designed outdoor furniture but had no existing supplier in China. They required a partner who could manage the entire process from design to delivery.',
    solution: 'We sourced three candidate factories, conducted audits, and arranged sample production. After sample approval, we monitored production progress and conducted pre-shipment inspection on the full order.',
    result: '50,000 units delivered on schedule with zero quality defects reported. The client has since placed three repeat orders.',
    titleId: 'cs-eu-home-garden-title',
    challengeId: 'cs-eu-home-garden-challenge',
    solutionId: 'cs-eu-home-garden-solution',
    imgId: 'cs-eu-home-garden-img-e5f6',
  },
  {
    id: 'au-textiles',
    title: 'AU Textiles Buyer — Quality Issue Resolved Before Shipment',
    tag: 'Textiles',
    challenge: 'An Australian textiles buyer had a production run where fabric quality deviated from the approved sample. Without on-site inspection, the issue would have gone undetected until delivery.',
    solution: 'Our during-production inspection identified the quality deviation at 40% completion. We documented the issue, negotiated with the factory for corrective action, and monitored the re-production process.',
    result: 'Quality corrected before shipment, avoiding a costly return shipment and 3-month delay. The client saved approximately $45,000 in potential losses.',
    titleId: 'cs-au-textiles-title',
    challengeId: 'cs-au-textiles-challenge',
    solutionId: 'cs-au-textiles-solution',
    imgId: 'cs-au-textiles-img-g7h8',
  },
  {
    id: 'uk-packaging',
    title: 'UK Packaging Company — First China Order Success',
    tag: 'Packaging',
    challenge: 'A UK packaging company wanted to source custom-printed boxes from China for the first time. They were concerned about quality, communication, and the complexity of international shipping.',
    solution: 'We guided them through the entire process — from supplier search and sample development to production monitoring and shipping coordination. Our bilingual team handled all factory communication.',
    result: 'First order of 20,000 custom boxes delivered on time and on spec. The client now sources regularly through SSourcing China.',
    titleId: 'cs-uk-packaging-title',
    challengeId: 'cs-uk-packaging-challenge',
    solutionId: 'cs-uk-packaging-solution',
    imgId: 'cs-uk-packaging-img-i9j0',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="cs-page-title" className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Case Studies
          </h1>
          <p id="cs-page-subtitle" className="text-white/80 max-w-2xl mx-auto">
            Real examples of how we have helped global buyers source better, save money, and avoid costly mistakes.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, index) => (
              <div
                key={cs.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.challengeId}] [${cs.titleId}] [cs-page-subtitle] [cs-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-lg bg-neutral-light object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {cs.tag}
                  </span>
                  <h2 id={cs.titleId} className="text-2xl font-bold text-primary mb-4">
                    {cs.title}
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-dark mb-1">Challenge</h4>
                      <p id={cs.challengeId} className="text-neutral-mid text-sm leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-dark mb-1">Solution</h4>
                      <p id={cs.solutionId} className="text-neutral-mid text-sm leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>
                    <div className="bg-success/10 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-success mb-1">Result</h4>
                      <p className="text-neutral-dark text-sm leading-relaxed">
                        {cs.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-white/80 mb-8">
            Tell us about your sourcing challenge. We will propose a practical solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-md text-lg font-semibold no-underline hover:bg-accent-light transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
