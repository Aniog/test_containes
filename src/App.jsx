import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/Navigation';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Navigation />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/collections" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

function About() {
  return (
    <main className="pt-20 min-h-screen">
      <section className="py-20 md:py-28 bg-[#F5F1EB]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-[#2C2824] mb-8">
              Our Story
            </h1>
            <div className="space-y-6 text-[#6B635A] leading-relaxed font-sans">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise.
              </p>
              <p>
                Founded in 2020, we set out to bridge the gap between luxury and accessibility. We believe that beautiful, well-crafted jewelry shouldn't require a luxury budget. Our demi-fine pieces use premium materials—18K gold plating, genuine crystals, and hypoallergenic metals—delivered at accessible price points.
              </p>
              <p>
                Each piece in our collection is designed in-house and crafted by skilled artisans who share our commitment to quality. We source our materials responsibly and work with partners who uphold ethical manufacturing practices.
              </p>
              <p>
                More than jewelry, we create pieces that become part of your personal story. Whether you're treating yourself or gifting someone special, Velmora pieces are designed to be treasured for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Journal() {
  return (
    <main className="pt-20 min-h-screen">
      <section className="py-20 md:py-28 bg-[#FAF8F5]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-[#2C2824] mb-4">
              Journal
            </h1>
            <p className="text-[#6B635A] mb-12">
              Stories, styling tips, and inspiration from the Velmora world
            </p>
            <div className="grid gap-8">
              {[
                {
                  title: 'How to Layer Your Necklaces Like a Pro',
                  excerpt: 'Master the art of layering with our guide to creating the perfect necklace stack.',
                  image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=500&fit=crop'
                },
                {
                  title: 'Caring for Your Gold Plated Jewelry',
                  excerpt: 'Tips and tricks to keep your favorite pieces looking beautiful for years.',
                  image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=500&fit=crop'
                },
                {
                  title: 'The Art of Gifting Jewelry',
                  excerpt: 'Find the perfect piece for every special moment in your life.',
                  image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=500&fit=crop'
                }
              ].map((post, index) => (
                <article key={index} className="group cursor-pointer">
                  <div className="aspect-[16/9] bg-[#F5F1EB] overflow-hidden mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="font-serif text-xl text-[#2C2824] mb-2 group-hover:text-[#C9A962] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#6B635A]">{post.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
