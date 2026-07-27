import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, FileText, ClipboardCheck, Ship, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: '1. Requirements Analysis',
    description: 'We discuss your product needs, budget, quality standards, and target markets to create a detailed sourcing brief.',
  },
  {
    icon: FileText,
    title: '2. Supplier Shortlisting',
    description: 'We research and screen suppliers, request quotations, and present you with 3-5 qualified candidates.',
  },
  {
    icon: ClipboardCheck,
    title: '3. Verification & Sampling',
    description: 'We audit shortlisted factories, verify credentials, arrange samples, and negotiate terms on your behalf.',
  },
  {
    icon: Ship,
    title: '4. Production & Delivery',
    description: 'We monitor production, conduct quality inspections, and manage shipping and customs clearance to your door.',
  },
]

export default function ProcessSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-surface-800 mb-4">
            How Our Sourcing Process Works
          </h2>
          <p className="text-surface-500 text-lg">
            A structured, transparent approach from inquiry to delivery.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-surface-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg shadow-brand-500/20">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-surface-800 mb-3">{step.title}</h3>
                <p className="text-surface-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}