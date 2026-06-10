import { Hero } from "@/components/home/Hero"
import { TrustBar } from "@/components/home/TrustBar"
import { FeaturedProducts } from "@/components/home/FeaturedProducts"
import { Applications } from "@/components/home/Applications"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { Process } from "@/components/home/Process"
import { Testimonials } from "@/components/home/Testimonials"
import { ContactCta } from "@/components/home/ContactCta"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProducts />
      <Applications />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <ContactCta />
    </>
  )
}
