import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    id: 'german-electronics',
    title: 'German Electronics Brand Scales Production',
    industry: 'Consumer Electronics',
    challenge: 'A German IoT startup needed reliable PCB assembly and plastic enclosure manufacturing at competitive prices. Previous attempts with Alibaba suppliers resulted in quality inconsistencies and missed deadlines.',
    solution: 'We audited 8 factories in Shenzhen and Dongguan, shortlisted 3 based on ISO 9001 certification and export experience. Managed sample runs, negotiated MOQ reduction from 5,000 to 1,000 for first order, and established a 3-stage QC process.',
    result: 'Unit cost reduced by 22%. Defect rate dropped from 8% to under 1.5%. On-time delivery achieved for 6 consecutive quarters. Client expanded from 1 product SKU to 7.',
    imgId: 'case-electronics-detail-1a2b3c',
    stats: [
      { label: 'Cost Reduction', value: '22%' },
      { label: 'Defect Rate', value: '<1.5%' },
      { label: 'Factories Audited', value: '8' },
    ],
  },
  {
    id: 'australian-furniture',
    title: 'Australian Furniture Retailer Launches Private Label',
    industry: 'Furniture & Home',
    challenge: 'A mid-sized Australian furniture retailer wanted to develop a private-label outdoor furniture line. Needed custom designs, teak wood sourcing, and consistent finishing quality across production runs.',
    solution: 'We identified 5 specialized factories in Fujian and Zhejiang. Managed design translation, material sourcing verification (FSC-certified teak), and implemented inline QC at sanding, assembly, and finishing stations. Coordinated 12 x 40HQ container shipments.',
    result: '12 container loads delivered on schedule. 40% margin improvement vs. previous wholesale buying model. Established ongoing production with quarterly order cycles.',
    imgId: 'case-furniture-detail-4d5e6f',
    stats: [
      { label: 'Containers Shipped', value: '12' },
      { label: 'Margin Improvement', value: '40%' },
      { label: 'Factories Vetted', value: '5' },
    ],
  },
  {
    id: 'us-packaging',
    title: 'US Packaging Distributor Averts Supply Crisis',
    industry: 'Packaging & Printing',
    challenge: 'A US packaging distributor discovered their primary factory had falsified certifications during a routine audit. They had 50+ active SKUs and pending orders worth $200K with no fallback supplier.',
    solution: 'We mobilized within 48 hours, identified 3 alternative factories with equivalent capabilities, conducted emergency audits, and negotiated rush production slots. Transferred all tooling and managed the transition without supply interruption.',
    result: 'New supplier operational in 3 weeks. All pending orders fulfilled within revised timeline. Established dual-supplier strategy to prevent future single-point failure.',
    imgId: 'case-packaging-detail-7g8h9i',
    stats: [
      { label: 'Transition Time', value: '3 Weeks' },
      { label: 'SKUs Transferred', value: '50+' },
      { label: 'Orders Saved', value: '$200K' },
    ],
  },
  {
    id: 'uk-sports',
    title: 'UK Sports Brand Optimizes Supply Chain',
    industry: 'Sports & Fitness',
    challenge: 'A UK fitness equipment brand was sourcing from 7 different Chinese suppliers with inconsistent quality, fragmented logistics, and no centralized quality oversight. Shipping costs were high due to LCL shipments from multiple locations.',
    solution: 'We consolidated supply to 3 audited factories in the same industrial zone, standardized quality specifications across all products, implemented unified QC protocols, and consolidated shipments into FCL containers from a single consolidation warehouse.',
    result: 'Logistics costs reduced by 35%. Quality consistency improved significantly. Lead time shortened by 10 days on average. Simplified supplier management from 7 to 3 vendors.',
    imgId: 'case-sports-detail-0j1k2l',
    stats: [
      { label: 'Logistics Savings', value: '35%' },
      { label: 'Lead Time Reduction', value: '10 Days' },
      { label: 'Supplier Consolidation', value: '7 → 3' },
    ],
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h1 id="cs-heading" className="text-4xl sm:text-5xl font-bold text-brand-navy tracking-tight">
              Case Studies
            </h1>
            <p id="cs-subtitle" className="mt-4 text-lg text-gray-600">
              Real projects, real results. See how we&apos;ve helped buyers across industries source successfully from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((cs, i) => (
              <article key={cs.id} className="grid lg:grid-cols-2 gap-10 items-start">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="inline-block px-3 py-1 bg-blue-50 text-brand-navy text-xs font-medium rounded-full mb-4">
                    {cs.industry}
                  </span>
                  <h2 id={`cs-${cs.id}-title`} className="text-2xl font-bold text-brand-navy mb-4">{cs.title}</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-1">Challenge</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-brand-orange uppercase tracking-wide mb-1">Our Solution</h3>
                      <p id={`cs-${cs.id}-desc`} className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-1">Result</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{cs.result}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {cs.stats.map((stat) => (
                      <div key={stat.label} className="bg-slate-50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-brand-navy">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`aspect-[3/2] rounded-xl overflow-hidden shadow-md ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                  data-strk-bg-id={cs.imgId}
                  data-strk-bg={`[cs-${cs.id}-desc] [cs-${cs.id}-title] [cs-subtitle] [cs-heading]`}
                  data-strk-bg-ratio="3x2"
                  data-strk-bg-width="800"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy">Ready to become our next case study?</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Every successful project starts with a conversation. Tell us about your sourcing challenge.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-medium rounded-lg transition-colors"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}