import HomeHero from "@/components/home/HomeHero"
import HomeServices from "@/components/home/HomeServices"
import HomeProcess from "@/components/home/HomeProcess"
import HomeProducts from "@/components/home/HomeProducts"
import HomeProblems from "@/components/home/HomeProblems"
import HomeTrust from "@/components/home/HomeTrust"
import HomeCaseStudies from "@/components/home/HomeCaseStudies"
import Faq from "@/components/shared/Faq"
import CtaBanner from "@/components/shared/CtaBanner"
import { Section, Container, SectionHeading } from "@/components/ui/Section"

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeProcess />
      <HomeProducts />
      <HomeProblems />
      <HomeTrust />
      <HomeCaseStudies />

      <Section className="bg-white">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Questions buyers often ask"
            description="Straight answers about how we work, what we charge, and what to expect."
          />
          <div className="mt-12">
            <Faq />
          </div>
        </Container>
      </Section>

      <CtaBanner />
    </>
  )
}
