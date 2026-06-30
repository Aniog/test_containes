import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import ProductCard from '@/components/storefront/ProductCard'
import ProductImage from '@/components/storefront/ProductImage'
import { categories, products, testimonials, ugcPosts } from '@/data/products'

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function HomePage({ onAddToCart }) {
  return (
    <main className="bg-ivory text-espresso">
      <section className="relative min-h-[92vh] overflow-hidden bg-espresso text-ivory">
        <ProductImage imageId="hero-jewelry-model-bg-e72f4a" alt="Warm-lit gold necklace on a model" className="absolute inset-0 h-full w-full object-cover opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/35 to-espresso/10" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 pt-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-24">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-champagne">Demi-fine gold jewelry</p>
            <h1 id="hero-title" className="font-serif text-6xl leading-[0.92] text-ivory sm:text-7xl lg:text-8xl">Crafted to be Treasured</h1>
            <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-ivory/85 sm:text-lg">Warm, luminous essentials designed for gifting, self-purchase, and the quiet rituals of everyday elegance.</p>
            <Link to="/shop" className="mt-9 inline-flex items-center gap-3 rounded-full bg-champagne px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] text-espresso transition hover:bg-ivory">Shop the Collection <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
      <div className="border-y border-taupe bg-porcelain py-3 text-center text-[0.72rem] font-bold uppercase tracking-[0.2em] text-sable">Free Worldwide Shipping · 30-Day Returns · 18K Gold Plated · Hypoallergenic</div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.26em] text-champagne">Velmora edit</p><h2 id="bestsellers-title" className="mt-3 font-serif text-5xl text-espresso">Bestsellers</h2></div><Link to="/shop" className="text-xs font-bold uppercase tracking-[0.22em] text-sable hover:text-champagne">View all</Link></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}</div>
      </section>

      <section className="border-y border-taupe bg-porcelain py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p className="text-xs font-bold uppercase tracking-[0.26em] text-champagne">Seen in the glow</p><h2 className="mt-3 font-serif text-5xl text-espresso">Styled by Velmora</h2></div>
        <div className="mt-8 flex gap-4 overflow-x-auto px-4 pb-3 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {ugcPosts.map((post) => <article key={post.id} className="relative aspect-[9/16] w-56 shrink-0 overflow-hidden bg-rose-beige shadow-sm sm:w-64"><img alt={post.caption} className="h-full w-full object-cover" data-strk-img-id={post.imgId} data-strk-img={`[${post.detailId}] [${post.captionId}]`} data-strk-img-ratio="9x16" data-strk-img-width="600" src={placeholder} /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/80 to-transparent p-5 text-ivory"><h3 id={post.captionId} className="font-serif text-2xl">{post.caption}</h3><p id={post.detailId} className="mt-1 text-xs leading-5 text-ivory/80">{post.detail}</p></div></article>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"><div className="grid gap-5 md:grid-cols-3">{categories.map((category) => <Link key={category.id} to="/shop" className="group relative aspect-[4/5] overflow-hidden bg-rose-beige"><img alt={category.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" data-strk-img-id={category.imgId} data-strk-img={`[${category.descId}] [${category.titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="900" src={placeholder} /><div className="absolute inset-0 bg-espresso/15 transition group-hover:bg-espresso/35" /><div className="absolute inset-x-0 bottom-0 p-6 text-ivory"><h3 id={category.titleId} className="font-serif text-4xl">{category.name}</h3><p id={category.descId} className="mt-2 text-sm text-ivory/85">{category.description}</p></div></Link>)}</div></section>

      <section id="story" className="bg-espresso text-ivory"><div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24"><div className="aspect-[4/5] overflow-hidden bg-rose-beige"><img alt="Velmora brand story" className="h-full w-full object-cover" data-strk-img-id="brand-story-workbench-d81f2a" data-strk-img="[story-copy] [story-title]" data-strk-img-ratio="4x3" data-strk-img-width="1000" src={placeholder} /></div><div className="flex flex-col justify-center"><p className="text-xs font-bold uppercase tracking-[0.26em] text-champagne">Our philosophy</p><h2 id="story-title" className="mt-4 font-serif text-5xl">Gold for the moments you keep.</h2><p id="story-copy" className="mt-6 text-base leading-8 text-ivory/75">Velmora creates premium-but-accessible demi-fine pieces with warm plating, skin-kind finishes, and gift-ready details. Every piece is designed to feel personal, polished, and quietly memorable.</p><Link to="/shop" className="mt-8 text-xs font-bold uppercase tracking-[0.24em] text-champagne hover:text-ivory">Our Story</Link></div></div></section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"><div className="grid gap-5 md:grid-cols-3">{testimonials.map((item) => <article key={item.id} className="border border-taupe bg-porcelain p-7 text-espresso"><div className="flex gap-1 text-champagne">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div><p className="mt-5 text-lg leading-8 text-sable">“{item.quote}”</p><p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-espresso">{item.name}</p></article>)}</div></section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8"><div className="mx-auto max-w-5xl bg-champagne px-6 py-12 text-center text-espresso sm:px-12"><h2 className="font-serif text-5xl">Join for 10% off your first order</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-espresso/80">Receive private edits, gifting reminders, and early access to new gold essentials.</p><form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"><input type="email" placeholder="Email address" className="min-h-12 flex-1 rounded-full border border-espresso/20 bg-ivory px-5 text-espresso placeholder:text-sable focus:outline-none focus:ring-2 focus:ring-espresso" /><button className="rounded-full bg-espresso px-7 py-3 text-xs font-bold uppercase tracking-[0.22em] text-ivory hover:bg-umber">Subscribe</button></form></div></section>
    </main>
  )
}
