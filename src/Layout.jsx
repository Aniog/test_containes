import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

const Layout = ({ children }) => (
  <div className="min-h-screen bg-slate-50 text-slate-950">
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
