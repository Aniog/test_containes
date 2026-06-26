import React, { useEffect, useRef } from 'react'
import { Award, Users, Globe, Building2, TrendingUp } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Precision Engineering. <br /> Elegant <span className="text-brand-500">Execution.</span></h1>
          <p className="text-brand-500 text-lg max-w-3xl mx-auto leading-relaxed">
            ARTITECT MACHINERY has been defining the standards of the metal folding industry for over two decades. Our commitment to elegance and user-friendliness makes us the preferred choice for architects and industrial leaders worldwide.
          </p>
        </div>
      </section>

      {/* History / Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-8">Our Legacy of Innovation</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Founded on the principles of precision and reliability, ARTITECT MACHINERY began as a small engineering firm dedicated to solving the complexities of sheet metal folding. Today, we stand as a global leader in high-end double folding machines.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our philosophy is simple: create machinery that is as beautiful as the structures it helps build. By combining sophisticated CNC technology with user-friendly interfaces, we empower manufacturers to push the boundaries of design.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-brand-700">1998</div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Established</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-700">Global</div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Reach</div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-10 bg-brand-500/5 rounded-full blur-3xl"></div>
                <img
                  data-strk-img-id="about-factory-img"
                  data-strk-img="modern industrial machinery factory precision"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="ARTITECT Factory"
                  className="relative z-10 rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-900 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The ARTITECT Standard</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: <Award />, title: 'Quality First', desc: 'Superior materials and craftsmanship in every assembly.' },
              { icon: <TrendingUp />, title: 'Innovation', desc: 'Continuous R&D to lead the folding industry.' },
              { icon: <Users />, title: 'Partnership', desc: 'We grow when our clients succeed.' },
              { icon: <Globe />, title: 'Sustainability', desc: 'Eco-efficient motors and minimal waste production.' }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-brand-800 text-brand-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-700">
                  {React.cloneElement(value.icon, { className: 'w-8 h-8' })}
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-brand-500/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership/Facilities Strip */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
             <div className="group cursor-default">
                <div className="mb-6 overflow-hidden rounded-lg">
                   <img
                     data-strk-img-id="about-facility-1"
                     data-strk-img="high tech assembly line machinery"
                     data-strk-img-ratio="16x9"
                     data-strk-img-width="1000"
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     alt="Assembly Facility"
                     className="group-hover:scale-105 transition-transform duration-700"
                   />
                </div>
                <h4 className="text-2xl font-bold text-brand-900 mb-4 flex items-center gap-3">
                  <Building2 className="text-brand-600" /> Advanced Assembly
                </h4>
                <p className="text-slate-600 mb-6">
                  Our state-of-the-art facilities in Tech City house the most advanced assembly lines, where every machine is built to exacting tolerances.
                </p>
             </div>
             <div className="group cursor-default">
                <div className="mb-6 overflow-hidden rounded-lg">
                   <img
                     data-strk-img-id="about-facility-2"
                     data-strk-img="industrial laboratory testing"
                     data-strk-img-ratio="16x9"
                     data-strk-img-width="1000"
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     alt="Testing Lab"
                     className="group-hover:scale-105 transition-transform duration-700"
                   />
                </div>
                <h4 className="text-2xl font-bold text-brand-900 mb-4 flex items-center gap-3">
                   <ShieldCheck className="text-brand-600" /> Rigorous Testing
                </h4>
                <p className="text-slate-600 mb-6">
                  Before any machine leaves our facility, it undergoes 72 hours of continuous testing and fine-tuning to ensure it meets our perfect folding standards.
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const ShieldCheck = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
)

export default About
