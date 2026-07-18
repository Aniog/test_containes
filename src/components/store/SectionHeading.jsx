const SectionHeading = ({ kicker, title, description, action }) => {
  return (
    <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-3">
        {kicker && <p className="editorial-kicker">{kicker}</p>}
        <h2 className="text-4xl leading-none text-velvet sm:text-5xl">{title}</h2>
        {description && <p className="text-sm leading-7 text-ink/75 md:text-base">{description}</p>}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  )
}

export default SectionHeading
