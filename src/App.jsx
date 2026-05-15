import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import News from './pages/News'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
