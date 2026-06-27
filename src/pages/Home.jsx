import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroArtwork from '@/components/home/HeroArtwork'
import ProductCard from '@/components/product/ProductCard'
import ProductImage from '@/components/product/ProductImage'
import { categoryImageFor, editorialImageFor, ugcImageFor } from '@/data/imageRegistry'
import { categories, products, ugcItems } from '@/data/products'

const testimonials = [
  {
    quote: 'The huggies feel substantial without being heavy. They look far more expensive than they are.',
    name: 'Maya R.',
  },
  {
    quote: 'I bought the necklace as a birthday gift and kept thinking about ordering one for myself.',
    name: 'Elise B.',
  },
  {
    quote: 'Beautiful packaging, warm gold tone, and no irritation after wearing them all day.',
    name: 'Nina K.',
  },
]

export default function Home({ onAdd, onOpenProduct }) {
  return (
    <main className="bg-porcelain text-obsidian">
      <section className="relative min-h-[92vh] overflow-hidden bg-obsidian text-porcelain">
        <HeroArtwork className="opacity-75" />
        <p id="hero-image-context" className="sr-only">
          Warm editorial close-up of gold jewelry on a woman model with glowing skin and neutral luxury styling
        </p>

        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/35 via-obsidian/45 to-obsidian/80" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.36em] text-softgold">
              Demi-fine gold jewelry
            </p>
            <h1 id="hero-title" className="font-serif text-5xl leading-[0.95] text-porcelain sm:text-7xl lg:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-porcelain/82 sm:text-lg">
              Warm, luminous essentials for the everyday rituals and unforgettable gifting moments in between.
            </p>
            <Link
              to="/shop"
              className="mt-9 inline-flex rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-obsidian transition duration-300 hover:bg-softgold"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-obsidian/10 bg-sand text-obsidian">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-4 text-center text-[0.68rem] font-bold uppercase tracking-[0.2em] sm:px-6 md:grid-cols-4 lg:px-8">
          {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
            <p key={item} className="px-2 py-2 text-obsidian/80">{item}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Bestsellers</p>
            <h2 className="mt-3 font-serif text-4xl text-obsidian sm:text-5xl">The pieces everyone returns to</h2>
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-obsidian hover:text-gold">
            Shop all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} onOpenProduct={onOpenProduct} />
          ))}
        </div>
      </section>

      <section className="bg-espresso py-16 text-porcelain lg:py-20" id="journal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-softgold">Worn by you</p>
            <h2 className="mt-3 font-serif text-4xl text-porcelain sm:text-5xl">A reel of golden rituals</h2>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-3">
            {ugcItems.map((item) => (
              <article key={item.id} className="relative h-[28rem] min-w-[16rem] snap-start overflow-hidden rounded-[1.75rem] bg-obsidian shadow-editorial sm:min-w-[19rem]">
                <ProductImage
                  imgId={item.imgId}
                  query={`[${item.titleId}]`}
                  ratio="9x16"
                  width="520"
                  alt={item.caption}
                  src={ugcImageFor[item.id]}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                <p id={item.titleId} className="absolute bottom-5 left-5 right-5 font-serif text-2xl leading-7 text-porcelain">
                  {item.caption}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Shop by Category</p>
          <h2 className="mt-3 font-serif text-4xl text-obsidian sm:text-5xl">Find your signature glow</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to="/shop" className="group relative aspect-[4/5] overflow-hidden bg-sand shadow-soft">
              <ProductImage
                imgId={category.imgId}
                query={`[${category.descId}] [${category.titleId}]`}
                ratio="3x4"
                width="800"
                alt={category.name}
                src={categoryImageFor[category.id]}
                className="transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-obsidian/10 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 translate-y-2 transition duration-500 group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serif text-4xl text-porcelain">{category.name}</h3>
                <p id={category.descId} className="mt-2 text-sm text-porcelain/80 opacity-0 transition group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="bg-mist py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="aspect-[4/5] overflow-hidden bg-sand shadow-editorial lg:aspect-[5/4]">
            <ProductImage
              imgId="brand-story-atelier-img-a81d2c"
              query="[story-copy] [story-title]"
              ratio="4x3"
              width="1100"
              alt="Velmora jewelry atelier details"
              src={editorialImageFor.story}
            />
          </div>
          <div className="flex items-center">
            <div className="max-w-xl lg:pl-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Our Story</p>
              <h2 id="story-title" className="mt-3 font-serif text-4xl leading-tight text-obsidian sm:text-6xl">
                Gold-toned pieces with heirloom feeling, made for real life.
              </h2>
              <p id="story-copy" className="mt-6 text-base leading-8 text-taupe">
                Velmora began with the belief that beautiful jewelry should feel special without waiting for a special occasion. Each piece is designed in warm 18K gold plating, finished for comfort, and styled to move easily from weekday rituals to candlelit evenings.
              </p>
              <a href="#journal" className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-bold uppercase tracking-[0.2em] text-obsidian hover:text-gold">
                Read Our Story <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="border border-obsidian/10 bg-mist p-6 text-obsidian shadow-soft">
              <div className="mb-5 flex gap-1 text-gold" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-2xl leading-8 text-obsidian">“{testimonial.quote}”</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-taupe">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-5xl bg-espresso px-5 py-10 text-center text-porcelain shadow-editorial sm:px-10 lg:px-16 lg:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-softgold">Private List</p>
          <h2 className="mt-3 font-serif text-4xl text-porcelain sm:text-5xl">Join for 10% off your first order</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-porcelain/72">
            Receive early access to new drops, styling notes, and gift edits from the Velmora studio.
          </p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Email address"
              className="min-h-13 flex-1 rounded-full border border-porcelain/20 bg-porcelain px-5 text-sm text-obsidian placeholder:text-taupe focus:border-gold focus:outline-none"
            />
            <button type="submit" className="rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-obsidian transition hover:bg-softgold">
              Join
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
