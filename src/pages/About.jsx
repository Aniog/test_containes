import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="animate-in fade-in duration-700">
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Our Legacy of Precision</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Building the machines that build the world. From a small workshop to an international leader in sheet metal machinery.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
               <img 
                 data-strk-img-id="about-history-img"
                 data-strk-img="engineering team designing machinery"
                 data-strk-img-ratio="4x3"
                 data-strk-img-width="800"
                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                 alt="Our History"
                 className="rounded-3xl shadow-xl"
               />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Decades of Engineering Excellence</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed font-light">
                <p>
                  Founded in 1998, ARTITECT MACHINERY was born from a simple observation: the industrial world needed more precise, more reliable, and more user-friendly folding machinery.
                </p>
                <p>
                  Today, we are a global leader in the design and manufacture of premium double folders and sheet metal folding machines. Our facilities house some of the most advanced engineering minds in the industry, all dedicated to the pursuit of mechanical perfection.
                </p>
                <p>
                  We don't just sell machines; we provide the foundation for your business's success. Every ARTITECT folder is a testament to our commitment to quality, durability, and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Innovation', desc: 'Constantly pushing the boundaries of CNC technology and mechanical design.' },
              { label: 'Reliability', desc: 'Our machines are built to run 24/7 in the most demanding environments.' },
              { label: 'Precision', desc: 'Achieving tolerances that were previously thought impossible.' },
              { label: 'Support', desc: 'Global network of engineers ready to assist you at a moment\'s notice.' }
            ].map((value, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
