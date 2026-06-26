import { Container } from '@/components/ui/Container'
import { InquiryForm } from '@/components/contact/InquiryForm'

export function InquirySection() {
  return (
    <section id="inquiry" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <InquiryForm />
        </div>
      </Container>
    </section>
  )
}
