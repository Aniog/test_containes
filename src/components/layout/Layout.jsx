import Navigation from './Navigation';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <Navigation />
      <main>{children}</main>
      <footer className="border-t border-[#E8E0D0] py-10 px-8 md:px-12 mt-24">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="font-serif text-lg font-light tracking-[0.15em] text-[#3D5C3A]">
            Phyllotaxis
          </span>
          <p className="font-sans text-xs tracking-[0.15em] uppercase text-[#8B7355]">
            A study in botanical mathematics
          </p>
        </div>
      </footer>
    </div>
  );
}
