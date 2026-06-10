import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

export default function Layout({ children }) {
  useEffect(() => {
    document.body.style.backgroundColor = '#ffffff'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-brand-ink">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
