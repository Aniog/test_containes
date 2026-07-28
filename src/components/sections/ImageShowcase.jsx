import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const ImageShowcase = ({ idPrefix = 'showcase', title, description, imageAlt, ratio = '4x3' }) => {
  const containerRef = useRef(null)
  const titleId = `${idPrefix}-title`
  const descriptionId = `${idPrefix}-description`
  const contextId = `${idPrefix}-context`

  useEffect(() => {
    let dispose
    const frameId = window.requestAnimationFrame(() => {
      if (!containerRef.current) {
        return
      }

      dispose = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof dispose === 'function') {
        dispose()
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="rounded-3xl border border-line bg-white p-3 shadow-soft">
      <img
        alt={imageAlt}
        className="h-full min-h-[280px] w-full rounded-[1.25rem] object-cover"
        data-strk-img-id={`${idPrefix}-img-h8m3q2`}
        data-strk-img={`[${contextId}] [${descriptionId}] [${titleId}]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width="900"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      <div className="px-3 pb-3 pt-4">
        <p id={contextId} hidden>
          China factory team inspecting products, checking packaging, verifying suppliers, following production, and preparing export shipments for overseas buyers
        </p>
        <h3 id={titleId} className="text-lg font-semibold text-brand-navy">{title}</h3>
        <p id={descriptionId} className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
      </div>
    </div>
  )
}

export default ImageShowcase
