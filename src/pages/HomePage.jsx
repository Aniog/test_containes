import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 tracking-wide">VELMORA</h1>
          <p className="text-lg md:text-xl mb-2 font-light tracking-widest uppercase">Crafted to be Treasured</p>
          <div className="w-24 h-px bg-gray-400 mx-auto my-8"></div>
          <a href="/shop" className="inline-block bg-black text-white px-10 py-4 text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors">
            Shop the Collection
          </a>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 border-y">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm tracking-wide text-gray-600">
          <span>Free Worldwide Shipping</span>
          <span className="hidden md:inline">|</span>
          <span>30-Day Returns</span>
          <span className="hidden md:inline">|</span>
          <span>18K Gold Plated</span>
          <span className="hidden md:inline">|</span>
          <span>Hypoallergenic</span>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Bestsellers</h2>
            <div className="w-24 h-px bg-gray-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "Vivid Aura Jewels", desc: "Gold ear cuff with crystal accent", price: 42, id: 1 },
              { name: "Majestic Flora Nectar", desc: "Multicolor floral crystal necklace", price: 68, id: 2 },
              { name: "Golden Sphere Huggies", desc: "Chunky gold dome huggie earrings", price: 38, id: 3 },
              { name: "Amber Lace Earrings", desc: "Textured gold filigree drop earrings", price: 54, id: 4 },
              { name: "Royal Heirloom Set", desc: "Gift-boxed earring + necklace set", price: 95, id: 5 }
            ].map((product) => (
              <a key={product.id} href={`/product/${product.id}`} className="group">
                <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Product Image</span>
                  </div>
                </div>
                <h3 className="font-serif text-sm uppercase tracking-wider mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.desc}</p>
                <p className="font-medium">${product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Earrings", "Necklaces", "Huggies"].map((cat) => (
              <a key={cat} href="/shop" className="relative h-80 bg-gray-200 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                <h3 className="font-serif text-3xl text-white mix-blend-difference">{cat}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-gray-200 aspect-square"></div>
          <div>
            <h2 className="font-serif text-4xl mb-8">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry should be accessible without compromising on quality.
              Each piece is crafted with intention, using 18K gold plating and hypoallergenic materials.
            </p>
            <a href="#" className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-4xl text-center mb-16">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", text: "Absolutely stunning pieces. The quality is incredible for the price point." },
              { name: "Emily R.", text: "Velmora has become my go-to for gifts. The packaging is beautiful." },
              { name: "Jessica L.", text: "Finally, beautiful jewelry that doesn't irritate my sensitive ears!" }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 text-center">
                <div className="flex justify-center mb-4 text-lg">{"★".repeat(5)}</div>
                <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                <p className="font-serif">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl mb-4">Join Velmora</h2>
          <p className="mb-8 text-gray-300">Subscribe for 10% off your first order</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 bg-white text-black"
            />
            <button className="bg-white text-black px-6 py-3 text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
