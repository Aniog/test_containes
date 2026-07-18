import { Link } from 'react-router-dom'

const CollectionHero = () => {
  return (
    <section className="bg-velvet pb-20 pt-32 text-ivory md:pb-24 md:pt-36">
      <div className="content-wrap">
        <p className="editorial-kicker text-ivory/65">Demi-fine essentials</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h1 className="max-w-3xl text-5xl leading-none text-ivory sm:text-6xl md:text-7xl">Crafted to be Treasured</h1>
            <p className="max-w-xl text-sm leading-7 text-ivory/75 md:text-base">
              Premium demi-fine jewelry designed for gifting, layering, and the quiet confidence of everyday polish.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="button-primary">Shop the Collection</Link>
              <a href="#story" className="button-secondary border-white/20 text-ivory hover:text-ivory">Discover the Story</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollectionHero
