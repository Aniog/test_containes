import React from 'react'
import { Sparkles, ZoomIn, Microscope } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10 border border-slate-800">
              <img 
                data-strk-img-id="about-microcosmos-img"
                data-strk-img="microscopic magnification high detail cell structure"
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Microscopic World"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 bg-slate-800 border border-slate-700 rounded-xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-lg flex items-center justify-center">
                  <ZoomIn className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-bold">1000x</p>
                  <p className="text-slate-400 text-sm">Magnification</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Beyond the <span className="text-emerald-400">Naked Eye</span></h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              MicroCosmos is a curated exploration of the tiny realms that coexist with ours. From the intricate patterns of snowflake crystals to the complex machinery of biological cells, we bring the invisible into sharp focus.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Microscope />, title: "Precision Optics", desc: "Capturing details at the scale of micrometers using state-of-the-art microscopy." },
                { icon: <Sparkles />, title: "Natural Artistry", desc: "Revealing the geometric perfection and vibrant colors hidden in everyday matter." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-800 text-emerald-400 rounded-xl flex items-center justify-center border border-slate-700">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
