import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ugcPosts } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function UgcReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-ivory overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-8 md:mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl text-velmora-deep"
        >
          Seen on You
        </motion.h2>
      </div>

      <div className="flex gap-4 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-10 pb-4">
        {ugcPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="relative flex-shrink-0 w-[170px] md:w-[220px] aspect-[9/16] overflow-hidden group"
          >
            <img
              data-strk-img-id={`ugc-${post.id}`}
              data-strk-img={`[ugc-caption-${post.id}] gold jewelry worn on model warm editorial`}
              data-strk-img-ratio="9x16"
              data-strk-img-width={500}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={post.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-deep/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p
                id={`ugc-caption-${post.id}`}
                className="font-serif text-lg md:text-xl italic text-velmora-cream"
              >
                {post.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
