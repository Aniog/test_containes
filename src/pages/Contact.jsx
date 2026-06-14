import * as React from "react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Contact as ContactSection } from "@/components/home/Contact"

export default function Contact() {
  return (
    <main className="bg-ink">
      <section className="bg-slate-950 border-b border-line">
        <div className="container-x py-20 md:py-28">
          <SectionHeading
            eyebrow="Contact"
            title="Let's spec the right machine together."
            subtitle="A real engineer — not a chatbot — will reply within one business day. Bring your toughest parts."
          />
        </div>
      </section>
      <ContactSection variant="page" />
    </main>
  )
}
