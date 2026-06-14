import Section, { SectionHeader } from '@/components/shared/Section'
import FAQ from '@/components/shared/FAQ'
import HomeHero from '@/components/home/HomeHero'
import ServicesOverview from '@/components/home/ServicesOverview'
import ProcessOverview from '@/components/home/ProcessOverview'
import ProductsOverview from '@/components/home/ProductsOverview'
import Problems from '@/components/home/Problems'
import Trust from '@/components/home/Trust'
import CaseStudyHighlights from '@/components/home/CaseStudyHighlights'
import InquirySection from '@/components/home/InquirySection'
import { FAQS } from '@/content/site'

const Home = () => (
  <>
    <HomeHero />

    <Section id="services" soft>
      <SectionHeader
        kicker="What we do"
        title="End-to-end China sourcing services"
        description="From the first search for a factory to the moment the container arrives at your destination port, we manage the process with structured, written reporting."
      />
      <ServicesOverview />
    </Section>

    <Section id="how-it-works">
      <SectionHeader
        kicker="The process"
        title="How a project moves from inquiry to delivery"
        description="A predictable, six-step process with weekly updates and a written report at every milestone."
      />
      <ProcessOverview />
    </Section>

    <Section id="products" soft>
      <SectionHeader
        kicker="What we source"
        title="Products we source from China"
        description="We work across eight main product categories. If your category is not listed, ask us — we likely have a vetted supplier."
      />
      <ProductsOverview />
    </Section>

    <Section id="problems">
      <SectionHeader
        kicker="Problems we solve"
        title="Sound familiar? These are the issues we are built to address."
        description="Most of our clients come to us after a bad experience with a previous supplier. Here are the patterns we see most often, and what we do about them."
      />
      <Problems />
    </Section>

    <Section id="trust" soft>
      <SectionHeader
        kicker="Why SSourcing China"
        title="A few numbers we are comfortable quoting"
        description="We are deliberately specific. Round figures and superlatives are easy; written records are harder."
      />
      <Trust />
    </Section>

    <Section id="case-studies">
      <SectionHeader
        kicker="Selected work"
        title="Case studies"
        description="A few examples of how we have helped buyers solve a real problem. Names are kept confidential at the request of the clients."
      />
      <CaseStudyHighlights />
    </Section>

    <Section id="faq" soft>
      <SectionHeader
        kicker="FAQ"
        title="Common questions from new clients"
        description="If you have a question that is not answered here, send it through the inquiry form and we will reply directly."
      />
      <FAQ items={FAQS} />
    </Section>

    <InquirySection />
  </>
)

export default Home
