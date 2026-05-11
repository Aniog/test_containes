import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import AICapabilities from '../components/product/AICapabilities'
import ContactSection from '../components/product/ContactSection'

export default function Product() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef}>
      {/* Page hero */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #6366f1 1px, transparent 1px),
                linear-gradient(to bottom, #6366f1 1px, transparent 1px)
              `,
              backgroundSize: '64px 64px',
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-semibold mb-6">
            Product
          </div>
          <h1 id="product-title" className="text-5xl font-bold text-slate-900 tracking-tight mb-4">
            The AI engine behind every site
          </h1>
          <p id="product-subtitle" className="text-slate-500 text-xl max-w-2xl mx-auto">
            Explore the technology that makes NeuralBuild the most powerful AI website builder on the market.
          </p>
        </div>
      </section>

      <AICapabilities />
      <ContactSection />
    </main>
  )
}
