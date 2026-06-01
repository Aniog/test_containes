import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Archive from './pages/Archive'
import ArtifactDetail from './pages/ArtifactDetail'
import Timeline from './pages/Timeline'
import Investigations from './pages/Investigations'
import Membership from './pages/Membership'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="archive" element={<Archive />} />
          <Route path="archive/:id" element={<ArtifactDetail />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="investigations" element={<Investigations />} />
          <Route path="membership" element={<Membership />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
