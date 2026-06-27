import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    id: "signature",
    name: "The Signature Collection",
    description: "Our flagship line of everyday essentials — refined, minimal, unmistakably Velmora.",
    image: "https://images.unsplash.com/photo-1515562141589-47e730e5d3ca?w=800&h=1000&fit=crop",
  },
  {
    id: "artisan",
    name: "The Artisan Collection",
    description: "Hand-finished pieces with intricate detailing, inspired by heritage craftsmanship.",
    image: "https://images.unsplash.com/photo-1603972705738-5369dd5c3c6b?w=800&h=1000&fit=crop",
  },
  {
    id: "gift",
    name: "The Gift Edit",
    description: "Curated sets and pairings, beautifully boxed and ready to give.",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&h=1000&fit=crop",
  },
]

export default function Collections() {
  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-light font-medium">Curated edits</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-3 font-light">Collections</h1>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
        </div>

        <div className="space-y-16 md:space-y-24">
          {collections.map((col) => (
            <div key={col.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
              <div className={`aspect-[4/5] overflow-hidden ${col.id === "artisan" ? "md:order-2" : ""}`}>
                <img src={col.image} alt={col.name} className="w-full h-full object-cover" />
              </div>
              <div className={col.id === "artisan" ? "md:order-1" : ""}>
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light leading-tight">{col.name}</h2>
                <div className="w-10 h-0.5 bg-gold mt-5 mb-5" />
                <p className="text-sm text-muted leading-relaxed">{col.description}</p>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-[0.15em] font-medium text-gold hover:text-gold-hover transition-colors"
                >
                  View Pieces
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}