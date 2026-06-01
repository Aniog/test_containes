import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Microscope, Mail, Twitter, Instagram, Youtube } from 'lucide-react'

const footerLinks = {
  Explore: ['Gallery', 'Specimens', 'Worlds', 'Techniques'],
  Learn: ['About', 'Science Blog', 'Glossary', 'FAQ'],
  Connect: ['Newsletter', 'Community', 'Submit Image', 'Contact'],
}

const socials = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Mail, label: 'Email' },
]

export default function FooterSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <footer ref={containerRef} className="bg-gray-950 border-t border-gray-800 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* CTA Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <div
            className="absolute inset-0"
            data-strk-bg-id="footer-bg-mc-x9y8z7"
            data-strk-bg="[footer-cta-desc] [footer-cta-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/40" />
          <div className="relative z-10 p-10 md:p-14">
            <h3
              id="footer-cta-title"
              className="text-3xl md:text-4xl font-bold text-white mb-3"
            >
              Dive Deeper Into the Invisible
            </h3>
            <p
              id="footer-cta-desc"
              className="text-gray-300 text-lg mb-6 max-w-lg"
            >
              Subscribe to our newsletter and receive weekly microscopy images, science stories, and discoveries from the nano-world.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-full bg-gray-800/80 border border-gray-600 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-teal-400"
              />
              <button className="px-6 py-3 rounded-full bg-teal-400 text-gray-950 font-semibold text-sm hover:bg-teal-300 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Microscope className="w-5 h-5 text-teal-400" />
              <span className="text-white font-bold">
                Micro<span className="text-teal-400">Cosmos</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Revealing the extraordinary universe hidden in the smallest things.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-400/40 transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Image Credits'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
