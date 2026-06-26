import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Home from "@/pages/Home"
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  )
}

export default App
