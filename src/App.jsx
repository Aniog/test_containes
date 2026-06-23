import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import CollectionPage from '@/pages/CollectionPage';
import ShopPage from '@/pages/ShopPage';
import ProductPage from '@/pages/ProductPage';
import StoryPage from '@/pages/StoryPage';
import CraftsmanshipPage from '@/pages/CraftsmanshipPage';
import SustainabilityPage from '@/pages/SustainabilityPage';
import JournalPage from '@/pages/JournalPage';
import JournalArticlePage from '@/pages/JournalArticlePage';
import WishlistPage from '@/pages/WishlistPage';
import CheckoutPage from '@/pages/CheckoutPage';
import AccountPage from '@/pages/AccountPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          {/* Checkout has its own minimal layout */}
          <Route path="/checkout" element={<CheckoutPage />} />

          {/* All other pages use the main layout */}
          <Route path="/*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/collections/:slug" element={<CollectionPage />} />
                <Route path="/products/:slug" element={<ProductPage />} />
                <Route path="/story" element={<StoryPage />} />
                <Route path="/story/craftsmanship" element={<CraftsmanshipPage />} />
                <Route path="/story/sustainability" element={<SustainabilityPage />} />
                <Route path="/journal" element={<JournalPage />} />
                <Route path="/journal/:slug" element={<JournalArticlePage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/account" element={<AccountPage />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

