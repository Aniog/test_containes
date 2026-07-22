import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { Layout } from '@/Layout';
import HomePage from '@/pages/Home';
import { ProductDetail } from '@/components/product/ProductDetail';
import { CollectionPage } from '@/components/collection/CollectionPage';
import { Toaster } from 'sonner';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<CollectionPage />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="journal" element={<JournalPage />} />
          </Route>
        </Routes>
        <Toaster position="bottom-right" />
      </CartProvider>
    </Router>
  );
}

function AboutPage() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <h1 className="serif-heading text-4xl md:text-5xl mb-8 text-center">Our Story</h1>
        <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed space-y-6">
          <p>
            Velmora was born from a simple belief: that beautiful jewelry shouldn't come at the cost of the earth or your wallet. Founded in 2020, we set out to create demi-fine jewelry that bridges the gap between fast fashion and luxury — pieces that feel special enough to gift, yet accessible enough to treat yourself.
          </p>
          <p>
            Each piece in our collection is thoughtfully designed in our studio, using ethically sourced materials and finished with 18K gold plating that stands the test of time. We believe in quality over quantity, in pieces that become part of your daily ritual rather than sitting unworn in a jewelry box.
          </p>
          <p>
            Our name, Velmora, draws from the Latin roots for "velvet" and "gold" — a nod to the soft luxury and warm radiance we strive to capture in every design. We create for the modern woman who moves through her day with intention, who values craftsmanship, and who knows that the smallest details make the biggest difference.
          </p>
        </div>
      </div>
    </div>
  );
}

function JournalPage() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <h1 className="serif-heading text-4xl md:text-5xl mb-4 text-center">The Journal</h1>
        <p className="text-center text-muted-foreground mb-16">Styling tips, behind the scenes, and stories from the Velmora community</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'How to Layer Necklaces Like a Pro', date: 'July 15, 2026', excerpt: 'Master the art of the layered look with our simple guide to mixing lengths, textures, and metals.' },
            { title: 'The Care Guide: Making Your Gold Last', date: 'July 8, 2026', excerpt: 'Expert tips on how to keep your 18K gold plated jewelry looking brand new for years to come.' },
            { title: 'Behind the Design: Vivid Aura Collection', date: 'June 28, 2026', excerpt: 'A peek into our design process and the inspiration behind our bestselling ear cuff.' },
            { title: 'Gift Guide: Jewelry for Every Occasion', date: 'June 15, 2026', excerpt: 'From birthdays to anniversaries, find the perfect piece for every celebration.' },
          ].map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-[16/10] bg-secondary rounded-sm mb-4 overflow-hidden">
                <div className="w-full h-full bg-secondary group-hover:bg-secondary/80 transition-colors duration-300" />
              </div>
              <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
              <h3 className="serif-heading text-xl mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
