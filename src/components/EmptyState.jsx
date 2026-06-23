const EmptyState = ({ title, description }) => {
  return (
    <div className="rounded-[2rem] border border-brand-line bg-brand-surface p-10 text-center text-brand-espresso">
      <h3 className="font-serif text-3xl">{title}</h3>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-brand-mink">{description}</p>
    </div>
  )
}

export default EmptyState
