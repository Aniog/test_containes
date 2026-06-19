import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/ui/CartDrawer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import './App.css';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] pt-20 md:pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="velmora-heading text-4xl md:text-5xl text-[#1a1a1a] text-center mb-8">Our Story</h1>
        <div className="w-16 h-px bg-[#c9a96e] mx-auto mb-12" />
        <div className="prose prose-lg mx-auto text-[#6b6b6b]">
          <p className="mb-6">
            Velmora was founded with a singular vision: to create jewelry that feels as extraordinary as the women who wear it. 
            We believe that luxury shouldn't be reserved for special occasions — it should be part of your everyday.
          </p>
          <p className="mb-6">
            Each piece in our collection is thoughtfully designed in our studio, using ethically sourced materials and 
            time-honored craftsmanship techniques. Our demi-fine jewelry bridges the gap between costume and fine jewelry, 
            offering the look and feel of luxury at an accessible price point.
          </p>
          <p className="mb-6">
            We're committed to sustainability without compromise. Our pieces are crafted from recycled metals, 
            set with conflict-free stones, and packaged in eco-friendly materials. Because beautiful jewelry 
            shouldn't cost the earth.
          </p>
          <p>
            From the first sketch to the final polish, every Velmora piece is made to be treasured — today, tomorrow, 
            and for years to come.
          </p>
        </div>
      </div>
    </div>
  );
}

function JournalPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] pt-20 md:pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="velmora-heading text-4xl md:text-5xl text-[#1a1a1a] text-center mb-8">Journal</h1>
        <div className="w-16 h-px bg-[#c9a96e] mx-auto mb-12" />
        <div className="text-center text-[#6b6b6b]">
          <p className="velmora-heading text-xl mb-4">Coming Soon</p>
          <p className="text-sm">Stories, styling tips, and behind-the-scenes from the Velmora studio.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
