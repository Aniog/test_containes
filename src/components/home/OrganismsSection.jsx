import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const organisms = [
  {
    id: 'paramecium',
    title: 'Paramecium',
    desc: 'A single-celled ciliate protozoan that moves using thousands of tiny hair-like structures called cilia.',
    fact: 'Can be up to 0.33mm long',
    imgId: 'org-img-par-x1y2z3',
    titleId: 'org-paramecium-title',
    descId: 'org-paramecium-desc',
  },
  {
    id: 'rotifer',
    title: 'Rotifer',
    desc: 'Microscopic aquatic animals with a wheel-like ring of cilia used for feeding and locomotion.',
    fact: 'Over 2,000 species known',
    imgId: 'org-img-rot-a4b5c6',
    titleId: 'org-rotifer-title',
    descId: 'org-rotifer-desc',
  },
  {
    id: 'volvox',
    title: 'Volvox',
    desc: 'A colonial green algae forming beautiful hollow spheres of up to 50,000 individual cells.',
    fact: 'Visible to the naked eye',
    imgId: 'org-img-vol-d7e8f9',
    titleId: 'org-volvox-title',
    descId: 'org-volvox-desc',
  },
  {
    id: 'stentor',
    title: 'Stentor',
    desc: 'A trumpet-shaped ciliate that can grow up to 2mm, making it one of the largest single-celled organisms.',
    fact: 'Can regenerate from fragments',
    imgId: 'org-img-ste-g1h2i3',
    titleId: 'org-stentor-title',
    descId: 'org-stentor-desc',
  },
]

const OrganismsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-3">Life Forms</p>
          <h2 id="organisms-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Organisms
          </h2>
          <p id="organisms-subtitle" className="text-slate-300 text-lg max-w-2xl mx-auto">
            Meet some of the most fascinating creatures that inhabit the microscopic realm
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="group flex flex-col md:flex-row gap-5 bg-slate-900 border border-slate-700/50 rounded-xl p-4 md:p-5 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="w-full md:w-48 h-48 md:h-auto flex-shrink-0 rounded-lg overflow-hidden">
                <img
                  alt={org.title}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}] [organisms-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 id={org.titleId} className="text-xl font-bold text-white mb-2">{org.title}</h3>
                <p id={org.descId} className="text-slate-300 text-sm mb-3">{org.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-medium">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {org.fact}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrganismsSection
