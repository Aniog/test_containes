import Hero from '../components/ai/Hero'
import WhatIsAI from '../components/ai/WhatIsAI'
import Capabilities from '../components/ai/Capabilities'
import Timeline from '../components/ai/Timeline'
import Applications from '../components/ai/Applications'
import Stats from '../components/ai/Stats'
import Footer from '../components/ai/Footer'

export default function AIPage() {
  return (
    <div className="bg-[#050816] text-white min-h-screen overflow-x-hidden">
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
