import { Link } from 'react-router-dom'
import { StrkImage, StrkImageContainer } from '@/components/ui/StrkImage'
import { categories } from '@/data/products'

const catMap = {
  earrings: { to: '/shop?category=Earrings', imgId: 'cat-earrings-a1b2', desc: 'Ear cuffs, drops and statement studs' },
  necklaces: { to: '/shop?category=Necklaces', imgId: 'cat-necklaces-c3d4', desc: 'Pendants, chains and layered sets' },
  huggies: { to: '/shop?category=Huggies', imgId: 'cat-huggies-e5f6', desc: 'Polished dome huggies for every day' },
}

export default function CategoryTiles() {
  return (
    <StrkImageContainer as="section" deps={[]} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Find Your Piece</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal tracking-wide">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const meta = catMap[cat.id]
            const titleId = `cat-title-${cat.id}`
            const descId = `cat-desc-${cat.id}`
            return (
              <Link
                key={cat.id}
                to={meta.to}
                className="group relative overflow-hidden aspect-[4/5] bg-sand"
              >
                <StrkImage
                  imgId={meta.imgId}
                  query={`[${descId}] [${titleId}] gold jewelry editorial`}
                  ratio="4x5"
                  width={700}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/45 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <h3
                    id={titleId}
                    className="font-serif text-cream text-3xl md:text-4xl uppercase tracking-widest2"
                  >
                    {cat.name}
                  </h3>
                  <p
                    id={descId}
                    className="mt-2 text-cream/85 text-xs uppercase tracking-widest2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-[200px]"
                  >
                    {meta.desc}
                  </p>
                  <span className="mt-4 text-cream text-[11px] uppercase tracking-widest2 border-b border-cream/60 pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Shop Now
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </StrkImageContainer>
  )
}
