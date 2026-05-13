import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  { id: 'cat-mammals', label: 'Mammals', desc: 'Warm-blooded vertebrates that nurse their young', emoji: '🦁' },
  { id: 'cat-birds', label: 'Birds', desc: 'Feathered creatures that rule the skies', emoji: '🦅' },
  { id: 'cat-reptiles', label: 'Reptiles', desc: 'Cold-blooded scaly survivors of ancient times', emoji: '🐊' },
  { id: 'cat-ocean', label: 'Ocean Life', desc: 'Mysterious creatures of the deep blue sea', emoji: '🐋' },
]

const CategoryCard = ({ cat }) => (
  <div className="relative rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
    <div
      className="w-full h-56"
      data-strk-bg-id={`cat-bg-${cat.id}`}
      data-strk-bg={`[${cat.id}]`}
      data-strk-bg-ratio="4x3"
      data-strk-bg-width="600"
      style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <div className="text-3xl mb-1">{cat.emoji}</div>
      <h3 id={cat.id} className="text-xl font-bold text-white mb-1">{cat.label}</h3>
      <p className="text-sm text-white/75">{cat.desc}</p>
    </div>
  </div>
)

const CategoriesSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 px-4 md:px-8 bg-[#1a2e1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-3">Browse by Type</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#f5f0e8]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Animal Categories
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection
