import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Navbar from '@/components/sanctuary/Navbar'
import HeroSection from '@/components/sanctuary/HeroSection'
import AboutSection from '@/components/sanctuary/AboutSection'
import TigersSection from '@/components/sanctuary/TigersSection'
import MissionSection from '@/components/sanctuary/MissionSection'
import HelpSection from '@/components/sanctuary/HelpSection'
import TestimonialsSection from '@/components/sanctuary/TestimonialsSection'
import ContactSection from '@/components/sanctuary/ContactSection'
import Footer from '@/components/sanctuary/Footer'

function WhiteTigerSpotlight() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <span className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3 block">
              明星居民
            </span>
            <h2 id="spotlight-title" className="text-3xl md:text-4xl font-bold text-stone-900 mb-5 leading-tight">
              白玉——我们最珍贵的守护对象
            </h2>
            <p id="spotlight-desc" className="text-stone-600 text-lg leading-relaxed mb-5">
              白玉是一只罕见的白化孟加拉虎，拥有纯白的皮毛和深邃的蓝灰色眼睛。
              她的美丽令人窒息，她的故事令人动容。
            </p>
            <p className="text-stone-600 leading-relaxed mb-5">
              白化虎并非独立亚种，而是孟加拉虎的基因变异个体。
              正因为这种稀有性，她们曾被人类过度繁殖、展览和剥削。
              白玉在被救出时，爪子已因长期站立在水泥地上而严重变形。
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              经过三年的康复治疗，白玉终于能够自由奔跑在救护站宽阔的草地上。
              她的眼神中，既有对过去的警惕，也有对现在的信任。
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#help"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                认养白玉
              </a>
              <a
                href="#tigers"
                className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 font-bold px-8 py-3.5 rounded-full transition-all"
              >
                认识更多老虎
              </a>
            </div>
          </div>

          {/* White tiger image */}
          <div className="order-1 md:order-2 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[3x4]" style={{ maxHeight: '600px' }}>
              <img
                alt="白玉——白化孟加拉虎，虎缘救护站的明星居民"
                data-strk-img-id="spotlight-white-tiger-b1c2d3"
                data-strk-img="[spotlight-desc] [spotlight-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover object-top"
                style={{ maxHeight: '600px' }}
              />
            </div>
            {/* Decorative badge */}
            <div className="absolute -top-4 -left-4 md:-left-8 bg-stone-900 text-white rounded-2xl px-5 py-3 shadow-xl">
              <div className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-0.5">
                珍稀物种
              </div>
              <div className="text-sm font-bold">白化孟加拉虎</div>
            </div>
            {/* Decorative stripe accent */}
            <div className="absolute -bottom-4 -right-4 md:-right-8 w-24 h-24 bg-amber-100 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function TigerSanctuaryPage() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhiteTigerSpotlight />
      <TigersSection />
      <MissionSection />
      <HelpSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
