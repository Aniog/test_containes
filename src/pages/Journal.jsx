import SectionHeading from '@/components/SectionHeading.jsx'

export default function Journal() {
  return (
    <div className="min-h-screen bg-background pt-32">
      <div className="mx-auto max-w-3xl px-6 pb-24 text-center md:px-10">
        <SectionHeading title="Journal" subtitle="Coming Soon" centered />
        <p className="text-muted">Styling notes, gift guides, and behind-the-scenes stories.</p>
      </div>
    </div>
  )
}
