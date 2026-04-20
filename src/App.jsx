import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Conservation from './pages/Conservation'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="conservation" element={<Conservation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
