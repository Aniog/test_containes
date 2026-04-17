import './App.css'
import Hero from './components/Hero'
import WhatIsAI from './components/WhatIsAI'
import Capabilities from './components/Capabilities'
import Stats from './components/Stats'
import Timeline from './components/Timeline'
import Applications from './components/Applications'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden">
      <Hero />
      <WhatIsAI />
      <Capabilities />
      <Stats />
      <Timeline />
      <Applications />
      <Footer />
    </div>
  )
}

export default App
