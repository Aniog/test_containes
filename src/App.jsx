import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth.jsx'
import Layout from './components/layout/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import ArchivePage from './pages/ArchivePage.jsx'
import ArtifactPage from './pages/ArtifactPage.jsx'
import TimelineMapPage from './pages/TimelineMapPage.jsx'
import InvestigationsPage from './pages/InvestigationsPage.jsx'
import MembershipPage from './pages/MembershipPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import SubmitSightingPage from './pages/SubmitSightingPage.jsx'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="archive" element={<ArchivePage />} />
            <Route path="archive/:id" element={<ArtifactPage />} />
            <Route path="timeline" element={<TimelineMapPage />} />
            <Route path="investigations" element={<InvestigationsPage />} />
            <Route path="membership" element={<MembershipPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="submit-sighting" element={<SubmitSightingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

