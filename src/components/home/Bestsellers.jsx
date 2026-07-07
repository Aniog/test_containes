import { Link } from 'react-router-dom'

const BESTSELLERS = [
  {
    id: 'vivid-aura',
    name: 'Vivid Aura Jewels',
    price: 42,
    images: ['[vivid-aura-desc] [vivid-aura-title] gold ear cuff', '[vivid-aura-desc] [vivid-aura-title] gold ear cuff lifestyle close up']
  },
  {
    id: 'majestic-flora',
    name: 'Majestic Flora Nectar',
    price: 68,
    images: ['[majestic-flora-desc] [majestic-flora-title] gold floral necklace', '[majestic-flora-desc] [majestic-flora-title] gold floral necklace worn on neck']
  },
  {
    id: 'golden-sphere',
    name: 'Golden Sphere Huggies',
    price: 38,
    images: ['[golden-sphere-desc] [golden-sphere-title] gold chunk dome huggies', '[golden-sphere-desc] [golden-sphere-title] gold chunky dome huggies on ear']
  },
  {
    id: 'amber-lace',
    name: 'Amber Lace Earrings',
    price: 54,
    images: ['[amber-lace-desc] [amber-lace-title] gold textured filigree drop earrings', '[amber-lace-desc] [amber-lace-title] gold textured filigree drop earrings fashion']
  },
  {
    id: 'royal-heirloom',
    name: 'Royal Heirloom Set',
    price: 95,
    images: ['[royal-heirloom-desc] [royal-heirloom-title] gold earring necklace gift set', '[royal-heirloom-desc] [royal-heirloom-title] gold earring necklace gift set packaging']
  }
]

export const Bestsellers = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Bestsellers</h2>
          <Link to="/shop" className="text-sm font-serif uppercase tracking-widest text-foreground hover:text-primary transition-colors pb-1 border-b border-border/50 hover:border-primary">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {BESTSELLERS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary w-full">
                {/* Primary Image */}
                <img 
                  data-strk-img-id={`product-${product.id}-1`}
                  data-strk-img={product.images[0]}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                />
                {/* Secondary Image (Hover) */}
                <img 
                  data-strk-img-id={`product-${product.id}-2`}
                  data-strk-img={product.images[1]}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                />
                
                {/* Quick Add Button */}
                <button 
                  className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm text-foreground py-2 text-xs font-serif uppercase tracking-widest opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 active:bg-primary active:text-primary-foreground"
                  onClick={(e) => { e.preventDefault(); /* Add to cart logic later */ }}
                >
                  Quick Add
                </button>
              </div>

              <div className="text-center">
                <h3 id={`${product.id}-title`} className="font-serif text-sm uppercase tracking-widest mb-1 text-foreground">
                  {product.name}
                </h3>
                <p id={`${product.id}-desc`} className="font-sans text-sm text-muted-foreground">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}