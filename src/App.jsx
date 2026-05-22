import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Store from './pages/Store'
import Booking from './pages/Booking'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
