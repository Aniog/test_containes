import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const bannerItems = [
  { id: 'b01', imgId: 'banner-img-b01-mc060', titleId: 'banner-b01-title', descId: 'banner-b01-desc', title: 'Coral polyp microscopy', desc: 'Coral reef polyp microscopic structure marine biology' },
  { id: 'b02', imgId: 'banner-img-b02-mc061', titleId: 'banner-b02-title', descId: 'banner-b02-desc', title: 'Fungal spores', desc: 'Fungal spores microscopy mycology close-up' },
  { id: 'b03', imgId: 'banner-img-b03-mc062', titleId: 'banner-b03-title', descId: 'banner-b03-desc', title: 'Nematode worm', desc: 'Nematode roundworm microscopy soil biology' },
  { id: 'b04', imgId: 'banner-img-b04-mc063', titleId: 'banner-b04-title', descId: 'banner-b04-desc', title: 'Quartz crystal', desc: 'Quartz mineral crystal polarized light microscopy' },
  { id: 'b05', imgId: 'banner-img-b05-mc064', titleId: 'banner-b05-title', descId: 'banner-b05-desc', title: 'Paramecium', desc: 'Paramecium protozoa single cell organism microscopy' },
]

const PhotoBannerSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-[#0a0f1e] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-slate-500 text-xs font-mono tracking-widest uppercase mb-8">More from the Collection</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {bannerItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer">
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="300"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              <span id={item.titleId} className="sr-only">{item.title}</span>
              <span id={item.descId} className="sr-only">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhotoBannerSection
