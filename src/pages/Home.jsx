import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Truck, RefreshCcw, ShieldCheck, Leaf } from 'lucide-react';
import { StrkImage, StrkBackground } from '@/components/Image';
import { ProductCard } from '@/components/ProductCard';
import { Newsletter } from '@/components/Newsletter';
import { useImageLoader } from '@/hooks/useImageLoader';
import { products } from '@/data/products';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Leaf, label: 'Hypoallergenic' },
];

const categories = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings on dark background editorial jewelry' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklace on model editorial jewelry' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie earrings close up editorial jewelry' },
];

const ugcItems = [
  { id: 'ugc-1', caption: 'everyday gold', query: 'woman wearing gold huggie earrings close up ear' },
  { id: 'ugc-2', caption: 'soft layers', query: 'gold layered necklaces on neck editorial' },
  { id: 'ugc-3', caption: 'gift ready', query: 'gold jewelry gift box velvet' },
  { id: 'ugc-4', caption: 'ear stack', query: 'gold ear cuff and earrings stack' },
  { id: 'ugc-5', caption: 'golden hour', query: 'gold necklace on skin warm light' },
];

const testimonials = [
  { name: 'Sophie M.', text: 'The quality is unreal for the price. I wear my huggies every single day.' },
  { name: 'Amara K.', text: 'Bought the Royal Heirloom Set as a gift and nearly kept it for myself. Stunning packaging.' },
  { name: 'Elena R.', text: 'Quiet luxury, exactly as described. Already planning my next purchase.' },
];

export default function Home() {
  const containerRef = useImageLoader();

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] max-h-[900px]">
        <StrkBackground
          id="hero-bg"
          query="[hero-headline] [hero-subheadline] gold jewelry on model warm light editorial"
          ratio="16x9"
          width={1600}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-foreground/35" />
        </StrkBackground>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-5">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] mb-5 opacity-90">
            Demi-Fine Jewelry
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] max-w-3xl mb-6"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subheadline"
            className="text-sm md:text-base lg:text-lg max-w-xl opacity-90 mb-10 font-light"
          >
            Timeless gold pieces designed for the women who make every moment feel special.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground text-xs uppercase tracking-[0.16em] font-medium hover:bg-accent-hover transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-3">
                <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-xs md:text-sm text-foreground tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Curated For You</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">Bestsellers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              Shop All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* UGC Reel */}
      <section className="py-16 md:py-24 bg-muted overflow-hidden">
        <div className="mx-auto px-5 md:px-8 lg:px-12 mb-8 md:mb-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">@velmorajewelry</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light">Styled by You</h2>
            </div>
            <Link
              to="#"
              className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              Follow Us
            </Link>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto px-5 md:px-8 lg:px-12 pb-4 hide-scrollbar snap-x snap-mandatory">
          {ugcItems.map((item, index) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[170px] md:w-[220px] aspect-[9/16] snap-start overflow-hidden group"
            >
              <StrkImage
                id={item.id}
                query={`[${item.id}-caption] ${item.query}`}
                ratio="9x16"
                width={400}
                alt={item.caption}
                className="transition-transform duration-700 ease-out-expo group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <p
                id={`${item.id}-caption`}
                className="absolute bottom-5 left-5 right-5 font-serif text-lg md:text-xl text-white italic"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Explore</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[4/5] overflow-hidden bg-muted"
              >
                <StrkImage
                  id={`category-${category.id}`}
                  query={`[category-${category.id}-label] ${category.query}`}
                  ratio="4x5"
                  width={800}
                  alt={category.label}
                  className="transition-transform duration-700 ease-out-expo group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3
                    id={`category-${category.id}-label`}
                    className="font-serif text-2xl md:text-3xl text-white uppercase tracking-[0.16em] border-b border-transparent group-hover:border-white pb-1 transition-all"
                  >
                    {category.label}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="aspect-[4/5] md:aspect-square overflow-hidden bg-muted">
              <StrkImage
                id="brand-story-img"
                query="[brand-story-headline] [brand-story-body] gold jewelry craftsmanship hands editorial"
                ratio="1x1"
                width={900}
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:pl-8">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Our Story</p>
              <h2
                id="brand-story-headline"
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6"
              >
                Designed for Modern Heirlooms
              </h2>
              <p
                id="brand-story-body"
                className="text-muted-foreground leading-relaxed mb-6"
              >
                Velmora was born from a simple belief: jewelry should feel precious without being precious about it. We design demi-fine pieces in 18k gold plate, combining timeless silhouettes with a contemporary sensibility. Every piece is made to be worn, loved, and passed on.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From morning meetings to midnight toasts, our jewelry moves with you — quietly luxurious, endlessly versatile.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                Read Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Reviews</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">Loved by Our Customers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card border border-border p-8 md:p-10 text-center hover:shadow-soft transition-shadow"
              >
                <div className="flex justify-center gap-1 text-accent mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter variant="accent" />
    </div>
  );
}
