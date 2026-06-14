import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, MapPin } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { CASE_STUDIES } from '@/content/site'

const CaseStudyHighlights = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const featured = CASE_STUDIES.slice(0, 3)

  return (
    <div ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {featured.map((c, idx) => (
          <article
            key={c.id}
            className="card flex flex-col h-full p-0 overflow-hidden"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                data-strk-img-id={`home-case-img-${idx}-${c.id}`}
                data-strk-img={`[${c.id}-title] [${c.id}-country]`}
                data-strk-img-ratio="16x10"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${c.category} case study from ${c.country}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-7 flex flex-col flex-1">
              <div className="flex items-center gap-2 text-xs text-primary-500 mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span id={`${c.id}-country`}>{c.country}</span>
                <span aria-hidden>•</span>
                <span>{c.category}</span>
              </div>
              <h3 id={`${c.id}-title`} className="text-lg font-semibold text-primary leading-snug mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-primary-600 leading-relaxed flex-1">{c.summary}</p>
              <Link
                to={`/case-studies#${c.id}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-700"
              >
                Read the case study
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/case-studies" className="btn-secondary">
          See all case studies
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default CaseStudyHighlights
