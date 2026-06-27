import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/layout/Layout.jsx';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import AboutPage from '@/pages/AboutPage';
import PlaceholderPage from '@/pages/PlaceholderPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:slug" element={<ProductDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<PlaceholderPage title="Journal" description="Our journal is coming soon. Stay tuned for styling tips, behind-the-scenes content, and more." />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact Us" description="Get in touch with our team. We'd love to hear from you." />} />
            <Route path="/shipping" element={<PlaceholderPage title="Shipping & Returns" description="Information about shipping times, costs, and our 30-day return policy." />} />
            <Route path="/size-guide" element={<PlaceholderPage title="Size Guide" description="Find your perfect fit with our jewelry size guide." />} />
            <Route path="/care" element={<PlaceholderPage title="Care Instructions" description="Learn how to care for your Velmora jewelry to keep it looking beautiful." />} />
            <Route path="/faqs" element={<PlaceholderPage title="FAQs" description="Frequently asked questions about our products, shipping, and more." />} />
            <Route path="/sustainability" element={<PlaceholderPage title="Sustainability" description="Our commitment to responsible and sustainable jewelry making." />} />
            <Route path="/careers" element={<PlaceholderPage title="Careers" description="Join our team and help us bring beautiful jewelry to women everywhere." />} />
            <Route path="/press" element={<PlaceholderPage title="Press" description="Press inquiries and media resources." />} />
            <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" description="How we collect, use, and protect your personal information." />} />
            <Route path="/terms" element={<PlaceholderPage title="Terms of Service" description="Our terms and conditions for using Velmora Fine Jewelry." />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
