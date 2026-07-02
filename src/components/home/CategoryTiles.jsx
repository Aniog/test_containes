import StockImage from '../common/StockImage.jsx'

const CategoryTiles = ({ categories }) => (
  <section id="collections" className="bg-velmora-ivory px-5 py-16 text-velmora-ink lg:px-10 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-clay">Shop by category</p>
        <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-ink md:text-6xl">Find your signature glint</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((category) => (
          <a key={category.name} href="#shop" className="group relative min-h-[24rem] overflow-hidden border border-velmora-line bg-velmora-forest text-velmora-cream shadow-soft">
            <StockImage
              id={category.imageId}
              query={`[${category.descId}] [${category.titleId}]`}
              ratio="3x4"
              width="900"
              alt={`${category.name} jewelry`}
              className="h-full min-h-[24rem] w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 transition duration-500 group-hover:translate-y-[-0.5rem]">
              <h3 id={category.titleId} className="font-serif text-5xl font-semibold text-velmora-cream">{category.name}</h3>
              <p id={category.descId} className="mt-3 max-w-xs text-sm leading-6 text-velmora-ivory/85">{category.description}</p>
              <span className="mt-5 inline-flex border-b border-velmora-gold pb-1 text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">Explore</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default CategoryTiles
