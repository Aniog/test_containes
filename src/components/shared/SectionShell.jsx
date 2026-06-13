const SectionShell = ({ children, className = '' }) => {
  return (
    <section className={["mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24", className].join(' ')}>
      {children}
    </section>
  )
}

export default SectionShell
