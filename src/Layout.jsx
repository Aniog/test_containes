import Navbar from '../components/nav/Navbar';
import Footer from '../components/footer/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      <Navbar />
      <main className="flex-1 pt-14">
        {children}
      </main>
      <Footer />
    </div>
  );
}
