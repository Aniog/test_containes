import { Link } from 'react-router-dom'
import { StockBackground } from '@/components/ui/StockImage'

const categories = [
  { id: 'cat-earrings', label: 'Earrings', query: 'gold earrings on model dark background', to: '/shop?category=earrings' },
  { id: 'cat-necklaces', label: 'Necklaces', query: 'gold necklace on model editorial jewelry', to: '/shop?category=necklaces' },
  { id: 'cat-huggies', label: 'Huggies', query: 'gold huggie earrings stacked ear close up', to: '/shop?category=huggies' },
]

export function CategoryTiles() {
  return (
    <section className="bg-[#F2EFE9] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#B9975B]">
          Shop by Category
        </p>
        <h2 className="mb-12 text-center font-serif text-3xl font-light uppercase tracking-[0.08em] text-[#1A1614] md:text-4xl">
          Find Your Finish
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative h-[420px] overflow-hidden md:h-[520px]"
            >
              <StockBackground
                id={cat.id}
                query={cat.query}
                ratio="3x4"
                width="700"
                className="absolute inset-0 h-full w-full bg-[#2A211C] transition-transform duration-700 group-hover:scale-105"
              >
                <div className="absolute inset-0 bg-[#1A1614]/30 transition-colors duration-300 group-hover:bg-[#1A1614]/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="border border-[#F9F7F2]/40 bg-[#F9F7F2]/10 px-8 py-3 font-serif text-lg uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all duration-300 group-hover:border-[#B9975B] group-hover:bg-[#B9975B]/90 group-hover:text-white">
                    {cat.label}
                  </span>
                </div>
              </StockBackground>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
