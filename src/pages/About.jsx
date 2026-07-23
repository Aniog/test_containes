import { SectionHeading } from '@/components/ui/SectionHeading';

export default function About() {
  return (
    <main className="min-h-screen bg-paper pt-32">
      <div className="mx-auto max-w-3xl px-4 pb-24 text-center sm:px-6 lg:px-8">
        <SectionHeading title="Our Story" centered />
        <p className="mt-8 font-sans text-base font-light leading-relaxed text-taupe">
          Velmora Fine Jewelry is a demi-fine jewelry studio creating pieces
          designed to be treasured. More content coming soon.
        </p>
      </div>
    </main>
  );
}
