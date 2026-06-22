import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const FooterSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <footer ref={containerRef} className="relative py-20 bg-slate-950 border-t border-slate-800/50">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="footer-bg-i7j9k1"
        data-strk-bg="[footer-tagline] [footer-brand]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-slate-950/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="footer-brand" className="text-3xl font-bold text-white mb-3">
          MicroCosmos
        </h2>
        <p id="footer-tagline" className="text-slate-400 text-lg mb-8 max-w-lg mx-auto">
          Revealing the extraordinary beauty of the microscopic world through science and photography.
        </p>
        <div className="flex items-center justify-center gap-6 mb-8">
          <a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
            About
          </a>
          <a href="#gallery" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
            Gallery
          </a>
          <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
            Research
          </a>
          <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
            Contact
          </a>
        </div>
        <div className="border-t border-slate-800/50 pt-6">
          <p className="text-slate-500 text-sm">
            © 2026 MicroCosmos. All rights reserved. Exploring the invisible world.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
