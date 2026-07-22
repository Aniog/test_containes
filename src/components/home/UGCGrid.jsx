import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Instagram } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'

export function UGCGrid() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const posts = [
    { id: '1', handle: '@emily.styles', text: 'Everyday elegance.', query: 'gold necklace on neck aesthetic minimalist' },
    { id: '2', handle: '@sarah.creates', text: 'Golden hour glow.', query: 'woman wearing gold earrings side profile soft light' },
    { id: '3', handle: '@minimal.muse', text: 'Details matter.', query: 'gold rings stacked hands editorial close up' },
    { id: '4', handle: '@chic.diary', text: 'Morning layers.', query: 'layered gold necklaces elegant style' },
  ]

  return (
    <section className="py-24 overflow-hidden bg-secondary/30" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-2">Spotted In Velmora</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm flex items-center gap-2">
            <Instagram className="w-4 h-4" /> Tag us @velmorajewelry to be featured
          </p>
        </div>
        <Link to="/journal" className="uppercase tracking-widest text-sm font-medium hover:text-primary transition-colors hover-underline pb-1">
          Follow Along
        </Link>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="relative group aspect-[4/5] bg-secondary overflow-hidden">
              <img 
                data-strk-img-id={`ugc-${post.id}`}
                data-strk-img={`${post.query}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`Instagram post by ${post.handle}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-serif text-lg leading-snug mb-2 drop-shadow-sm">{`"${post.text}"`}</p>
                <p className="text-white/80 font-sans text-xs tracking-widest uppercase">{post.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
