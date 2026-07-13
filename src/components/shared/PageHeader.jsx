import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function PageHeader({ title, subtitle, backgroundId = 'page-header-bg' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [title, subtitle])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-slate-900 py-20 md:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        data-strk-bg-id={backgroundId}
        data-strk-bg="[page-header-subtitle] [page-header-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 id="page-header-title" className="text-3xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p id="page-header-subtitle" className="mx-auto max-w-2xl text-lg text-slate-200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
