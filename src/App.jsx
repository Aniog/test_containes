import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import Hero from './components/home/Hero';
import TrustBar from './components/home/TrustBar';
import Bestsellers from './components/home/Bestsellers';
import UGCSection from './components/home/UGCSection';
import Categories from './components/home/Categories';
import BrandStory from './components/home/BrandStory';
import Testimonials from './components/home/Testimonials';
import Newsletter from './components/home/Newsletter';
import ProductDetail from './components/products/ProductDetail';
import Shop from './components/products/Shop';

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCSection />
      <Categories />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/shipping" element={<ShippingPage />} />
              <Route path="/care" element={<CarePage />} />
              <Route path="/faqs" element={<FaqsPage />} />
              <Route path="/sizing" element={<SizingPage />} />
              <Route path="/sustainability" element={<SustainabilityPage />} />
              <Route path="/press" element={<PressPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/journal" element={<JournalPage />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </Router>
  );
}

// Simple placeholder pages
function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#FAF7F2] py-16">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl text-center">Our Story</h1>
        </div>
      </div>
      <div className="container py-16 max-w-3xl">
        <p className="text-[#6B6560] leading-relaxed text-lg">
          At Velmora, we believe that jewelry should be more than an accessory—it should be a memory, a milestone, a moment captured in gold and stone. Our pieces are designed with intention, crafted with care, and made to be worn and treasured for generations.
        </p>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#FAF7F2] py-16">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl text-center">Contact Us</h1>
        </div>
      </div>
      <div className="container py-16 max-w-xl">
        <p className="text-[#6B6560] text-center">We'd love to hear from you. Email us at hello@velmora.com</p>
      </div>
    </div>
  );
}

function ShippingPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#FAF7F2] py-16">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl text-center">Shipping & Returns</h1>
        </div>
      </div>
      <div className="container py-16 max-w-3xl">
        <p className="text-[#6B6560] leading-relaxed">Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging.</p>
      </div>
    </div>
  );
}

function CarePage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#FAF7F2] py-16">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl text-center">Care Instructions</h1>
        </div>
      </div>
      <div className="container py-16 max-w-3xl">
        <p className="text-[#6B6560] leading-relaxed">To maintain the luster of your jewelry, avoid contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.</p>
      </div>
    </div>
  );
}

function FaqsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#FAF7F2] py-16">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl text-center">FAQs</h1>
        </div>
      </div>
      <div className="container py-16 max-w-3xl">
        <p className="text-[#6B6560]">Find answers to commonly asked questions about our products, shipping, and returns.</p>
      </div>
    </div>
  );
}

function SizingPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#FAF7F2] py-16">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl text-center">Size Guide</h1>
        </div>
      </div>
      <div className="container py-16 max-w-3xl">
        <p className="text-[#6B6560]">Find your perfect fit with our comprehensive size guide for all jewelry types.</p>
      </div>
    </div>
  );
}

function SustainabilityPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#FAF7F2] py-16">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl text-center">Sustainability</h1>
        </div>
      </div>
      <div className="container py-16 max-w-3xl">
        <p className="text-[#6B6560] leading-relaxed">We're committed to sustainable practices in everything we do, from ethically sourced materials to eco-friendly packaging.</p>
      </div>
    </div>
  );
}

function PressPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#FAF7F2] py-16">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl text-center">Press</h1>
        </div>
      </div>
      <div className="container py-16 max-w-3xl">
        <p className="text-[#6B6560]">Latest news, press releases, and media coverage about Velmora.</p>
      </div>
    </div>
  );
}

function CareersPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#FAF7F2] py-16">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl text-center">Careers</h1>
        </div>
      </div>
      <div className="container py-16 max-w-3xl">
        <p className="text-[#6B6560]">Join our team and help us create beautiful jewelry that brings joy to people around the world.</p>
      </div>
    </div>
  );
}

function JournalPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-[#FAF7F2] py-16">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl text-center">Journal</h1>
        </div>
      </div>
      <div className="container py-16 max-w-3xl">
        <p className="text-[#6B6560]">Styling tips, jewelry trends, and behind-the-scenes stories from Velmora.</p>
      </div>
    </div>
  );
}

export default App;
