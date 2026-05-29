import { useRef, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { galleries } from './galleryData'

// Varying tile sizes for editorial grid layout
const tileClasses = [
  'col-span-2 row-span-2', // large
  'col-span-1 row-span-1', // small
  'col-span-1 row-span-1', // small
  'col-span-1 row-span-2', // tall
  'col-span-1 row-span-1', // small
  'col-span-1 row-span-1', // small
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden:  { opacity: 0, scale: 0.97, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function GalleryDetail() {
  const { id } = useParams()
  const imgRef = useRef(null)
  const gallery = galleries.find((g) => g.id === id)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imgRef.current) {
        ImageHelper.loadImages(strkImgConfig, imgRef.current)
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [id])

  if (!gallery) return <Navigate to="/gallery" replace />

  return (
    <div className="min-h-screen bg-cosmic-black pt-24 pb-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.35em] text-star-dim hover:text-star-white transition-colors duration-300"
          >
            <ArrowLeft size={12} className="transition-transform duration-300 group-hover:-translate-x-1" />
            All Galleries
          </Link>
        </motion.div>

        {/* Gallery header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-end gap-6 mb-4">
            <span
              className="font-serif text-6xl font-light opacity-15"
              style={{ color: gallery.accent }}
            >
              {gallery.label}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-star-white tracking-wide mb-2">
            {gallery.title}
          </h1>
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-star-dim block mb-4">
            {gallery.subtitle}
          </span>
          <p className="font-sans text-sm text-star-dim font-light max-w-xl leading-relaxed">
            {gallery.desc}
          </p>
        </motion.div>

        {/* Masonry-style CSS Grid */}
        <motion.div
          ref={imgRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-1"
        >
          {gallery.items.map((item, i) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`group relative overflow-hidden bg-cosmic-void cursor-pointer ${tileClasses[i % tileClasses.length]}`}
            >
              <img
                alt={item.title}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={item.imgId}
                data-strk-img={item.imgQuery}
                data-strk-img-ratio="1x1"
                data-strk-img-width="600"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Item info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <h3
                  id={`${item.id}-title`}
                  className="font-serif text-sm font-light text-star-white tracking-wide"
                >
                  {item.title}
                </h3>
                <span
                  id={`${item.id}-sub`}
                  className="font-mono text-[10px] text-star-dim"
                >
                  {item.sub}
                </span>
              </div>

              {/* Index number */}
              <div className="absolute top-3 right-3 font-mono text-[9px] text-white/20">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
