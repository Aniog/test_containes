import { SectionHeading } from '@/components/ui/SectionHeading';

export default function Journal() {
  return (
    <main className="min-h-screen bg-paper pt-32">
      <div className="mx-auto max-w-3xl px-4 pb-24 text-center sm:px-6 lg:px-8">
        <SectionHeading title="Journal" centered />
        <p className="mt-8 font-sans text-base font-light leading-relaxed text-taupe">
          Styling notes, behind-the-scenes studio moments, and the stories behind
          our collections. Coming soon.
        </p>
      </div>
    </main>
  );
}
