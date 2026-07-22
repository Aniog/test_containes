import { Hero } from './Hero'
import { TrustBar } from './TrustBar'
import { Bestsellers } from './Bestsellers'
import { UGCRow } from './UGCRow'
import { Categories } from './Categories'
import { BrandStory } from './BrandStory'
import { Testimonials } from './Testimonials'
import { Newsletter } from './Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCRow />
      <Categories />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  )
}
