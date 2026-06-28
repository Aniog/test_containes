import React, { useEffect, useRef } from 'react'
import { ShieldCheck, Zap, Cog, Maximize } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const features = [
  {
    icon: <Zap className="w-8 h-8 text-amber-500" />,
    title: 'High-Speed Precision',
    description: 'Advanced servo motors and modern CNC controls ensure rapid folding without sacrificing micron-level accuracy.'
  },
  {
    icon: <Cog className="w-8 h-8 text-amber-500" />,
    title: 'Intuitive Operation',
    description: 'Elegant interfaces make complex operations simple. Reduce training time and operator errors with our user-friendly software.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
    title: 'Industrial Durability',
    description: 'Constructed from heavy-duty cast and machined steel to withstand decades of continuous manufacturing demands.'
  },
  {
    icon: <Maximize className="w-8 h-8 text-amber-500" />,
    title: 'Versatile Tooling',
    description: 'Easily adapt to new profiles with quick-change tooling systems that keep your production line moving flexibly.'
  }
]

export default function FeaturesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 id="features-title" className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Engineering <span className="text-amber-500">Excellence</span>
            </h2>
            <p id="features-subtitle" className="text-lg text-slate-600 mb-12 leading-relaxed">
              We believe industrial machinery shouldn't have to be complicated. ARTITECT combines raw power with sophisticated design.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  {/* Icon Wrapper */}
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/20">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              data-strk-bg-id="features-bg-image-01"
              data-strk-bg="[features-title] [features-subtitle] factory manufacturing precision machinery"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="1200"
            />
            {/* Elegant overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 via-transparent to-transparent"></div>
            
            {/* Info Box overlaid on image */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Industry Certified</h4>
                  <p className="text-sm text-slate-600 font-medium">Meeting global safety & quality standards.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
