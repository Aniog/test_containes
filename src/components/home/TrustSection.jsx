import { useEffect, useRef } from 'react'
import { Building2, Users, Package, Globe, Award, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const stats = [
  { icon: Building2, value: '5,000+', label: 'Verified Suppliers', desc: 'In our network across 30+ industrial clusters' },
  { icon: Users, value: '800+', label: 'Clients Worldwide', desc: 'From startups to Fortune 500 companies' },
  { icon: Package, value: '15,000+', label: 'Orders Managed', desc: 'Successfully sourced and delivered' },
  { icon: Clock, value: '12+', label: 'Years Experience', desc: 'Sourcing from China since 2012' },
]

export default function TrustSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Why Trust Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
            Proven Track Record
          </h2>
          <p className="mt-4 text-navy-500 text-lg">
            Numbers that speak for themselves. We have been helping businesses source from China for over a decade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-brand-600" />
                </div>
                <div className="text-3xl font-extrabold text-navy-900 mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-navy-700 mb-1">{stat.label}</div>
                <div className="text-xs text-navy-400">{stat.desc}</div>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-brand-50 rounded-xl p-6 md:p-8">
            <Award className="w-8 h-8 text-brand-600 mb-4" />
            <h3 className="text-lg font-semibold text-navy-900 mb-2">ISO-Certified Process</h3>
            <p className="text-sm text-navy-500 leading-relaxed">
              Our quality management follows ISO 9001 standards. Every inspection is documented with detailed reports and photos.
            </p>
          </div>

          <div className="bg-brand-50 rounded-xl p-6 md:p-8">
            <Globe className="w-8 h-8 text-brand-600 mb-4" />
            <h3 className="text-lg font-semibold text-navy-900 mb-2">On-the-Ground Presence</h3>
            <p className="text-sm text-navy-500 leading-relaxed">
              Our team is based in Shanghai with regional offices in Shenzhen, Yiwu, and Guangzhou — close to major manufacturing hubs.
            </p>
          </div>

          <div className="bg-brand-50 rounded-xl p-6 md:p-8">
            <Building2 className="w-8 h-8 text-brand-600 mb-4" />
            <h3 className="text-lg font-semibold text-navy-900 mb-2">Factory Audits You Can Trust</h3>
            <p className="text-sm text-navy-500 leading-relaxed">
              We conduct in-person audits covering production capacity, certifications, equipment, workforce, and quality systems.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-navy-900 rounded-xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="aspect-[16/9] rounded-lg overflow-hidden bg-navy-800">
                <img
                  alt="SSourcing China team at factory"
                  data-strk-img-id="trust-team-img-a1b3c5"
                  data-strk-img="professional sourcing team China factory visit inspection"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  className="w-full h-full object-cover"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                We are not a platform — we are your sourcing partner
              </h3>
              <p className="text-navy-200 leading-relaxed mb-4">
                Unlike B2B marketplaces where you are left to figure things out on your own, we take full responsibility for your sourcing project. From supplier identification to final delivery, we are accountable for results.
              </p>
              <p className="text-navy-200 leading-relaxed">
                Every client gets a dedicated account manager who knows your products, your standards, and your business goals. No automated responses, no ticket systems — just real people solving real problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}