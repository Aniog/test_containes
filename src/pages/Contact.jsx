import PageHero from '@/components/layout/PageHero'
import ContactDetails from '@/components/sections/ContactDetails'
import InquiryForm from '@/components/sections/InquiryForm'

const Contact = () => {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your sourcing requirement"
        description="If you need supplier search, factory verification, quality inspection coordination, production follow-up, or shipping support, send us your project details."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <ContactDetails />
        <InquiryForm />
      </section>
    </div>
  )
}

export default Contact
