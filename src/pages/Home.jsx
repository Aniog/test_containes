import HomeHero from "@/components/home/HomeHero"
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Settings, ShieldCheck, Zap, Factory } from 'lucide-react'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const features = [
    {
      icon: <Settings className="w-10 h-10 text-sky-600" />,
      title: "Precision Control",
      desc: "Advanced CNC systems for micron-perfect folding operations."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-sky-600" />,
      title: "Industrial Durability",
      desc: "Built with high-grade architectural steel to withstand 24/7 heavy-duty use."
    },
    {
      icon: <Zap className="w-10 h-10 text-sky-600" />,
      title: "High Efficiency",
      desc: "Optimized cycle times that double your production output."
    },
    {
      icon: <Factory className="w-10 h-10 text-sky-600" />,
      title: "Custom Solutions",
      desc: "Folding machines tailored to your specific architectural requirements."
    }
  ]

  return (
    <div ref={containerRef}>
      <HomeHero />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="feature-title" className="text-sm font-bold tracking-[0.2em] text-sky-600 uppercase mb-4">Engineering Standards</h2>
            <p id="feature-subtitle" className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Why Artitect Machines?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((f, i) => (
              <div key={i} className="group p-8 border border-slate-100 rounded-xl hover:border-sky-200 hover:shadow-xl hover:shadow-sky-50 transition-all">
                <div className="mb-6">{f.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <img
                data-strk-img-id="manufacturing-process-img"
                data-strk-img="[process-desc] [process-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                className="rounded-2xl shadow-2xl"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Precision Manufacturing"
              />
            </div>
            <div className="flex-1">
              <h2 id="process-title" className="text-sm font-bold tracking-[0.2em] text-sky-600 uppercase mb-4">The Process</h2>
              <p id="process-desc" className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
                Architecting the Future of Metal Fabrication.
              </p>
              <p className="text-lg text-slate-600 mb-8 font-light leading-relaxed">
                At Artitect, we don't just build machines; we engineer competitive advantages. Our double folding machines are designed with a deep understanding of architectural sheet metal needs.
              </p>
              <ul className="space-y-4">
                {[
                  "Automatic sheet thickness detection",
                  "Intuitive touchscreen interfaces",
                  "Modular mechanical design for easy maintenance",
                  "Patented folding beam geometry"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
