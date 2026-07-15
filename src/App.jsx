import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './components/shop/Shop';
import ProductDetail from './components/product/ProductDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/journal" element={<JournalPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

// Simple placeholder pages
function AboutPage() {
  return (
    <div className="min-h-screen bg-velmora-cream pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">Our Story</h1>
        <p className="mt-6 text-velmora-muted leading-relaxed">
          Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary. 
          Founded in 2020, we set out to create pieces that transcend trends and become treasured parts of your story.
        </p>
        <p className="mt-4 text-velmora-muted leading-relaxed">
          Each piece is designed with intention, crafted with care, and priced with purpose. 
          We believe in quiet luxury — the kind that doesn't shout, but speaks volumes.
        </p>
      </div>
    </div>
  );
}

function JournalPage() {
  return (
    <div className="min-h-screen bg-velmora-cream pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">Journal</h1>
        <p className="mt-6 text-velmora-muted">
          Stories of craftsmanship, styling tips, and the art of quiet luxury.
        </p>
        <div className="mt-12 grid gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-left bg-velmora-white p-6 shadow-soft">
              <span className="text-xs text-velmora-gold uppercase tracking-widest">Style Guide</span>
              <h2 className="font-serif text-xl text-velmora-charcoal mt-2">
                How to Layer Your Necklaces Like a Pro
              </h2>
              <p className="mt-2 text-velmora-muted text-sm">
                Master the art of necklace layering with our simple guide to creating the perfect stack...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;