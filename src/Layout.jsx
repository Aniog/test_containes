import { Outlet } from 'react-router-dom'
import Header from './components/site/Header'
import Footer from './components/site/Footer'

const Layout = () => (
  <div className="min-h-screen bg-white text-slate-900">
    <Header />
    <Outlet />
    <Footer />
  </div>
)

export default Layout
