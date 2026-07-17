import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const collections = [
  {
    id: 'signature',
    name: 'The Signature Collection',
    description: 'Our most beloved pieces, crafted for everyday elegance.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=85',
    count: 5,
  },
  {
    id: 'heirloom',
    name: 'The Heirloom Edit',
    description: 'Gift-boxed sets designed to be passed down through generations.',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=85',
    count: 2,
  },
  {
    id: 'minimal',
    name: 'The Minimalist',
    description: 'Clean lines, subtle sparkle — for the understated dresser.',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=85',
    count: 3,
  },
]

export default function CollectionsPage() {
  return (
    <main className="pt-20 lg:pt-24">
      <div className="bg-ink-50 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-subheading">Curated Edits</p>
          <h1 className="section-heading mt-2">Collections</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((col) => (
            <Link
              key={col.id}
              to="/shop"
              className="group"
            >
              <div className="aspect-[4/5] overflow-hidden bg-ink-100">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5">
                <p className="text-xs uppercase tracking-widest text-ink-400">
                  {col.count} Pieces
                </p>
                <h3 className="font-serif text-xl text-ink-900 mt-1 group-hover:text-gold-700 transition-colors">
                  {col.name}
                </h3>
                <p className="text-ink-500 text-sm mt-2 leading-relaxed font-light">
                  {col.description}
                </p>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-ink-700 mt-4 group-hover:text-gold-700 transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}