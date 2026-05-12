import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const animals = [
  {
    id: 'lion',
    titleId: 'feat-title-lion',
    descId: 'feat-desc-lion',
    title: 'African Lion',
    description: 'The king of the savanna, known for its majestic mane and powerful roar that echoes for miles.',
    tag: 'Mammal',
    tagColor: 'bg-amber-100 text-amber-800',
    imgId: 'feat-img-lion-7f3a1b',
    imgRatio: '4x3',
  },
  {
    id: 'eagle',
    titleId: 'feat-title-eagle',
    descId: 'feat-desc-eagle',
    title: 'Bald Eagle',
    description: 'A symbol of freedom and power, soaring high above rivers and forests with incredible eyesight.',
    tag: 'Bird',
    tagColor: 'bg-sky-100 text-sky-800',
    imgId: 'feat-img-eagle-2c9d4e',
    imgRatio: '4x3',
  },
  {
    id: 'dolphin',
    titleId: 'feat-title-dolphin',
    descId: 'feat-desc-dolphin',
    title: 'Bottlenose Dolphin',
    description: 'Highly intelligent marine mammals celebrated for their playful nature and complex communication.',
    tag: 'Marine',
    tagColor: 'bg-teal-100 text-teal-800',
    imgId: 'feat-img-dolphin-5e8f2a',
    imgRatio: '4x3',
  },
  {
    id: 'tiger',
    titleId: 'feat-title-tiger',
    descId: 'feat-desc-tiger',
    title: 'Bengal Tiger',
    description: 'The largest wild cat on Earth, with striking orange and black stripes that camouflage in tall grass.',
    tag: 'Mammal',
    tagColor: 'bg-amber-100 text-amber-800',
    imgId: 'feat-img-tiger-9b1c6d',
    imgRatio: '4x3',
  },
  {
    id: 'penguin',
    titleId: 'feat-title-penguin',
    descId: 'feat-desc-penguin',
    title: 'Emperor Penguin',
    description: 'The tallest and heaviest penguin species, thriving in the extreme cold of Antarctica.',
    tag: 'Bird',
    tagColor: 'bg-sky-100 text-sky-800',
    imgId: 'feat-img-penguin-3d7e0f',
    imgRatio: '4x3',
  },
  {
    id: 'elephant',
    titleId: 'feat-title-elephant',
    descId: 'feat-desc-elephant',
    title: 'African Elephant',
    description: 'The largest land animal on Earth, known for its remarkable memory and deep family bonds.',
    tag: 'Mammal',
    tagColor: 'bg-amber-100 text-amber-800',
    imgId: 'feat-img-elephant-6a4b8c',
    imgRatio: '4x3',
  },
]

export default function FeaturedAnimals() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="featured" ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p id="featured-eyebrow" className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-3">
            Meet the Residents
          </p>
          <h2
            id="featured-heading"
            className="text-gray-900 text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Featured Animals
          </h2>
          <p id="featured-subheading" className="text-gray-500 text-lg max-w-xl mx-auto">
            Remarkable creatures from every corner of the globe, each with a unique story to tell
          </p>
        </div>

        {/* Animal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal) => (
            <div
              key={animal.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={animal.title}
                  data-strk-img-id={animal.imgId}
                  data-strk-img={`[${animal.descId}] [${animal.titleId}] [featured-subheading] [featured-heading]`}
                  data-strk-img-ratio={animal.imgRatio}
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-gray-100"
                />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${animal.tagColor}`}>
                  {animal.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  id={animal.titleId}
                  className="text-gray-900 text-xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {animal.title}
                </h3>
                <p id={animal.descId} className="text-gray-500 text-sm leading-relaxed">
                  {animal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
