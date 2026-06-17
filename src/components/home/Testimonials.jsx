import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Marcus Lindberg',
    role: 'Production Manager',
    company: 'Nordic Steel Works',
    text: 'The ARTITECT double folding machine has transformed our production line. Setup time is down 40% and bending accuracy is consistently within tolerance.',
    imgId: 'test-marcus-j2k7n4',
    nameId: 'test-marcus-name',
  },
  {
    id: 'testimonial-2',
    name: 'Chen Wei',
    role: 'Factory Owner',
    company: 'Shenzhen Precision Co.',
    text: 'We evaluated several brands before choosing ARTITECT. The build quality and after-sales support are outstanding. Best investment we have made.',
    imgId: 'test-chen-p5m8r2',
    nameId: 'test-chen-name',
  },
  {
    id: 'testimonial-3',
    name: 'Sarah Mitchell',
    role: 'Operations Director',
    company: 'Midwest Metal Fabrication',
    text: 'From initial consultation to installation, the ARTITECT team was professional and responsive. Our metal folder runs flawlessly every day.',
    imgId: 'test-sarah-t3v6x9',
    nameId: 'test-sarah-name',
  },
]

export default function Testimonials() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#C8973E] font-semibold text-sm tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F1B2D] mt-3 mb-5 tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-[#5A6577] text-lg max-w-2xl mx-auto">
            Hear from the professionals who rely on ARTITECT machines every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl border border-[#E2E6ED] p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C8973E] text-[#C8973E]" />
                ))}
              </div>
              <p className="text-[#0F1B2D] leading-relaxed mb-6 text-sm">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  alt={t.name}
                  data-strk-img-id={t.imgId}
                  data-strk-img={`[${t.nameId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="100"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-11 h-11 rounded-full object-cover bg-[#E2E6ED]"
                />
                <div>
                  <div id={t.nameId} className="font-semibold text-[#0F1B2D] text-sm">
                    {t.name}
                  </div>
                  <div className="text-[#5A6577] text-xs">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
