import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const studies = [
  {
    title: 'Consumer Electronics for EU Distributor',
    desc: 'Sourced smartphones and accessories for a German distributor, reducing their per-unit cost by 22% while maintaining CE certification standards.',
    results: ['22% cost reduction', 'CE certified', '4-week lead time'],
    imgId: 'case-study-electronics-7f1e2a',
  },
  {
    title: 'Custom Packaging for US Brand',
    desc: 'Developed custom packaging solutions for a US cosmetics brand, managing the full process from mold creation to bulk production.',
    results: ['15k units delivered', '30% savings', 'ISO 9001 factory'],
    imgId: 'case-study-packaging-8b3c4d',
  },
  {
    title: 'Industrial Parts for Australian Manufacturer',
    desc: 'Identified and qualified three alternative suppliers for precision-machined components, securing backup supply and reducing costs.',
    results: ['3 suppliers vetted', '18% cost savings', '6-month contract'],
    imgId: 'case-study-industrial-9d5e6f',
  },
]

export default function CaseStudiesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-surface-800 mb-4">
            Case Studies
          </h2>
          <p className="text-surface-500 text-lg">
            Real results from real partnerships. See how we have helped businesses source smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studies.map((study) => (
            <div
              key={study.title}
              className="bg-white rounded-xl border border-surface-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-surface-100">
                <img
                  alt={study.title}
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[case-study-${study.imgId}-title] [case-study-${study.imgId}-desc]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 id={`case-study-${study.imgId}-title`} className="text-lg font-semibold text-surface-800 mb-2">
                  {study.title}
                </h3>
                <p id={`case-study-${study.imgId}-desc`} className="text-surface-500 text-sm leading-relaxed mb-4">
                  {study.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.results.map((r) => (
                    <span key={r} className="inline-flex items-center px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 text-white rounded-lg font-medium text-sm hover:bg-brand-600 transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}