import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from 'sonner';
import Layout from '@/Layout';
import HomePage from '@/pages/HomePage';
import CollectionPage from '@/pages/CollectionPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<CollectionPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
          </Route>
        </Routes>
        <Toaster position="bottom-right" richColors />
      </CartProvider>
    </Router>
  );
}

function AboutPage() {
  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      <div className="bg-[#F3F0EB] py-16 md:py-20">
        <div className="container-custom text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#9B9590] mb-3">Our Story</p>
          <h1 className="serif-heading text-4xl md:text-5xl font-light">About Velmora</h1>
        </div>
      </div>
      <div className="container-custom py-16 max-w-3xl">
        <p className="serif-heading text-2xl md:text-3xl italic text-[#1A1A1A] leading-relaxed mb-8">
          "We believe that beautiful jewelry shouldn't cost a fortune. Every piece we create is designed to be worn, loved, and treasured."
        </p>
        <p className="text-[#6B6560] leading-relaxed mb-6">
          Velmora was born from a simple idea: that everyone deserves access to beautiful, well-crafted jewelry. Our demi-fine collection bridges the gap between fast fashion and luxury — offering 18K gold plated pieces that look and feel premium, at prices that make sense.
        </p>
        <p className="text-[#6B6560] leading-relaxed mb-6">
          Each piece is designed in our studio and crafted using sustainable practices. We use recycled brass as our base metal and ensure our gold plating process meets the highest environmental standards.
        </p>
        <p className="text-[#6B6560] leading-relaxed">
          From our first collection of five pieces to the hundreds we offer today, our mission remains the same: create jewelry that makes you feel beautiful, every single day.
        </p>
      </div>
    </main>
  );
}

function JournalPage() {
  return (
    <main className="pt-20 md:pt-24 min-h-screen">
      <div className="bg-[#F3F0EB] py-16 md:py-20">
        <div className="container-custom text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#9B9590] mb-3">The Velmora Journal</p>
          <h1 className="serif-heading text-4xl md:text-5xl font-light">Stories & Style</h1>
        </div>
      </div>
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'How to Layer Necklaces Like a Pro', date: 'July 15, 2026', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop' },
            { title: 'The Art of the Everyday Earring Stack', date: 'July 8, 2026', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=400&fit=crop' },
            { title: 'Gift Guide: Jewelry She Will Actually Love', date: 'June 28, 2026', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop' },
          ].map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[3/2] bg-[#F3F0EB] overflow-hidden mb-4">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="text-xs text-[#9B9590] mb-2">{post.date}</p>
              <h3 className="serif-heading text-xl group-hover:text-[#B8956A] transition-colors">{post.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
