import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Shield, Truck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-tint rounded-full text-xs font-semibold text-navy uppercase tracking-wider mb-6">
              <Shield className="w-3.5 h-3.5" />
              Trusted by 200+ international buyers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight tracking-tight mb-6">
              China Sourcing Agent<br />
              <span className="text-accent">for Global Buyers</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We help businesses worldwide find reliable Chinese suppliers, verify factories,
              inspect product quality, follow production progress, and coordinate international
              shipping &mdash; all from our base in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-md"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-gray-200 text-navy font-semibold rounded-lg hover:border-navy transition-colors"
              >
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-8">
              {[
                'Supplier Verification',
                'Quality Control',
                'Shipping Management',
              ].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 text-success" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl"
              data-strk-bg-id="hero-main-bg-8f2a9c"
              data-strk-bg="[hero-desc] [hero-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
              style={{ paddingTop: '75%', backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Shipping Managed</p>
                <p className="text-sm font-bold text-navy">50+ Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="hidden" id="hero-title">China Sourcing Agent for Global Buyers</span>
      <span className="hidden" id="hero-desc">Professional factory inspection and quality control service in China manufacturing facility</span>
    </section>
  )
}
