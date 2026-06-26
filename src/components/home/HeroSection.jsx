import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const highlights = [
  'Precision-engineered folding for sheet metal',
  'Double folding machines built for heavy-duty work',
  'User-friendly controls with industrial durability',
]

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="relative overflow-hidden bg-navy" ref={containerRef}>
      <div className="absolute inset-0 opacity-20">
        <div
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="industrial sheet metal folding machine factory"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-cover bg-center"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <span className="inline-block text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Industrial Machinery
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-warm-white leading-tight tracking-tight mb-6">
            Precision Sheet Metal
            <br />
            <span className="text-gold">Folding Machines</span>
          </h1>
          <p className="text-lg text-text-on-dark/70 leading-relaxed mb-8 max-w-xl">
            Discover ARTITECT MACHINERY&apos;s range of double folding machines,
            metal folders, and sheet metal folding equipment — built for
            accuracy, reliability, and ease of operation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-gold text-navy hover:bg-gold/90 transition-colors"
            >
              View Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border border-text-on-dark/30 text-text-on-dark hover:bg-white/10 transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2 text-sm text-text-on-dark/60">
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                {h}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}