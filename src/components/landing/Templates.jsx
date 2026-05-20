import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const templates = [
  { id: 'tpl-1', category: 'Portfolio', name: 'Creative Portfolio', desc: 'Showcase your work beautifully' },
  { id: 'tpl-2', category: 'Business', name: 'Modern Business', desc: 'Professional presence online' },
  { id: 'tpl-3', category: 'Store', name: 'Online Shop', desc: 'Sell products with ease' },
  { id: 'tpl-4', category: 'Blog', name: 'Personal Blog', desc: 'Share your story with the world' },
  { id: 'tpl-5', category: 'Event', name: 'Event Landing', desc: 'Drive registrations & buzz' },
  { id: 'tpl-6', category: 'Restaurant', name: 'Restaurant Site', desc: 'Menus, reservations & more' },
]

export default function Templates() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="templates" ref={containerRef} className="py-20 md:py-28 bg-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">Templates</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Start with a stunning template</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Choose from 100+ professionally designed templates for every industry and customize them to match your brand.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map(tpl => (
            <div key={tpl.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-violet-100 hover:shadow-xl hover:shadow-violet-200/50 hover:-translate-y-1 transition-all duration-200">
              <div className="relative overflow-hidden aspect-[4/3]">
                <span id={`tpl-cat-${tpl.id}`} className="sr-only">{tpl.category}</span>
                <span id={`tpl-name-${tpl.id}`} className="sr-only">{tpl.name}</span>
                <span id={`tpl-desc-${tpl.id}`} className="sr-only">{tpl.desc}</span>
                <img
                  alt={tpl.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-strk-img-id={`template-img-${tpl.id}`}
                  data-strk-img={`[tpl-desc-${tpl.id}] [tpl-name-${tpl.id}] [tpl-cat-${tpl.id}] website template`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                />
                <div className="absolute inset-0 bg-violet-900/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-violet-700 font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-violet-50 transition-colors">
                    Use Template
                  </button>
                </div>
                <span className="absolute top-3 left-3 bg-violet-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {tpl.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-gray-900 font-semibold text-base">{tpl.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{tpl.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 border border-violet-300 text-violet-700 hover:bg-violet-100 font-semibold px-7 py-3 rounded-full transition-colors">
            Browse All Templates
          </a>
        </div>
      </div>
    </section>
  )
}
