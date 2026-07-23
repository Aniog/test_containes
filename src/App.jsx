import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import StoreLayout from '@/components/storefront/StoreLayout'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'
import { useCart } from '@/hooks/useCart'

function App() {
  const {
    cartItems,
    cartCount,
    cartSubtotal,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
  } = useCart()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <StoreLayout
              cartCount={cartCount}
              isCartOpen={isCartOpen}
              cartItems={cartItems}
              cartSubtotal={cartSubtotal}
              onOpenCart={() => setIsCartOpen(true)}
              onCloseCart={() => setIsCartOpen(false)}
              onRemoveFromCart={removeFromCart}
              onUpdateQuantity={updateQuantity}
            />
          }
        >
          <Route index element={<HomePage onAddToCart={addToCart} />} />
          <Route path="shop" element={<ShopPage onAddToCart={addToCart} />} />
          <Route path="product/:slug" element={<ProductPage onAddToCart={addToCart} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
