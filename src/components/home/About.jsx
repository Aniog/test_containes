import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle } from 'lucide-react'

const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '50+', label: 'Countries Served' },
  { value: '10,000+', label: 'Machines Delivered' },
  { value: '99.8%', label: 'Customer Satisfaction' },
]

const highlights = [
  'Industry-leading bend accuracy and repeatability',
  'Comprehensive range from manual to fully automated',
  'Custom solutions for specialized applications',
  'Full lifecycle support from installation to maintenance',
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C8963E] mb-3">About Us</span>
            <h2 id="about-title" className="text-3xl md:text-4xl font-extrabold text-[#0F1B2D] tracking-tight mb-6">
              Crafting the Future of
              <br />
              <span className="text-[#2E7DBF]">Metal Folding</span>
            </h2>
            <p id="about-subtitle" className="text-[#5A6275] leading-relaxed mb-6">
              Founded in 1998, Artitect Machinery has grown from a small workshop to a global leader in metal folding technology. Our mission is simple: deliver the most precise, reliable, and user-friendly folding machines on the market.
            </p>
            <p className="text-[#5A6275] leading-relaxed mb-8">
              Every machine we build reflects our commitment to engineering excellence. From the selection of raw materials to final quality inspection, we maintain rigorous standards that our customers have come to rely on for over two decades.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C8963E] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#1A1A2E] font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-extrabold text-[#0F1B2D]">{stat.value}</div>
                  <div className="text-xs text-[#5A6275] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                alt="Artitect Machinery workshop"
                data-strk-img-id="about-workshop-v4w5x6"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#0F1B2D] text-white p-6 rounded-xl shadow-lg hidden md:block">
              <div className="text-3xl font-extrabold text-[#C8963E]">25+</div>
              <div className="text-sm text-white/70 mt-1">Years of<br />Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
