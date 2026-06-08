import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-parchment flex flex-col">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
