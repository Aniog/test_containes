import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowRight, Star } from 'lucide-react';

const Home = () => {
  const { addToCart } = useCart();
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 5);

  const categories = [
    { title: 'Earrings', image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&q=80&w=800', link: '/collections/earrings' },
    { title: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643477877-530e3864121b?auto=format&fit=crop&q=80&w=800', link: '/collections/necklaces' },
    { title: 'Huggies', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800', link: '/collections/huggies' }
  ];

  const ugcImages = [
    { id: 1, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600', caption: 'Everyday elegance' },
    { id: 2, image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&q=80&w=600', caption: 'Styled by you' },
    { id: 3, image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=600', caption: 'Golden hour' },
    { id: 4, image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&q=80&w=600', caption: 'Layered perfectly' },
    { id: 5, image: 'https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?auto=format&fit=crop&q=80&w=600', caption: 'Quiet luxury' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full mt-[-64px]"> {/* Negative margin to offset Layout pt-16 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=2000")' }}
        >
          <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay for text readability */}
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-normal mb-4 tracking-wide max-w-3xl">
            Crafted to be Treasured
          </h1>
          <p className="font-sans text-sm md:text-base tracking-[0.1em] mb-8 max-w-xl font-light">
            Demi-fine gold jewelry for the modern romantic.
          </p>
          <Link 
            to="/shop" 
            className="px-8 py-3 bg-velmora-accent text-white uppercase tracking-[0.15em] text-xs hover:bg-velmora-accent-hover transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="w-full bg-velmora-bg border-b border-velmora-accent/10 py-3">
        <ul className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-[10px] uppercase tracking-widest text-velmora-dark/80">
          <li>Free Worldwide Shipping</li>
          <li><span className="opacity-30 mr-8">•</span>30-Day Returns</li>
          <li><span className="opacity-30 mr-8">•</span>18K Gold Plated</li>
          <li><span className="opacity-30 mr-8">•</span>Hypoallergenic</li>
        </ul>
      </div>

      {/* Bestsellers Section */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark">Bestsellers</h2>
          <Link to="/shop" className="hidden border-b border-velmora-accent pb-1 text-velmora-accent text-xs uppercase tracking-widest hover:text-velmora-accent-hover md:flex items-center gap-2">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <div key={product.id} className="group cursor-pointer">
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-[#EBE8E3] mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                />
                <img 
                  src={product.imageHover} 
                  alt={`${product.name} lifestyle`} 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
                <button 
                  onClick={(e) => { e.preventDefault(); addToCart(product); }}
                  className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-velmora-dark uppercase tracking-widest text-[10px] py-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-velmora-dark hover:text-white"
                >
                  Quick Add
                </button>
              </Link>
              <Link to={`/product/${product.id}`} className="block">
                <h3 className="font-serif uppercase tracking-[0.1em] text-sm text-velmora-dark mb-1 truncate">{product.name}</h3>
                <p className="text-sm text-velmora-dark/80">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
            <Link to="/shop" className="inline-block border-b border-velmora-accent pb-1 text-velmora-accent text-xs uppercase tracking-widest">
              View All Bestsellers
            </Link>
        </div>
      </section>

      {/* UGC / Instagram Strip */}
      <section className="py-12 bg-[#F5F3EF]">
        <div className="flex overflow-x-auto gap-4 px-4 pb-4 snap-x hide-scrollbar">
          {ugcImages.map((item) => (
            <div key={item.id} className="relative shrink-0 w-64 h-[400px] snap-center rounded-sm overflow-hidden group">
              <img src={item.image} alt={item.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <p className="absolute bottom-6 left-6 right-6 font-serif text-white text-lg italic pr-4">
                "{item.caption}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Link key={idx} to={cat.link} className="relative aspect-square overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${cat.image})` }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur text-velmora-dark uppercase tracking-[0.2em] text-xs px-8 py-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {cat.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split */}
      <section className="py-16 md:py-24 bg-[#EBE8E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?auto=format&fit=crop&q=80&w=1000" 
                alt="Velmora Studio" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark mb-6">Elevating the Everyday</h2>
              <p className="font-light text-velmora-dark/80 leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
                Founded on the belief that fine jewelry shouldn't be reserved for special occasions. We design demi-fine pieces meant to be lived in, layered, and loved daily. Crafted with thick 18K gold plating over sterling silver and brass for enduring wear.
              </p>
              <Link 
                to="/about" 
                className="inline-block border-b border-velmora-accent pb-1 text-velmora-accent text-xs uppercase tracking-widest hover:text-velmora-accent-hover"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark text-center mb-16">Loved by Many</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: "Sarah M.", quote: "The quality is outstanding. I wear my Golden Sphere huggies every single day and they look brand new." },
            { name: "Elena R.", quote: "Finally, jewelry that doesn't irritate my sensitive skin! The packaging was also absolutely stunning." },
            { name: "Jessica T.", quote: "I bought the Vivid Aura cuff on a whim and it elevates every outfit. So many compliments." }
          ].map((testimonial, idx) => (
            <div key={idx} className="text-center flex flex-col items-center">
              <div className="flex gap-1 mb-6 text-velmora-accent">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-serif text-lg italic text-velmora-dark mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <p className="uppercase tracking-[0.2em] text-[10px] text-velmora-dark/60">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-velmora-accent py-20 px-4 text-center">
        <div className="max-w-xl mx-auto text-white">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join the List</h2>
          <p className="font-light text-white/90 mb-8 text-sm md:text-base">
            Subscribe to receive 10% off your first order, plus early access to new collections.
          </p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent border-b border-white/40 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors rounded-none"
              required
            />
            <button 
              type="submit" 
              className="px-8 py-3 bg-white text-velmora-accent uppercase tracking-widest text-xs hover:bg-velmora-bg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;