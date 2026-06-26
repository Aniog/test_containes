export function GenericPage({ title, children }) {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">{title}</h1>
      <div className="prose max-w-none text-muted-foreground">
        {children || <p>Coming soon...</p>}
      </div>
    </div>
  );
}
