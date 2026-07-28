import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function PageHero({ eyebrow, title, subtitle, breadcrumb }) {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-primary-dark">
      <div className="absolute inset-0 opacity-10"
        data-strk-bg-id={`pagehero-${title.replace(/\s+/g, "-").toLowerCase()}`}
        data-strk-bg="[pagehero-subtitle] [pagehero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary-dark/70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {breadcrumb && (
          <nav className="flex items-center gap-1.5 text-xs text-slate-300 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{breadcrumb}</span>
          </nav>
        )}
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
            {eyebrow}
          </p>
        )}
        <h1 id="pagehero-title" className="text-3xl md:text-5xl font-bold text-white tracking-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p id="pagehero-subtitle" className="mt-4 text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
