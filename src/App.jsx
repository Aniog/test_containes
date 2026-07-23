import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Shop from './pages/Shop.jsx'
import { StoreProvider } from './context/StoreContext.jsx'

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
