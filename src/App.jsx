import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Dashboard from '@/pages/Dashboard'
import Celebrities from '@/pages/Celebrities'
import CreateCelebrity from '@/pages/CreateCelebrity'
import CelebrityDetail from '@/pages/CelebrityDetail'
import ContentHub from '@/pages/ContentHub'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/celebrities" element={<Celebrities />} />
          <Route path="/celebrities/:id" element={<CelebrityDetail />} />
          <Route path="/celebrities/:id/edit" element={<CreateCelebrity editMode />} />
          <Route path="/create" element={<CreateCelebrity />} />
          <Route path="/content" element={<ContentHub />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
