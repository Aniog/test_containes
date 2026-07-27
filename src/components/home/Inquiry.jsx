import InquiryForm from "@/components/shared/InquiryForm"

export default function Inquiry() {
  return (
    <section className="bg-background py-16 md:py-24" id="inquiry">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 id="inquiry-title" className="section-title">Start Your Sourcing Project</h2>
            <p id="inquiry-subtitle" className="section-subtitle">
              Fill out the form and our team will get back to you with a tailored sourcing plan within 24 hours.
            </p>
            <div className="mt-8 space-y-6 text-foreground">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold">Share your requirements</h4>
                  <p className="text-sm text-muted">Product specs, target price, quantity, and any certifications.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold">Receive a sourcing proposal</h4>
                  <p className="text-sm text-muted">We outline our approach, timeline, and transparent fee structure.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold">Begin supplier matching</h4>
                  <p className="text-sm text-muted">We start searching and verifying suppliers only after your approval.</p>
                </div>
              </div>
            </div>
          </div>
          <InquiryForm />
        </div>
      </div>
    </section>
  )
}
