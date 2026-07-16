import Button from '@/components/ui/Button'

export default function EmptyState({ title, description, onReset }) {
  return (
    <div className="rounded-[2rem] border border-dashed border-velmora-sand/60 bg-white px-6 py-16 text-center shadow-soft">
      <p className="text-xs uppercase tracking-[0.28em] text-stone-500">No matches</p>
      <h3 className="mt-3 font-heading text-4xl text-stone-900">{title}</h3>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-stone-600">{description}</p>
      <Button variant="outline" className="mt-6" onClick={onReset}>
        Reset filters
      </Button>
    </div>
  )
}
