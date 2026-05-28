import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-zinc-950 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
