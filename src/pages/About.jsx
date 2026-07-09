import SectionHeading from '@/components/SectionHeading.jsx'

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-32">
      <div className="mx-auto max-w-3xl px-6 pb-24 text-center md:px-10">
        <SectionHeading title="Our Story" centered />
        <p className="leading-relaxed text-muted">
          Velmora is a demi-fine jewelry brand for women who appreciate quiet luxury. We design
          every piece in-house, using 18k gold-plated finishes and hypoallergenic materials. Our
          mission is simple: create jewelry that feels personal, lasts, and never asks you to
          compromise on style or values.
        </p>
      </div>
    </div>
  )
}
