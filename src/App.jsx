import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "@/components/layout/Layout"
import Home from "@/pages/Home"
import Products from "@/pages/Products"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import "./App.css"

function NotFound() {
  return (
    <section className="section bg-cream">
      <div className="container-page text-center max-w-xl">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-5xl text-ink">Page not found</h1>
        <p className="mt-6 text-base text-steel">
          The page you&apos;re looking for has been moved or never existed.
        </p>
        <a href="/" className="btn-primary mt-8 inline-flex">Back to home</a>
      </div>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
