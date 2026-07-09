import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Microscope, Github, Twitter, Mail } from 'lucide-react'

const FooterSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <footer ref={containerRef} className="relative py-20 px-4 md:px-8 bg-midnight border-t border-surface-light/30">
      <div
        className="absolute inset-0 opacity-10"
        data-strk-bg-id="footer-bg-4c8a2f"
        data-strk-bg="[footer-tagline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <Microscope className="w-8 h-8 text-primary" />
              <span className="font-heading text-2xl font-bold text-text-primary">MicroCosmos</span>
            </div>
            <p id="footer-tagline" className="text-text-secondary max-w-md">
              Exploring the invisible universe that exists all around us, one microscopic wonder at a time.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300 text-text-secondary">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300 text-text-secondary">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface-light flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300 text-text-secondary">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-light/30 text-center">
          <p className="text-text-secondary text-sm">
            © 2026 MicroCosmos. All rights reserved. Images captured through electron and optical microscopy.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
