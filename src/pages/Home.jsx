import { Link } from 'react-router-dom'
import { products } from '../data/products'

export default function Home() {
  const bestsellers = products.slice(0, 4) // Show first 4
  
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-neutral-100">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2670&auto=format&fit=crop')` }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Crafted to be Treasured</h1>
          <p className="text-lg md:text-xl font-light tracking-wide mb-10 max-w-lg mx-auto">
            Demi-fine jewelry designed for everyday elegance and lifelong wear.
          </p>
          <Link 
            to="/collections/all" 
            className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-4 text-sm tracking-widest uppercase transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="py-8 bg-muted text-muted-foreground border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 text-sm tracking-wide text-center">
            <span>Free Worldwide Shipping</span>
            <span className="hidden md:inline">•</span>
            <span>30-Day Returns</span>
            <span className="hidden md:inline">•</span>
            <span>18K Gold Plated</span>
            <span className="hidden md:inline">•</span>
            <span>Hypoallergenic</span>
          </div>
        </div>
      </section>

      {/* 3. Bestsellers */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl">Trending Now</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-8">
          {bestsellers.map((product) => (
            <Link key={product.id} to={`/products/${product.slug}`} className="group group/card block">
              <div className="relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-opacity duration-500 group-hover/card:opacity-0"
                />
                <img 
                  src={product.images[1] || product.images[0]} 
                  alt={`${product.name} detail`}
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover/card:translate-y-0 transition-transform duration-300 ease-out">
                  <button className="w-full bg-background/90 backdrop-blur text-foreground py-3 text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-colors">
                    Quick View
                  </button>
                </div>
              </div>
              <h3 className="font-serif text-lg tracking-wider mb-1">{product.name}</h3>
              <p className="text-muted-foreground">${product.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. UGC Reel */}
      <section className="py-16 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-10 text-center">
          <h2 className="font-serif text-3xl">Styled by You</h2>
          <p className="mt-4 text-muted-foreground">@velmorajewelry</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 md:px-8 pb-8 hide-scrollbar">
          {[
            { img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop", text: "The perfect everyday stack." },
            { img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop", text: "Effortless elegance." },
            { img: "https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=800&auto=format&fit=crop", text: "Golden hour glow." },
            { img: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=800&auto=format&fit=crop", text: "A touch of vintage." },
            { img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop", text: "Statement hoops." }
          ].map((item, i) => (
            <div key={i} className="snap-center shrink-0 w-[240px] md:w-[280px] aspect-[9/16] relative group overflow-hidden">
              <img src={item.img} alt="UGC styled jewelry" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <p className="font-serif text-white text-lg leading-snug">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Shop by Category */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {[
            { title: "Earrings", img: "https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=1200&auto=format&fit=crop" },
            { title: "Necklaces", img: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=1200&auto=format&fit=crop" },
            { title: "Huggies", img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop" }
          ].map((cat, i) => (
            <Link key={i} to={`/collections/all?category=${cat.title}`} className="group relative aspect-[3/4] overflow-hidden">
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-3xl text-white tracking-wider">{cat.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Brand Story */}
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-stretch border border-border">
            <div className="md:w-1/2 aspect-square md:aspect-auto relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=2000&auto=format&fit=crop" 
                alt="Jewelry making process" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center items-center text-center p-12 md:p-24 bg-background">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Philosophy</h2>
              <div className="w-12 h-[1px] bg-accent mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
                We believe that fine jewelry shouldn't be reserved for special occasions. By working directly with master jewelers and using high-quality 18k gold vermeil, we create accessible pieces designed for your everyday narrative.
              </p>
              <Link to="#" className="border-b border-accent pb-1 text-sm tracking-widest uppercase hover:text-accent transition-colors">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-serif text-3xl text-center mb-16">Loved by Many</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            {[
              { text: "The quality is absolutely incredible. I haven't taken my Golden Sphere Huggies off since I bought them.", author: "Elena M.", rating: 5 },
              { text: "Finally found demi-fine jewelry that doesn't tarnish and looks incredibly premium. Ordering the necklace set next!", author: "Sarah T.", rating: 5 },
              { text: "Beautiful packaging and the earrings are stunning. Truly feels like a luxury unboxing experience.", author: "Jessica R.", rating: 5 }
            ].map((review, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex text-accent mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="font-serif text-lg leading-relaxed mb-6 italic">"{review.text}"</p>
                <p className="text-sm tracking-widest uppercase">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}