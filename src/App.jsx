import { useMemo, useState } from 'react'
import CartDrawer from '@/components/storefront/CartDrawer.jsx'
import Footer from '@/components/storefront/Footer.jsx'
import Header from '@/components/storefront/Header.jsx'
import { getProductById } from '@/data/products.js'
import HomePage from '@/pages/HomePage.jsx'
import ProductDetailPage from '@/pages/ProductDetailPage.jsx'
import ShopPage from '@/pages/ShopPage.jsx'
import './App.css'

function App() {
  const [page, setPage] = useState('home')
  const [selectedProductId, setSelectedProductId] = useState('vivid-aura-jewels')
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const navigate = (nextPage) => {
    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const viewProduct = (productId) => {
    setSelectedProductId(productId)
    navigate('product')
  }

  const addToCart = (product, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.product.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...current, { product, quantity }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (productId) => {
    setCartItems((current) => current.filter((item) => item.product.id !== productId))
  }

  const changeQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId)
      return
    }
    setCartItems((current) =>
      current.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    )
  }

  const selectedProduct = getProductById(selectedProductId)

  return (
    <div className="min-h-screen bg-velmora-ivory font-sansBody text-velmora-espresso">
      <Header
        currentPage={page}
        navigate={navigate}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
      />

      {page === 'home' && (
        <HomePage onAddToCart={addToCart} onViewProduct={viewProduct} navigate={navigate} />
      )}
      {page === 'shop' && (
        <ShopPage onAddToCart={addToCart} onViewProduct={viewProduct} />
      )}
      {page === 'product' && (
        <ProductDetailPage
          productId={selectedProduct.id}
          onAddToCart={addToCart}
          onViewProduct={viewProduct}
        />
      )}

      <Footer navigate={navigate} />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onQuantityChange={changeQuantity}
      />
    </div>
  )
}

export default App
