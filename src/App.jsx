import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main App with Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

// Layout component with nav and footer
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <a href="/" className="font-serif text-2xl tracking-wider">VELMORA</a>
          <div className="flex gap-8 text-sm">
            <a href="/shop" className="hover:text-gray-600">Shop</a>
            <button>Search</button>
            <button>Cart (0)</button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">VELMORA</h3>
            <p className="text-sm text-gray-400">Premium demi-fine jewelry for the modern woman.</p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/shop" className="hover:text-white">Earrings</a></li>
              <li><a href="/shop" className="hover:text-white">Necklaces</a></li>
              <li><a href="/shop" className="hover:text-white">Huggies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Homepage Component
const HomePage = () => {
  const products = [
    { id: 1, name: "Vivid Aura Jewels", desc: "Gold ear cuff", price: 42 },
    { id: 2, name: "Majestic Flora Nectar", desc: "Crystal necklace", price: 68 },
    { id: 3, name: "Golden Sphere Huggies", desc: "Gold huggie earrings", price: 38 },
    { id: 4, name: "Amber Lace Earrings", desc: "Filigree drop earrings", price: 54 },
    { id: 5, name: "Royal Heirloom Set", desc: "Gift-boxed set", price: 95 }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">VELMORA</h1>
          <p className="text-lg mb-8">Crafted to be Treasured</p>
          <a href="/shop" className="bg-black text-white px-10 py-4 text-sm uppercase tracking-wider hover:bg-gray-900">
            Shop the Collection
          </a>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 border-y">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          <span>Free Worldwide Shipping</span>
          <span>30-Day Returns</span>
          <span>18K Gold Plated</span>
          <span>Hypoallergenic</span>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-4xl text-center mb-12">Bestsellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.map((p) => (
              <a key={p.id} href={`/product/${p.id}`} className="text-center">
                <div className="bg-gray-100 aspect-square mb-4"></div>
                <h3 className="font-serif text-sm uppercase">{p.name}</h3>
                <p>${p.price}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Earrings", "Necklaces", "Huggies"].map((cat) => (
              <a key={cat} href="/shop" className="h-80 bg-gray-200 flex items-center justify-center">
                <h3 className="font-serif text-3xl">{cat}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-4xl text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", text: "Absolutely stunning pieces." },
              { name: "Emily R.", text: "Velmora has become my go-to for gifts." },
              { name: "Jessica L.", text: "Finally, beautiful jewelry that doesn't irritate my ears!" }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 text-center border">
                <div className="mb-4">★★★★★</div>
                <p className="text-gray-600 mb-4">"{review.text}"</p>
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
            <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 bg-white text-black" />
            <button className="bg-white text-black px-6 py-3 text-sm uppercase hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Shop Page Component
const ShopPage = () => {
  const products = [
    { id: 1, name: "Vivid Aura Jewels", desc: "Gold ear cuff", price: 42 },
    { id: 2, name: "Majestic Flora Nectar", desc: "Crystal necklace", price: 68 },
    { id: 3, name: "Golden Sphere Huggies", desc: "Gold huggie earrings", price: 38 },
    { id: 4, name: "Amber Lace Earrings", desc: "Filigree drop earrings", price: 54 },
    { id: 5, name: "Royal Heirloom Set", desc: "Gift-boxed set", price: 95 }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-serif text-4xl mb-12 text-center">Shop All</h1>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Filters */}
          <div>
            <h3 className="font-medium mb-4">Category</h3>
            {["All", "Earrings", "Necklaces", "Huggies"].map(cat => (
              <label key={cat} className="flex items-center gap-2 mb-2">
                <input type="checkbox" />
                <span className="text-sm">{cat}</span>
              </label>
            ))}
          </div>

          {/* Products */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <a key={p.id} href={`/product/${p.id}`} className="text-center">
                  <div className="bg-gray-100 aspect-square mb-4"></div>
                  <h3 className="font-serif text-sm uppercase">{p.name}</h3>
                  <p>${p.price}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Product Detail Component
const ProductDetail = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <a href="/shop" className="text-sm hover:underline mb-8 inline-block">← Back to Shop</a>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-100 aspect-square"></div>
          </div>
          <div>
            <h1 className="font-serif text-3xl uppercase tracking-wider mb-4">Vivid Aura Jewels</h1>
            <p className="text-2xl mb-6">$42</p>
            <p className="text-gray-600 mb-8">Gold ear cuff with crystal accent. Elevate your ear stack.</p>
            <button className="w-full bg-black text-white py-4 text-sm uppercase tracking-wider hover:bg-gray-900 mb-4">
              Add to Cart
            </button>
            <div className="border-t pt-4">
              <details className="mb-4">
                <summary className="cursor-pointer font-medium">Description</summary>
                <p className="mt-4 text-gray-600">Elevate your ear stack with this stunning gold ear cuff.</p>
              </details>
              <details className="mb-4">
                <summary className="cursor-pointer font-medium">Materials & Care</summary>
                <p className="mt-4 text-gray-600">18K Gold Plated on Brass. Avoid water and perfume.</p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
