import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const entries = [
  {
    id: 'journal-1',
    title: 'How to build a softly layered jewelry wardrobe',
    copy: 'A refined mix of huggies, pendants, and simple shines for mornings that need ease.',
  },
  {
    id: 'journal-2',
    title: 'The gift edit: pieces that feel personal',
    copy: 'Thoughtful demi-fine styles that arrive beautifully and wear effortlessly.',
  },
  {
    id: 'journal-3',
    title: 'Warm metallics and what to wear with them',
    copy: 'Pairing gold tones with silk, knits, tailoring, and understated evening looks.',
  },
]

const Journal = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [])

  useEffect(() => {
    document.title = 'Velmora Journal'
  }, [])

  return (
    <div ref={containerRef} className="section-frame py-12 sm:py-16">
      <SectionHeading
        eyebrow="Journal"
        title="Notes on styling, gifting, and the details that last"
        description="An editorial corner for the Velmora woman — calm inspiration for how jewelry lives in a modern wardrobe."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {entries.map((entry) => (
          <article key={entry.id} className="overflow-hidden rounded-3xl border border-line bg-parchment shadow-card">
            <img
              alt={entry.title}
              className="aspect-[4/3] w-full object-cover"
              data-strk-img-id={`${entry.id}-image-y31`}
              data-strk-img={`[${entry.id}-copy] [${entry.id}-title]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="p-7">
              <p id={`${entry.id}-title`} className="font-display text-3xl leading-8 text-obsidian">
                {entry.title}
              </p>
              <p id={`${entry.id}-copy`} className="mt-4 text-sm leading-7 text-taupe">
                {entry.copy}
              </p>
              <button type="button" className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-button text-ink">
                Read entry
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Journal
