import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import UsersPage from './pages/UsersPage.jsx'
import CompaniesPage from './pages/CompaniesPage.jsx'
import AuthPage from './pages/AuthPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import { ToastContainer } from './components/ui/Toast.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Auth pages — no sidebar layout */}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          {/* Admin pages — with sidebar layout */}
          <Route path="/*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/companies" element={<CompaniesPage />} />
              </Routes>
            </Layout>
          } />
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
