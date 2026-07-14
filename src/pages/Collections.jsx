import { Link } from 'react-router-dom'

const collections = [
  {
    name: 'The Golden Hour',
    description: 'Warm-toned pieces that glow in sunset light. Our signature gold collection.',
    query: 'gold jewelry collection warm light editorial display',
    filter: 'gold',
  },
  {
    name: 'Everyday Essentials',
    description: 'Understated pieces designed to be worn every single day, from morning to midnight.',
    query: 'minimal everyday gold jewelry collection flat lay',
    filter: 'earrings',
  },
  {
    name: 'The Gift Edit',
    description: 'Curated gift sets and bestsellers, beautifully boxed and ready to give.',
    query: 'luxury jewelry gift set box premium packaging',
    filter: 'sets',
  },
]

export default function Collections() {
  return (
    <div className="min-h-screen bg-cream-100 pt-24 pb-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <h1 className="heading-serif text-3xl md:text-5xl text-warm-900 mb-4">Collections</h1>
          <p className="text-sm text-warm-800/60 tracking-wide max-w-md mx-auto">
            Curated worlds of Velmora jewelry. Each collection tells a story.
          </p>
        </div>

        <div className="space-y-8">
          {collections.map((col, i) => (
            <Link
              key={i}
              to="/shop"
              className="group grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden bg-white border border-cream-300/60 hover:shadow-lg transition-shadow duration-500"
            >
              <div className={`aspect-[4/3] overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  data-strk-img-id={`collection-${i}`}
                  data-strk-img={`[collection-title-${i}] ${col.query}`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className={`flex flex-col justify-center p-8 md:p-12 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="text-xs tracking-[0.2em] uppercase text-gold-500 font-medium mb-3">Collection</p>
                <h2 id={`collection-title-${i}`} className="heading-serif text-2xl md:text-3xl text-warm-900 mb-4">
                  {col.name}
                </h2>
                <p className="text-sm text-warm-800/70 leading-relaxed mb-6 max-w-sm">
                  {col.description}
                </p>
                <span className="btn-outline-gold inline-block self-start">
                  Shop Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
