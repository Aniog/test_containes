import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Collections from './pages/Collections'
import Journal from './pages/Journal'
import ErrorBoundary from './components/ui/ErrorBoundary'

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route
              path="*"
              element={
                <div className="min-h-[60vh] flex flex-col items-center justify-center pt-32 text-center px-6">
                  <p className="eyebrow">404</p>
                  <h1 className="mt-4 font-serif text-4xl text-espresso font-light">
                    This page is still in the studio.
                  </h1>
                  <a href="/" className="mt-8 btn-primary">Back Home</a>
                </div>
              }
            />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
