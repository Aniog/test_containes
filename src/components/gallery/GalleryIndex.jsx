import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { galleries } from './galleryData'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function GalleryIndex() {
  const imgRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imgRef.current) {
        ImageHelper.loadImages(strkImgConfig, imgRef.current)
      }
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-cosmic-black pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-nebula-light block mb-4">
            ギャラリー · Gallery
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-star-white tracking-wide mb-4">
            Cosmic Archives
          </h1>
          <p className="font-sans text-sm text-star-dim font-light max-w-xl leading-relaxed">
            Curated collections of deep-space imagery — from stellar nurseries to the edge of the observable universe.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          ref={imgRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]"
        >
          {galleries.map((gallery) => (
            <motion.div key={gallery.id} variants={itemVariants}>
              <Link
                to={`/gallery/${gallery.id}`}
                className="group block bg-cosmic-black overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-[3/2]">
                  <img
                    alt={gallery.title}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={gallery.imgId}
                    data-strk-img={gallery.imgQuery}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Count badge */}
                  <div className="absolute top-4 right-4 font-mono text-[10px] text-star-dim border border-white/10 px-2 py-1">
                    {gallery.count} objects
                  </div>

                  {/* Japanese label */}
                  <span
                    id={`gallery-${gallery.id}-label`}
                    className="absolute bottom-4 left-4 font-serif text-2xl font-light opacity-20 text-white"
                  >
                    {gallery.label}
                  </span>
                </div>

                <div className="p-6 border-t border-white/[0.06]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2
                        id={`gallery-${gallery.id}-title`}
                        className="font-serif text-xl font-light text-star-white tracking-wide mb-1"
                      >
                        {gallery.title}
                      </h2>
                      <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-star-dim">
                        {gallery.subtitle}
                      </span>
                    </div>
                    <span
                      className="w-6 h-px mt-3 transition-all duration-300 group-hover:w-10"
                      style={{ backgroundColor: gallery.accent }}
                    />
                  </div>
                  <p
                    id={`gallery-${gallery.id}-desc`}
                    className="font-sans text-xs text-star-dim mt-3 leading-relaxed font-light line-clamp-2"
                  >
                    {gallery.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
