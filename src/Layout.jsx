import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-brand-ice font-sans text-brand-slate">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
